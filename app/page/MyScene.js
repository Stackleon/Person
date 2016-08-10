import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class MyScene extends Component{

  render(){
    return(
      <View style={{backgroundColor:'#EEEEEE',flex:1}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'flex-start',
          flex:1,
          marginLeft:5,
          marginRight:5
        }}>
        <View style={{flexDirection:'column',
                      justifyContent:'flex-start',
                      alignItems:'center',
                      marginTop:10,
                    }}>
                      <View style={{width:3,height:3,borderRadius:360,backgroundColor:'#000000'}}/>
                      <View style={{flex:1,width:1,backgroundColor:'#000000'}}/>
        </View>




        </View>
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
