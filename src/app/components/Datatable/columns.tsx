import { ColumnDef } from "@tanstack/react-table";

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
    cell: ({ row }) => row.index + 1, // serial number
  },
  {
    accessorKey: "categoryName",
    header: "Category Name",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const isActive = row.original.isActive;

      return (
        <button
          onClick={() =>
            console.log(
              "Toggle category:",
              row.original.categoryId,
              !isActive
            )
          }
          className={`px-3 py-1 rounded-full text-xs font-semibold transition
            ${
              isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
        >
          {isActive ? "Active" : "Inactive"}
        </button>
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
      const isActive = row.original.isActive;

      return (
        <button
          onClick={() =>
            console.log(
              "Toggle category:",
              row.original.productId,
              !isActive
            )
          }
          className={`px-3 py-1 rounded-full text-xs font-semibold transition
            ${
              isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
        >
          {isActive ? "Active" : "Inactive"}
        </button>
      );
    },
  },
];
