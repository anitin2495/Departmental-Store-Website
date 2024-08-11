// Categories.tsx
"use client";

import Container from "../Container";
import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "@/utils/Categories";
import { useState } from "react";
import Category from "./Category";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const [selectedCategory, setSelectedCategory] = useState(category || "All");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  if (!isMainPage) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between">
          <select
            value={selectedCategory}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            {categories.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </Container>
      {selectedCategory !== "All" && (
        <div className="bg-white">
          <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
              {categories
                .find((item) => item.label === selectedCategory)
                ?.subcategories?.map((subCategory) => (
                  <Category
                    key={subCategory.label}
                    label={subCategory.label}
                    icon={categories.find(
                      (item) => item.label === selectedCategory
                    )?.icon}
                    selected={category === subCategory.label}
                  />
                ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Categories;
