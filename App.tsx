import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainBg}>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBg: {
    backgroundColor: '#636363',
  },
});

export default App;
