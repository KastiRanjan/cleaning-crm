import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import { Input } from "@/registry/new-york/ui/input";
import React from "react";
import { CategoryTableToolbar } from "./category-table-toolbar";
import { FileEdit, Trash } from "lucide-react";

type Props = {};

const categoryList = [
  {
    id: 1,
    name: "Home Cleaning",
  },
  {
    id: 2,
    name: "School Cleaning",
  },
  {
    id: 3,
    name: "Apartment Cleaning",
  },
  {
    id: 44,
    name: "Category4",
  },
];

export default function CategoryTable({}: Props) {
  return (
    <div className="space-y-4">
      <CategoryTableToolbar />
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Service Category</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-1">
          {categoryList?.map((category) => (
            <div
              key={category.id}
              className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {category.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Email digest, mentions & all activity.
                </p>
              </div>
              <div className="flex gap-2">
                {" "}
                <Button variant="outline" size={"sm"}>
                  <Trash size={12} />
                </Button>{" "}
                <Button variant="outline" size={"sm"}>
                  <FileEdit size={12} />
                </Button>{" "}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 mt-3">
            <Input id="name" placeholder="Name of category" />
            <Button className="">o</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
