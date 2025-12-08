import axios, { type AxiosInstance } from "axios";

export const baseURL = "http://192.168.68.103:3001";

export class MarketPlaceAPIClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceAPIClient = new MarketPlaceAPIClient().getInstance();
