import { postPublic, postProtected, postProtectedFormData } from "./baseService";
import { Category } from "@/app/contactus/page";
// 🔓 User-facing / public
export function getCategories(categoryStatus?: "actv" | "dactv") {
  return postPublic<Category[]>("api/category/getcategory", { categoryStatus });
}

// 🔐 Admin / Edit
export function getCategoryById(categoryID: number) {
  return postProtected("/getcategorybyID", { categoryID });
}

export function addCategory(payload:any){
    return postProtected("api/Category/Addcategory",payload);
}

export function addEnquiry(payload:any){
    return postPublic("api/Enquiry/AddEnquiry",payload);
}

export const logout = async () => {
  return postProtected("api/auth/logout");
};

export const getAllProduct = async () =>{
    return postPublic("api/Product/getAllProduct");
}

export function AddProductSave(payload:FormData){
    return postProtectedFormData ("api/Product",payload);
}

export async function getProductByID(payload:any) {
  return postPublic(`api/Product/getProductByID`,payload);
}

export async function updateProduct(payload:any) {
  return postProtected(`api/Product/updateProduct`,payload);
}


