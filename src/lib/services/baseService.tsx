const API_BASE_URL = "http://147.93.152.38:8080/";

// 🔓 Public API (NO AUTH)
export async function postPublic<T>(
  endpoint: string,
  body?: any
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  console.log('postPublicly',res);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || "Public API error");
  }

  return res.json() as Promise<T>;
}

// 🔐 Protected API (JWT REQUIRED)
export async function postProtected<T>(
  endpoint: string,
  body?: any
): Promise<T> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No auth token found");
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    throw new Error("Unauthorized");
  }

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || "Protected API error");
  }

  return res.json();
}

export async function postProtectedFormData<T>(
  endpoint: string,
  formData: FormData
): Promise<T> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No auth token found");
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // ❌ DO NOT set Content-Type here
    },
    body: formData,
  });

  if (res.status === 401) throw new Error("Unauthorized");
  if (!res.ok) throw new Error(await res.text());

  return res.json();
}

