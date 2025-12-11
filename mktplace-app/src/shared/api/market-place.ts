import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { type AxiosInstance } from "axios";

export const baseURL = "http://192.168.68.104:3001";

export class MarketPlaceAPIClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });

    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem("marketplace-auth");

        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

export const marketPlaceAPIClient = new MarketPlaceAPIClient().getInstance();
