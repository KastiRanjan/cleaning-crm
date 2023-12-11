import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar";
import { Card, CardContent, CardHeader } from "@/registry/new-york/ui/card";
import { Separator } from "@/registry/new-york/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs";
import { MapPin } from "lucide-react";
import Image from "next/image";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/secure/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/secure/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4 pb-4">
                  <Avatar>
                    <AvatarImage src="/avatars/02.png" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      p@example.com
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
              </CardHeader>
              <CardContent>
                <ul>
                  <li>
                    <span className="text-sm text-muted-foreground">
                      Last Service:
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-muted-foreground">
                      Customer #:
                    </span>
                  </li>
                  <li>
                    <span className="text-sm text-muted-foreground">
                      Opened:
                    </span>
                  </li>
                </ul>
                <Separator className="my-4" />
                <div>
                  <div className="pb-3">
                    <h3 className="text-sm font-bold">Contact information</h3>
                  </div>
                  <div className="pb-4">
                    <h5 className="text-muted-foreground text-sm text-bold">
                      Email Address
                    </h5>
                    <span className="text-sm">Rkastew@gmail.com</span>
                  </div>
                  <div className="pb-4">
                    <h5 className="text-muted-foreground text-sm text-bold">
                      Phone Number
                    </h5>
                    <span className="text-sm">+977 9863570000</span>
                  </div>
                  <div className="pb-4">
                    <h5 className="text-muted-foreground text-sm text-bold">
                      Address
                    </h5>
                    <span className="text-sm">
                      RWF6+X6M Bandargaah, Bushehr,
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-3">
              <CardHeader>
                <div className="">
                  <div>
                    <p className=" font-medium  text-muted-foreground text-center mb-3">
                      Repeating
                    </p>

                    <div className="flex items-center space-x-4 pb-4">
                      <Avatar>
                        <AvatarImage src="/avatars/02.png" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none text-primary mb-1">
                          Repeats every twice a week
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Monday @ 9:30 AM - 10:30 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div className="col-span-8">
            <Card>
              <Tabs defaultValue="account">
                <CardHeader>
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="map">Map</TabsTrigger>
                    <TabsTrigger value="points">Points</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="gift">Gift</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  </TabsList>
                </CardHeader>
                <TabsContent value="map">
                  <div className="flex items-center px-5 pb-5 gap-3">
                    <MapPin />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        RWF6+X6M Bandargaah, Bushehr,
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Bushehr Province, Iran
                      </p>
                    </div>
                  </div>
                  <iframe
                    src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    width="100%"
                    height="500"
                  ></iframe>
                </TabsContent>
                <TabsContent value="points">Points</TabsContent>
                <TabsContent value="email">Points</TabsContent>
                <TabsContent value="reviews">Points</TabsContent>
                <TabsContent value="gift">Points</TabsContent>
                <TabsContent value="timeline">Timeline</TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
