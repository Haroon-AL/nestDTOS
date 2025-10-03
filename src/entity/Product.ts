import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // will create a table
export class Product {
  @PrimaryGeneratedColumn() //auto increament 
  id: number;
  @Column()
  price: number;
  @Column()
  quantity: number;
  @Column()
  created_at: Date;
  @Column()
  last_updated_at: Date;
  @Column()
  brand: string;
  @Column()
  currency: string;
  @Column()
  description: string;
  @Column()
  name: string;
  @Column()
  image_url: string[];
}
