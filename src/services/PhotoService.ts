import { api } from "./baseApi";
import { TypeData } from "pages/MainPage/MainPage.types";

class PhotoService {
  async getPhotos(page: number): Promise<TypeData> {
    return await api.get(`v1/curated?page=${page}`).json();
  }
  async searchPhotos(trands: string): Promise<TypeData> {
    return await api.get(`v1/search?${trands}`).json();
  }
}

export const photoService = new PhotoService();
