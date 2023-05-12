import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Tabs({tabsList, activeTab, setActiveTab}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
      }}>
      {tabsList.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.65}
          onPress={() => {
            setActiveTab(index);
          }}
          key={index}
          style={[
            {
              paddingVertical: 6,
              paddingHorizontal: 16,

              borderRadius: 14,
              marginRight: 16,
            },
            index == activeTab
              ? {backgroundColor: '#537188'}
              : {
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#537188',
                },
          ]}>
          <Text
            style={[index == activeTab ? {color: '#fff'} : {color: '#537188'}]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
