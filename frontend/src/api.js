const API_URL = 'http://localhost:5000/api';

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  console.log(response)
  return response.json();
};

export const registerUser = async (data) => {
    console.log(data)
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  console.log(response)
  return response.json();
};

export const fetchVideos = async () => {
  const response = await fetch(`${API_URL}/videos`, {
    headers: { Authorization: localStorage.getItem('token') },
  });
  return response.json();
};

export const uploadVideo = async (formData) => {
  const response = await fetch(`${API_URL}/videos/upload`, {
    method: 'POST',
    headers: { Authorization: localStorage.getItem('token') },
    body: formData,
  });
  return response.json();
};
