import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function HomeScreen({navigation}){
  return (
    <View style={styles.container}>
       <Text>Home Screen</Text>
       <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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
