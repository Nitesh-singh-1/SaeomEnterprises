import { postPublic, postProtected } from "./baseService";
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