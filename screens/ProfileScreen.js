import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function ProfileScreen(){
  return (
    <View style={styles.container}>
       <Text>Profile Screen</Text>
       <Button 
         title="Click me1"
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
