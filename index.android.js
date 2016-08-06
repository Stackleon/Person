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

class Person extends Component {
  render() {
    return(
    < Navigator
    initialRoute = {
        {
            name: 'person',
            component: PersonInfo
        }
    }
    renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component _navigator = {navigator}/>}}
    />
    );
  }
}

class PersonInfo extends Component{
  _addNavigator(component,title){
    this.props._navigator.push({
      title:title,
      goBack:this._goBack(),
      component:component,
    });
  }

  render(){
    return(
      <ScrollView style={{backgroundColor:'#eef0f3'}}>
        <MenuItem
          title="小画家姓名"
          params="悄悄牛牛"
          _navigator={this.props._navigator}
        />
      <MenuItem
        title="小画家出生日期"
        params="2008-12-10"
        _navigator={this.props._navigator}/>

      <MenuItem
        title="地址"
        params="上海浦东新区"
        _navigator={this.props._navigator}/>

      <MenuItem
        title="培训机构"
        params="浦东新区少年"
        _navigator={this.props._navigator}/>
    </ScrollView>
  )
  }
}


class MenuItem extends Component{
  _onMenuIntemClick(){
    const{_navigator} = this.props._navigator;
    _navigator.push({
      title:this.props.title,
      component:MyScene,
    });
  }
    render(){
      return(
        <TouchableOpacity onPress={this._onMenuIntemClick}>
          <View style={styles.menuContainer}>
            <Text style={{}}>{this.props.title}</Text>
            <Text style={[styles.menuRight,styles.menuRight2]}>{this.props.params}</Text>
            <Image style={[styles.menuRight,styles.menuImage]}
            source={require('./image/favicon.jpeg')}/>
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
      backgroundColor:'#003300',
      paddingTop:10,
      paddingBottom:10,
  },

  menuRight:{
    marginRight:10,
  },

 menuRight2:{
   marginRight:10,
 },

 menuImage:{
   width:40,
   height:40,
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
