import axios from "axios";

//Axios call with interceptor
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TEST_URL,
});

//Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzhjNmJmMzMxNzBiZDQ1MDFjYTRjYiIsImVtYWlsIjoiY3VzdG9tZXI1QGdtYWlsLmNvbSIsImlhdCI6MTY5ODM4MDk5Nn0.fjyOPWpzZuygXn8va7jT2qyoj0j_RSKXhBnODCDaPxQ";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const result = error.config;
    console.log("response config", result);
  }
);
