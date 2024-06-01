import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://i.ibb.co/JB6BKtP/inaari-comfort-roll-on-oil-for-menstrual-cramps-no-more-cramps-backpain-headache-ayurvedic-oil10-ml.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardHead}>Head</Text>
          <Text style={styles.cardLabel}>Label</Text>
          <Text style={styles.cardDescription}>Description</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.cardFooterText}>Footer</Text>
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
    color: '#fff',
  },
  card: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 6,
    margin: 8,
  },
  cardBody: {
    padding: 6,
    flex: 1,
    rowGap: 8,
  },
  cardHead: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  cardLabel: {
    fontSize: 14,
    color: '#fff',
  },
  cardDescription: {
    fontSize: 12,
    color: '#e5e5e5',
  },
  cardFooter: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cardFooterText: {
    fontSize: 13,
    color: '#e5e',
  },
  image: {
    objectFit: 'contain',
    width: '100%',
    height: 100,
  },
});
