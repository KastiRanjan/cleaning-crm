"use client";

import { Button } from "@/registry/new-york/ui/button";

interface DataTableToolbarProps<TData> {}

export function CategoryTableToolbar<TData>({}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Button className="bg-primary">Add Category</Button>
      </div>
    </div>
  );
}
