"use client";

import { DataTableViewOptions } from "@/app/(admin)/staff/components/data-table-view-options";
import { Input } from "@/registry/new-york/ui/input";
import { Table } from "@tanstack/react-table";
import { AddStaff } from "./add-staff";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-10 w-[150px] lg:w-[250px]"
        />
      </div>
      <AddStaff />
      <DataTableViewOptions table={table} />
    </div>
  );
}
