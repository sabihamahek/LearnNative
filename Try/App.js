import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {


    let pic = {
      uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Image source={pic} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:193,
    height:110,

  },

});
