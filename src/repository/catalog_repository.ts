import { ICatalogRepository } from "../interface/catalogRepository_interface";
import { Product } from "../models/product_model";

export class CatalogRepository implements ICatalogRepository {
  create(data: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  update(data: Product): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  delete(id: any) {
    throw new Error("Method not implemented.");
  }
  find(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
