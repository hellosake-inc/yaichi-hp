"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import menuData from "@/data/menu.nextjs.json";
import type {
  MenuData,
  MenuItem,
  MenuSection as MenuSectionType,
} from "@/types/menu";
import ScrollAnimated from "./ScrollAnimated";

const typedMenuData = menuData as MenuData;

const formatPrice = (price: number | null) => {
  if (price === null || price === 0) return "";
  return `$${price.toFixed(2)}`;
};

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-start py-2 border-b border-green-200/30 last:border-0">
    <span className="text-gray-700 text-sm pr-2 flex-1">{item.name}</span>
    <span className="text-gray-900 font-medium text-sm whitespace-nowrap">
      {formatPrice(item.price)}
    </span>
  </div>
);

const MenuCategory = ({
  title,
  items,
  image,
  isLeft = true,
}: {
  title: string;
  items: MenuItem[];
  image: string;
  isLeft?: boolean;
}) => (
  <ScrollAnimated variant={isLeft ? "left" : "right"}>
    <div
      className={`flex flex-col ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-6 mb-12`}
    >
      <div className="lg:w-1/2">
        <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="bg-green-50/50 rounded-lg p-6 h-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
          <div className="space-y-1">
            {items.slice(0, 5).map((item, index) => (
              <MenuItemCard key={index} item={item} />
            ))}
            {items.length > 5 && (
              <p className="text-sm text-gray-500 pt-2">
                +{items.length - 5} more items available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  </ScrollAnimated>
);

const MenuSection = () => {
  // Select featured categories to display
  const featuredCategories = [
    {
      title: "Appetizers",
      items: typedMenuData["Appetizers"] as MenuItem[],
      image: "/appetizers.avif",
    },
    {
      title: "Udon",
      items:
        (typedMenuData["Udon (Japanese Wheat Noodles)"] as any)?.["Hot Udon"] ||
        [],
      image: "/udon.avif",
    },
    {
      title: "Seafood Bowls",
      items: typedMenuData[
        "Seafood Bowls (All served with Minced tuna Hokkaido Scallop, Tobiko, and Snow Crab)"
      ] as MenuItem[],
      image: "/bowl.avif",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimated variant="opacity" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience authentic Japanese cuisine with our carefully crafted
            selection of udon, seafood, and traditional dishes
          </p>
        </ScrollAnimated>

        <div className="space-y-8">
          {featuredCategories.map((category, index) => (
            <MenuCategory
              key={category.title}
              title={category.title}
              items={category.items}
              image={category.image}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        <ScrollAnimated variant="opacity" className="text-center mt-12">
          <a
            href="https://www.toasttab.com/yaichi-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Full Menu on ToastTab
            <ExternalLink className="w-4 h-4" />
          </a>
        </ScrollAnimated>
      </div>
    </section>
  );
};

export default MenuSection;
