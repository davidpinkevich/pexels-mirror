import { api } from "./baseApi";
import { TypePhotos } from "components/Photos/Items/Items.types";

class PhotoService {
  async getPhotos(): Promise<TypePhotos> {
    return await api.get("v1/curated").json();
  }
  async searchPhotos(trands: string): Promise<TypePhotos> {
    return await api.get(`v1/search?${trands}`).json();
  }
}

export const photoService = new PhotoService();
