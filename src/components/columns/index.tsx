import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { Product } from "@/_types/product";

interface ColumnsProps {
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export const columns = ({ onEdit, onDelete }: ColumnsProps): ColumnDef<Product>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "count",
    header: "Count",
    cell: ({ row }) => <div>{row.getValue("count")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>{row.getValue("price")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" onClick={() => onEdit(row.original)}>
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onDelete(row.original)}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];
