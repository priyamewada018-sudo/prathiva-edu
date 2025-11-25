import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchColleges = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/colleges`);
    return response.data;
  } catch (error) {
    console.error('Error fetching colleges:', error);
    throw error;
  }
};

export const fetchExams = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/exams`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exams:', error);
    throw error;
  }
};

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};