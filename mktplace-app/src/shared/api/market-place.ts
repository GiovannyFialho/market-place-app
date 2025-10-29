import axios, { type AxiosInstance } from "axios";

export class MarketPlaceAPIClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://192.168.68.103:3001",
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceAPIClient = new MarketPlaceAPIClient().getInstance();
