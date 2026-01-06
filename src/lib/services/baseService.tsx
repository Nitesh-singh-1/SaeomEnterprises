const API_BASE_URL = "https://localhost:7257/";

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
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    credentials: "include", // sends JWT cookie
    headers: {
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
