"use client";

import { Table } from "@tanstack/react-table";

import { DataTableViewOptions } from "@/app/(admin)/customers/components/data-table-view-options";
import { Input } from "@/registry/new-york/ui/input";

import { statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { ExportCustomer } from "./export-customer";
import { Button } from "@/registry/new-york/ui/button";

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
          placeholder="Search customer..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-10 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("type") && (
          <DataTableFacetedFilter
            column={table.getColumn("type")}
            title="Subscription"
            options={statuses}
          />
        )}
        <ExportCustomer />
      </div>
      <Button>Add Customer</Button>
      <DataTableViewOptions table={table} />
    </div>
  );
}
