import { ObjectId } from 'mongoose';

export class ProductDto {
  _id: ObjectId;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  size: string;
  model: string;
  image: string;
  imageBig: string;
  imagesFeatures: string[];
  diaCoupling?: string;
  diaPipe?: string;
  weight: string;
  price: number;
  priceDiscount: number;
}
