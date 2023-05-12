import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Tabs from '../components/tabs';
import ProductList from '../components/products-list';
import FavouritesList from '../components/favourites-list';

export default function HomeSceen() {
  const tabsList = ['Products', 'Favourites'];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Tabs
        tabsList={tabsList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab == 0 ? <ProductList /> : <FavouritesList />}
    </View>
  );
}
