import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {


    let pic = {
      uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>

          <View style={styles.box1} />
            <View style={styles.box2} />
              <View style={styles.box3} />





      </View>





    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1:{
    flex: 1,
    backgroundColor:'powderblue',

  },
  box2:{
    flex: 2,
    backgroundColor:'skyblue',
  },
  box3:{
    flex: 3,
    backgroundColor:'steelblue',
  },


});
