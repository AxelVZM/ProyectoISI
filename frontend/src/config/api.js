// Configuración global de la API
const envBase = import.meta.env.VITE_API_URL;
const normalizedBase = envBase ? envBase.replace(/\/+$/g, "") : "";
export const API_BASE_URL = normalizedBase
  ? normalizedBase.endsWith("/api")
    ? normalizedBase
    : `${normalizedBase}/api`
  : "/api";

// Para usar en componentes que hacen fetch directo
export const getApiUrl = (endpoint) => {
  const base = API_BASE_URL.replace(/\/api$/g, ""); // Remover /api si existe
  return `${base}${endpoint}`;
};
