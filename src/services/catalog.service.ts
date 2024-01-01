import { off } from "process";
import { ICatalogRepository } from "../interface/catalogRepository_interface";

export class CatalogService {
  private _repository: ICatalogRepository;
  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }
  async createProduct(input: any) {
    const data = await this._repository.create(input);
    if (!data.id) {
      throw new Error("unable to create product");
    }
    return data;
  }
  async updateProduct(input: any) {
    const data = await this._repository.update(input);
    //emit event to update record in elastic search
    if (!data.id) {
      throw new Error("unable to update product");
    }
    return data;
  }
  //instead of this we will coll from Elastic search
  async getProducts(limit: number, offset: number) {
    const products = await this._repository.find(limit, offset);
    return products;
  }

  // instead of this we will get product from Elastic search
  async getProduct(id: number) {
    const product = await this._repository.findOne(id);
    if (product == null) {
      throw new Error("unable to get product");
    }
    return product;
  }
  async deleteProduct(id: number) {
    const response = await this._repository.delete(id);
    if (!response.id) {
      throw new Error("unable to delete product");
    }
    //delete record form Elastic search
    return response;
  }
}
