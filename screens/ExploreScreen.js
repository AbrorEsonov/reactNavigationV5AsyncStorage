import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function ExploreScreen(){
  return (
    <View style={styles.container}>
       <Text>Explore Screen</Text>
       <Button 
         title="Click me!"
         onPress={()=> alert("Clicked")}
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
