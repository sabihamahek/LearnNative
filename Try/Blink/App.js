import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class Blink extends Component {

  constructor(props) {
    super(props);
    this.state = {isShowingText:true};
    setInterval(()=>{
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText};
      });
    },1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';

    return(
      <Text> {display} </Text>
    );

  }

}





export default class App extends React.Component {
  render() {


    let pic = {
      uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Image source={pic} style={styles.image} />
        <Blink text = 'Sabiha, you are an idiot' />
        <Blink text = 'Sabiha, you should understand' />





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
