import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    padding: 8,
    fontWeight: 'bold',
    fontSize: 24,
    color:"#fff"
  },
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    columnGap:8
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOne: {
    backgroundColor: 'brown',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
