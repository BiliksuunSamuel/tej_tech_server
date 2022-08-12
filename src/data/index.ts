import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";
import constants from "../constants";
import { DummyProductModel } from "./models";

export function dummyProducts(count?: number): DummyProductModel[] {
  const products: DummyProductModel[] = [];

  Array.from({ length: count ? count : 75 }).forEach(() => {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      adjective: faker.commerce.productAdjective(),
      cost: faker.commerce.price(1500, 3500, 2, constants.currency),
      category: faker.commerce.productMaterial(),
      rating: Math.floor(Math.random() * 5),
      brand: Math.floor(Math.random() * 10) % 2 === 0 ? true : false,
      image: faker.image.image(),
      gallery: getGallery(),
    });
  });

  function getGallery(count?: number) {
    const images: string[] = [];
    Array.from({ length: count ? count : 5 }).forEach(() => {
      images.push(faker.image.image());
    });
    return images;
  }

  return products;
}
