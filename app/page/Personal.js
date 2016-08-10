import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';

import PersonInfo from './PersonInfo'

export default class Personal extends Component{

  render(){
    return(
      <ScrollView style={{backgroundColor:'#EEEEEE'}}>
      <TouchableOpacity onPress={()=>{

      }}>
      <View style={[styles.menuContainer,{marginTop:20}]}>
        <Image source={require('../.././image/favicon.jpeg')} style={styles.menuIcon}/>
        <View style={{flexDirection:'column',
                      justifyContent:'flex-start',
                      alignItems:'center',
                      marginLeft:5}}>
                <Text>乔乔妞妞</Text>
                <Text>上海 7岁</Text>
                <Text>浦东新区少年宫</Text>
        </View>
        <Image source={require('../.././image/right.png')} style={[styles.goToIcon,{top:40}]}/>
      </View>
      </TouchableOpacity>

      <View style={{marginTop:20}}>
      <CustomItem
          menuName="个人空间"
          icon={require('../.././image/personal.png')}
          onForward={()=>{
            this.props._navigator.push({
              name:this.props.params
            });
          }}
        />
      <CustomItem
        menuName="积分"
        icon={require('../.././image/intergate.png')}
        onForward={()=>{
          this.props._navigator.push({

          });
        }}/>

      <CustomItem
        menuName="规则说明"
        icon={require('../.././image/rule.png')}
        onForward={()=>{
          this.props._navigator.push({

          });
        }}/>
      </View>
      </ScrollView>
    );
  }
}

class CustomItem extends Component{
    render(){
        return(
         <TouchableOpacity onPress={this.props.onForward}>
          <View style={styles.menuContainer}>
            <Image source={this.props.icon}/>
            <Text style={styles.menuText}>{this.props.menuName}</Text>
            <Image source={require('../.././image/right.png')} style={styles.goToIcon}/>
          </View>
        </TouchableOpacity>
        )
    }
  }



const styles = StyleSheet.create({
  menuContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:10,
    backgroundColor:'#FFFFFF',
    marginTop:1,
  },

  goToIcon:{
    position:'absolute',
    right:10,
    width:10,
    height:15,
  },

  menuText:{
    marginLeft:5,
  },

  menuIcon:{
    width:80,
    height:80,
    borderRadius:360,
    resizeMode:Image.resizeMode.contain,
  },
});
