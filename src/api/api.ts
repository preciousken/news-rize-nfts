import { config } from "../config";
import axios from "axios";

export interface UserResponse {
  code?: number;
  data?: any; // Replace 'any' with a more specific type
  message?: string;
}

export interface Chatbotresponse {
  status?: String,
  message?:String,
  data?:Object,
}

export interface Ticketresponse {
  status?: String,
  message?:String,
  data?:Object,
}

const apiService = {
  post: async (endpoint, data, headers?) => {
    try {
      const response = await axios.post(`${config.API_URL}${endpoint}`, data, {
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
  put: async (endpoint, data, headers?) => {
    try {
      const response = await axios.put(`${config.API_URL}${endpoint}`, data, {
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
          ...headers,
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
  // chatbot access only
  chatbotget: async (endpoint) => {
    try {
      const response = await axios.get(`${config.chatBotAPI}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
  // Chatbot access with headers
  H_chatbotget: async (endpoint) => {
    try {
      const response = await axios.get(`${config.chatBotAPI}${endpoint}`, {
        headers: {
          "chatbot_access_token": localStorage.getItem("rizebot"),
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
  H_chatbotpost: async (endpoint,data) => {
    try {
      const response = await axios.post(`${config.chatBotAPI}${endpoint}`, data ,{
        headers: {
          "chatbot_access_token": localStorage.getItem("rizebot"),
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  // ticket api
  createticket: async (endpoint,data) => {
    try {
      const response = await axios.post(`${config.chatBotAPI}${endpoint}`, data 
      // ,{
      //   headers: {
      //     "chatbot_access_token": localStorage.getItem("rizebot"),
      //   },
      // }
      );
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
};

export default apiService;
