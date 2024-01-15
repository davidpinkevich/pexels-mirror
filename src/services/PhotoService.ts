import { api } from "./baseApi";
import { TypePhotos } from "types";

class PhotoService {
  async getPhotos(): Promise<TypePhotos> {
    return await api.get("v1/curated").json();
  }
}

export const photoService = new PhotoService();
