import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      //this field is not necessary
      //unless you use the built-in form.
      //However it also gives us our "credentials" type below.

      credentials: {
        email: { label: "username" },
        password: { label: "password", type: "password" },
      },

      //the credentials are passed with our
      //login form.
      async authorize(credentials) {
        let payload: any = {};
        if (credentials) {
          payload["email"] = credentials?.email;
          payload["password"] = credentials?.password;
        }
        //verify our credentials using the route
        //we created above
        const res = await fetch(`http://localhost:4000/framework/api/login`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const token = await res.json();
        if (!res.ok) {
          throw new Error("Incorrect Email or Password");
        }

        const sessionUser = await fetch(
          `http://localhost:4000/framework/api/user_get_info`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.token}`,
            },
          }
        )
          .then(async (res) => {
            if (res.ok) return await res.json();
            else return null;
          })
          .catch((err) => {
            console.log(err);
          });

        const user: User = {
          token: token.token,
          ...sessionUser,
        };

        if (user) return user;

        return null;
      },
    }),
  ],

  //remove this field
  //if you use the built-in form
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log({ url, baseUrl });
      return baseUrl;
    },

    async jwt({ token, user, account }) {
      console.log(token);
      if (account && user) {
        return {
          ...token,
          ...user,
        };
      }

      return token;
    },

    async session({ session, token }) {
      console.log(token);
      session.user = token;
      return session;
    },
  },
});

export { handler as POST, handler as GET };
