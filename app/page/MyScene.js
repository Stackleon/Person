import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class MyScene extends Component{

  _goBack(){
    this.goBack();
  }

  render(){
    return(
        <View style={sceneStyle.container}>
        <Text style={sceneStyle.Text}>this page is{this.props.title}</Text>
        <TouchableOpacity onPress={this._goBack()}>
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
    textAlign:'center',
  }

});
