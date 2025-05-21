import axios from 'axios';

const API_BASE = 'http://localhost:8000/api/realestate';

export const fetchProperties = async () => {
  const res = await axios.get(`${API_BASE}/properties/`);
  return res.data;
};