import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (website: string) => {
    Linking.openURL(website);
  };
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Action Head</Text>
        <Text style={styles.cardLabel}>What's going on here</Text>
        <Text style={styles.cardLabel} numberOfLines={3}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Text>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://reactnative.dev/docs/linking-libraries-ios');
            }}>
            <Text style={styles.linkText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://purecode.ai/');
            }}>
            <Text style={styles.linkText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
    color: '#fff',
  },
  card: {
    padding: 8,
    flex: 1,
    rowGap: 6,
    borderRadius: 6,
    backgroundColor: '#bdecf0',
    margin: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#e5e5e5',
    elevation: 10,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cardLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: 400,
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 8,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
