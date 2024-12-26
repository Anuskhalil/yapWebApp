import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Submit contact form
export const submitContactForm = (formData) => apiClient.post('/contact', formData);

// Submit student registration
// export const submitStudentRegistration = (studentData) => apiClient.post('/students', studentData);

// Exporting API client
export default apiClient;
