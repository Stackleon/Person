import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class MyName extends Component{

  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  goBack(){
    const {navigator} = this.props;
    if (navigator) {
    navigator.pop();
  }
  }

  render(){
    return(
        <View style={sceneStyle.container}>
        <Text style={sceneStyle.Text}>My name is {this.props.name}</Text>
        <TouchableOpacity onPress={this.goBack}>
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
    fontSize:24
  }

});
