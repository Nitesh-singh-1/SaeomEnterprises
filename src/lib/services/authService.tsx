// const API_BASE_URL = "https://localhost:7257";
import { API_BASE_URL } from "@/config/apiurl";

export async function login(payload:any) {
  const res = await fetch(`${API_BASE_URL}api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json();
}


