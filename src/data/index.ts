import type { Iproduct } from "../interfaces";

export const productList: Iproduct[] = [
  {
    id: "1",
    title: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    imageURL: "https://example.com/images/headphones.jpg",
    price: "129.99",
    colors: ["black", "white", "blue"],
    category: {
      name: "Electronics",
      imageURL: "https://example.com/categories/electronics.jpg"
    }
  },
  {
    id: "2",
    title: "Organic Cotton T-Shirt",
    description: "Comfortable 100% organic cotton t-shirt with modern fit",
    imageURL: "https://example.com/images/tshirt.jpg",
    price: "24.99",
    colors: ["white", "black", "gray", "navy"],
    category: {
      name: "Clothing",
      imageURL: "https://example.com/categories/clothing.jpg"
    }
  },
  {
    id: "3",
    title: "Stainless Steel Water Bottle",
    description: "Double-wall insulated water bottle keeps drinks cold for 24 hours",
    imageURL: "https://example.com/images/waterbottle.jpg",
    price: "34.95",
    colors: ["silver", "black", "blue", "green"],
    category: {
      name: "Accessories",
      imageURL: "https://example.com/categories/accessories.jpg"
    }
  },
  {
    id: "4",
    title: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitor and GPS",
    imageURL: "https://example.com/images/smartwatch.jpg",
    price: "199.99",
    colors: ["black", "silver", "gold"],
    category: {
      name: "Electronics",
      imageURL: "https://example.com/categories/electronics.jpg"
    }
  },
  {
    id: "5",
    title: "Leather Crossbody Bag",
    description: "Genuine leather crossbody bag with multiple compartments",
    imageURL: "https://example.com/images/crossbodybag.jpg",
    price: "89.99",
    colors: ["brown", "black", "burgundy"],
    category: {
      name: "Accessories",
      imageURL: "https://example.com/categories/accessories.jpg"
    }
  },
  {
    id: "6",
    title: "Ceramic Coffee Mug Set",
    description: "Set of 4 handcrafted ceramic coffee mugs with modern design",
    imageURL: "https://example.com/images/coffeemugs.jpg",
    price: "45.00",
    colors: ["white", "black", "blue"],
    category: {
      name: "Home & Kitchen",
      imageURL: "https://example.com/categories/homekitchen.jpg"
    }
  },
  {
    id: "7",
    title: "Wireless Phone Charger",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices",
    imageURL: "https://example.com/images/wirelesscharger.jpg",
    price: "29.99",
    colors: ["black", "white"],
    category: {
      name: "Electronics",
      imageURL: "https://example.com/categories/electronics.jpg"
    }
  },
  {
    id: "8",
    title: "Yoga Mat Premium",
    description: "Eco-friendly yoga mat with non-slip surface and carrying strap",
    imageURL: "https://example.com/images/yogamat.jpg",
    price: "59.95",
    colors: ["purple", "blue", "green", "black"],
    category: {
      name: "Fitness",
      imageURL: "https://example.com/categories/fitness.jpg"
    }
  },
  {
    id: "9",
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys",
    imageURL: "https://example.com/images/keyboard.jpg",
    price: "79.99",
    colors: ["black", "white"],
    category: {
      name: "Electronics",
      imageURL: "https://example.com/categories/electronics.jpg"
    }
  },
  {
    id: "10",
    title: "Wooden Cutting Board",
    description: "Handcrafted bamboo cutting board with juice groove",
    imageURL: "https://example.com/images/cuttingboard.jpg",
    price: "39.99",
    colors: ["natural"],
    category: {
      name: "Home & Kitchen",
      imageURL: "https://example.com/categories/homekitchen.jpg"
    }
  }
];