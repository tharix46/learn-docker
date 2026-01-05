// Centralized API base URL for the frontend.
// Uses Vite env var `VITE_API_URL` when available, otherwise falls back to localhost.
export const API_URL =
  import.meta?.env?.VITE_API_URL || "http://localhost:5050";
