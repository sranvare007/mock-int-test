import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFav} from '../actions/addFav';

export default function ProductCard({
  id,
  thumbnail,
  title,
  description,
  price,
  discountPercentage,
  rating,
}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state).productsList;

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        backgroundColor: '#d0d0d0',
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 20,
      }}
      onPress={() => {
        if (products != null && products.length > 0) {
          const favProduct = products.find(item => item.id == id);
          dispatch(addFav(favProduct));
        }
      }}>
      <Image
        source={{uri: thumbnail}}
        style={{
          height: 180,
          width: '100%',
          borderRadius: 20,
          overflow: 'hidden',
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
        <Text>{discountPercentage}</Text>
        <Text>{rating}</Text>
      </View>
    </TouchableOpacity>
  );
}
