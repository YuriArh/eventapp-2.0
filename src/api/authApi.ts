import axios from "axios";

const API_BASE_URL = "http://localhost:1337"; // Базовый URL вашего API

export const createUser = async (data: {
  name: string;
  password: string;
  email: string;
  username?: string;
}) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/local/register`,
      data
    );
    return response.data;
  } catch (error) {
    // Обработка ошибок
    console.error("Error:", error);
    throw error;
  }
};

export const loginUser = async (data: {
  password: string;
  identifier: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/local`, data);
    return response.data;
  } catch (error) {
    // Обработка ошибок
    console.error("Error:", error);
    throw error;
  }
};
