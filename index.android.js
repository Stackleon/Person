/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  Image,
  TouchableOpacity
} from 'react-native';
import MyScene from './app/page/MyScene';
import MyName from './app/page/MyName';

class Person extends Component {
  render() {
    return(
    < Navigator
    initialRoute = {
        {
            name: 'person',
            component: PersonInfo,
            _navigator:null,
        }
    }
    renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component _navigator = {navigator} />}}
    />
    );
  }
}

class PersonInfo extends Component{

  render(){
    return(
      <ScrollView style={{backgroundColor:'#EEEEEE'}}>
      <TouchableOpacity onPress={this.props.onForward}>
        <View style={[styles.menuContainer,styles.menuIcon]}>
          <Text style={{}}>头像</Text>
          <Image source={require('./image/favicon.jpeg')}
          style={[styles.menuRight,styles.menuImage]}/>
          <Image style={[styles.menuRight]}
          source={require('./image/right.png')}/>
        </View>
      </TouchableOpacity>
      <MenuItem
          title="小画家姓名"
          params="悄悄牛牛"
          onForward={()=>{
            this.props._navigator.push({
              name:"小画家姓名",
              component:MyName,
              _navigator:this.props._navigator
            });
          }}
        />
      <MenuItem
        title="小画家出生日期"
        params="2008-12-10"
        onForward={()=>{
          this.props._navigator.push({
            name:'小画家的姓名',
            component:MyScene,
            _navigator:this.props.navigator
          });
        }}/>

      <MenuItem
        title="地址"
        params="上海浦东新区"
        onForward={()=>{
          this.props._navigator.push({
            name:'小画家的姓名',
            component:MyScene
          });
        }}/>

      <MenuItem
        title="培训机构"
        params="浦东新区少年"
        onForward={()=>{
          this.props._navigator.push({
            name:'小画家的姓名',
            component:MyScene
          });
        }}/>
    </ScrollView>
  )
  }
}


class MenuItem extends Component{
    render(){
      return(
        <TouchableOpacity onPress={this.props.onForward}>
          <View style={styles.menuContainer}>
            <Text style={{}}>{this.props.title}</Text>
            <Text style={[styles.menuRight,styles.menuRight2]}>{this.props.params}</Text>
            <Image style={[styles.menuRight]}
            source={require('./image/right.png')}/>
          </View>
        </TouchableOpacity>
      );
    }
}


const styles = StyleSheet.create({
  menuContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:2,
      backgroundColor:'#FFFFFF',
      padding:10,
  },


  menuIcon:{
    marginTop:20,
  },

  menuRight:{
    marginRight:10,
  },

 menuRight2:{
   marginRight:10,
 },

 menuImage:{
   width:80,
   height:80,
   resizeMode:Image.resizeMode.contain,
 },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Person', () => Person);
