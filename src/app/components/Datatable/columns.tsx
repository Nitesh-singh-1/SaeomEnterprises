import { ColumnDef } from "@tanstack/react-table";
import { StatusSwitch } from "@/components/ui/StatusToggle";
import { useState } from "react";
export type Employee = {
  id: number;
  employeeName: string;
  department: string;
  designation: string;
};
export type CategoryColumn = {
   categoryId: number;
  categoryName:string;
  isActive: boolean;
}

export type ProductColumn={
  productId: number;
  productName: string;
  productDescription:string;
  //categoryId:number;
  //categoryName:string;
  isActive: boolean;
  //createdOn:string;
  //primaryImage:string;
}

export const employeeColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "employeeName",
    header: "Name",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
     <button
        className="text-blue-600 text-xs"
        onClick={() => console.log(row.original.id)}
      >
        Edit
      </button>
    ),
  },
];

export const categoryColumns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "categoryId",
    header: "Sr No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "categoryName",
    header: "Category Name",
  },
  {
    id: "action",
    header: "Status",
    cell: ({ row }) => {
      const [isActive, setIsActive] = useState(row.original.isActive);

      return (
        <StatusSwitch
          checked={isActive}
          label={isActive ? "Active" : "Inactive"}
          onChange={() => {
            const newValue = !isActive;
            setIsActive(newValue); // ✅ toggle state

            console.log(
              "Toggle Category:",
              row.original.categoryId,
              newValue
            );

            // 🔌 API call later
            // updateCategoryStatus(row.original.categoryId, newValue)
          }}
        />
      );
    },
  },
];

export const productColumn: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "productId",
    header: "Sr No",
    cell: ({ row }) => row.index + 1, // serial number
  },
  {
    accessorKey: "productName",
    header: "Product Name",
  },
  {
accessorKey:"productDescription",
header:"Description",
  },

  {
    id: "action",
    header: "Action",
cell: ({ row }) => {
      const [isActive, setIsActive] = useState(row.original.isActive);

      return (
        <StatusSwitch
          checked={isActive}
          label={isActive ? "Active" : "Inactive"}
          onChange={() => {
            const newValue = !isActive;
            setIsActive(newValue); // ✅ toggle state

            console.log(
              "Toggle Category:",
              row.original.productId,
              newValue
            );

            // 🔌 API call later
            // updateCategoryStatus(row.original.categoryId, newValue)
          }}
        />
      );
    },
  },
];
