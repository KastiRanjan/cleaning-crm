import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { customerSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for customer.
async function getCustomers() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(admin)/customers/data/customer.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(customerSchema).parse(tasks);
}

export default async function TaskPage() {
  const customers = await getCustomers();

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
        {/* <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Our Customers!
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of our customers!
            </p>
          </div>
          <div className="flex items-center space-x-2"></div>
        </div> */}
        <DataTable data={customers} columns={columns} />
      </div>
    </>
  );
}
