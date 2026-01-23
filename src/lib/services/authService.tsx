const API_BASE_URL = "http://147.93.152.38:8080";

export async function login(payload:any) {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
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


