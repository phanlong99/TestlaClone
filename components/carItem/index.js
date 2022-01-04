import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting $69,420</Text>
      </View>

      <StyleButton
        type='p'
        content={'Custom Order'}
        onPress={() => {
          console.warn('Custom Order was pressed');
        }}
      />

      <StyleButton
        type='s'
        content={'Exitsting Inventory'}
        onPress={() => {
          console.warn('Exitsting Inventory was pressed');
        }}
      />
    </View>
  );
};

export default CarItem;
