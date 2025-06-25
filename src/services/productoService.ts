// src/services/productoService.ts
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const getProductos = async () => {
  const res = await axios.get(`${API_URL}/productos`)
  return res.data
}


