// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is beging loaded.Please wait",
  },
  success: {
    title: "success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "Error",
    message: "Error occurred while fetching response from server.Please try again"
  },
  requestFailure: {
    title: "Error",
    message: "An error occurred while parsing request data",
  },
  networkError: {
    title: "Error",
    message: "Unable to connect with server. Please check internet connectivity and try again later",
  }
};

//API SERVICE CALL  

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
};