import { promises as fs } from "fs";
import { Metadata } from "next";
import Image from "next/image";
import path from "path";
import { z } from "zod";

import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
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
        <DataTable data={customers} columns={columns} />
      </div>
    </>
  );
}
