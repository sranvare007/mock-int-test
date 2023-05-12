import axios from 'axios';

export const NetworkManager = {
  async getProductsList({offset, limit}) {
    try {
      const productsList = await axios.get(
        `https://dummyjson.com/products?skip=${offset}&limit=${limit}`,
      );
      return productsList;
    } catch (err) {
      console.log(`Error getting products list`);
    }
  },
};
