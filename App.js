import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class App extends Component {
 render() {
    return(
      
     /* <View style={styles.container} >
       <View style={{flex:1, backgroundColor:'black'}}></View>
       <View style={{flex:2, backgroundColor:'red'}}></View>
      </View>*/

    <View style={styles.container} >
      <View style={{height:80,width:80,backgroundColor:'black'}}>
        <Text>hiiiii i am Devaraj</Text>
        <Text>hiiiii i am Raamu</Text>
      </View>
    </View>

    ); 
  }
}

const styles = StyleSheet.create ({
    container : {
      flex:1,
      backgroundColor:'yellow',
      //flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
    }
});