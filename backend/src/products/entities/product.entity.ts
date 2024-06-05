import { ObjectId } from 'mongoose';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: ObjectId;

  @PrimaryColumn()
  title: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;

  @Column()
  size: string;

  @Column()
  model: string;

  @Column()
  image: string;

  @Column()
  imageBig: string;

  @Column()
  imagesFeatures: string[];

  @Column()
  diaCoupling?: string;

  @Column()
  diaPipe?: string;

  @Column()
  weight: string;

  @Column()
  price: number;

  @Column()
  priceDiscount: number;
}
