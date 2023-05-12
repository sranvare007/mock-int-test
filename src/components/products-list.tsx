import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from './product-card';
import {NetworkManager} from '../network/NetworkManager';
import {useDispatch, useSelector} from 'react-redux';
import {setProducts} from '../actions/setProducts';
// const productsList = [
//   {
//     id: 1,
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     images: [
//       'https://i.dummyjson.com/data/products/1/1.jpg',
//       'https://i.dummyjson.com/data/products/1/2.jpg',
//       'https://i.dummyjson.com/data/products/1/3.jpg',
//       'https://i.dummyjson.com/data/products/1/4.jpg',
//       'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     ],
//   },
//   {
//     id: 2,
//     title: 'iPhone X',
//     description:
//       'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
//     price: 899,
//     discountPercentage: 17.94,
//     rating: 4.44,
//     stock: 34,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
//     images: [
//       'https://i.dummyjson.com/data/products/2/1.jpg',
//       'https://i.dummyjson.com/data/products/2/2.jpg',
//       'https://i.dummyjson.com/data/products/2/3.jpg',
//       'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
//     ],
//   },
//   {
//     id: 3,
//     title: 'Samsung Universe 9',
//     description:
//       "Samsung's new variant which goes beyond Galaxy to the Universe",
//     price: 1249,
//     discountPercentage: 15.46,
//     rating: 4.09,
//     stock: 36,
//     brand: 'Samsung',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
//     images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
//   },
// ];

export default function ProductList() {
  const PAGINATION_LIMIT = 20;
  const [productsListArray, setProductsListArray] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(state => state).productsList;

  const fetchProductsList = async () => {
    const productsList = await NetworkManager.getProductsList({
      offset: productsListArray.length,
      limit: PAGINATION_LIMIT,
    });
    if (productsList != null && productsList?.data != null) {
      dispatch(setProducts(productsList?.data?.products));
      setProductsListArray([
        ...productsListArray,
        ...productsList?.data?.products,
      ]);
    }
  };

  useEffect(() => {
    if (products != null && products != null && products.length <= 0) {
      fetchProductsList();
    } else {
      setProductsListArray(products);
    }
  }, []);

  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <FlatList
        data={productsListArray}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        renderItem={({item, index}) => {
          return (
            <ProductCard
              key={index}
              id={item.id}
              thumbnail={item.thumbnail}
              description={item.description}
              discountPercentage={item.discountPercentage}
              price={item.price}
              rating={item.rating}
              title={item.title}
            />
          );
        }}
        ListFooterComponent={
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 6,
            }}
            onPress={() => {
              fetchProductsList();
            }}>
            <Text>Show More</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}
