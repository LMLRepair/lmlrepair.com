"use server";

import prisma from "@/lib/prisma";
import { Brand } from "@prisma/client";
import { PartialBy } from "../type";

export const getBrands = async (): Promise<Brand[]> => {
  try {
    return await prisma.brand.findMany({
      orderBy: { brand_name: "asc" },
    });
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw new Error("Failed to fetch brands");
  }
};

export const createBrand = async (brandData: PartialBy<Brand, "brand_id">) => {
  try {
    return await prisma.brand.create({
      data: brandData,
    });
  } catch (error) {
    console.error("Error creating brand:", error);
    throw new Error("Failed to create brand");
  }
};

export const updateBrand = async (
  brandId: number,
  updatedData: PartialBy<Brand, "brand_id" | "brand_image">
) => {
  try {
    return await prisma.brand.update({
      where: { brand_id: brandId },
      data: updatedData,
    });
  } catch (error) {
    console.error("Error updating brand:", error);
    throw new Error("Failed to update brand");
  }
};