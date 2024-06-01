import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal>
          <View style={styles.container}>
            <View style={[styles.card, styles.cardElevation]}>
              <Text>Hi</Text>
            </View>
            <View style={[styles.card, styles.cardElevation]}>
              <Text>Slide</Text>
            </View>
            <View style={[styles.card, styles.cardElevation]}>
              <Text>Me</Text>
            </View>
            <View style={[styles.card, styles.cardElevation]}>
              <Text>Hey Done....</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
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
    flexDirection: 'row',
    columnGap: 8,
    padding: 8,
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardElevation: {
    backgroundColor: '#d4afdb',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#e5e5e5',
    elevation: 4,
  },
});

export default ElevatedCards;
