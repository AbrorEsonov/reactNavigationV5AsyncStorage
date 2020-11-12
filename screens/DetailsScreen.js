import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function DetailsScreen({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
    <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Details')}
    />
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
     flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
},
});
