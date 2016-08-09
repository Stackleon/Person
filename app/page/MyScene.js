import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class MyScene extends Component{

 onPress(){
      if(this.props._navigator.getCurrentRoutes.length>1){
          this.props._navigator.pop();
      }
  }


  render(){
    return(
        <View style={sceneStyle.container}>
        <Text style={sceneStyle.Text}>this page is{this.props.name}</Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={sceneStyle.Text}>tap to go back</Text>
        </TouchableOpacity>
        </View>
    );
  }
}



const sceneStyle = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  text:{
    fontSize:24,
    textAlign:'center',
  }

});
