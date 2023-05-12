import {View, FlatList} from 'react-native';
import React from 'react';
import ProductCard from './product-card';
import {useSelector} from 'react-redux';

export default function FavouritesList() {
  const favProducts = useSelector(state => state).addFavourite;

  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <FlatList
        data={favProducts}
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
      />
    </View>
  );
}
