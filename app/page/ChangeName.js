import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image} from 'react-native';

export default class ChangeName extends Component{

  constructor(props){
    super(props);
    this.state = {
      textValue:this.props.name,
      showClear:false
    }
  }

  _clearText(){

  }

  render(){
    return(
        <View style={sceneStyle.container}>
        <TextInput
          style={sceneStyle.inputText}
          onChangeText={(value) => this.setState({textValue:value,
                                                  showClear:true})}
          value={this.state.textValue}/>
        <TouchableOpacity onPress={this._clearText}>
          <Image source={require('../.././image/clean.png')}/>
        </TouchableOpacity>
        </View>
    );
  }
}



const sceneStyle = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'stretch',
    backgroundColor:'#EEEEEE'
  },

  inputText:{
    height:20,
    fontSize:24,
    marginTop:20,
  },

  showClear:{
    position:'absolute',
    right:10,
    top:5,
    height:5,
    width:5
  },

});
