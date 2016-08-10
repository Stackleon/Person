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
import MyScene from './MyScene';
import MyName from './MyName';
import ChangeName from './ChangeName';
import ImagePicker from 'react-native-image-picker';

var options = {
  title: '选择作品',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从相册中选取',
  cancelButtonTitle: '取消',
  storageOptions: {
      skipBackup: true,
      path: 'images'
  }
};

export default class PersonInfo extends Component{
  constructor(props) {
    super(props);
    this.state = {
        avatarSource: require('./image/favicon.jpeg'),
    }
  }

    //跳转到相机或者图库
  ImagePicker.showImagePicker(options, (response) => {
        //类似onActivityResult
        if (response.didCancel) {
        }
        else if (response.error) {
        }
        else {
            //获得照相或图库返回的数据
            const source = {uri: response.uri, isStatic: true};
            this.setState({avatarSource:source});
        }
    });
 }



  render(){
    return(
      <ScrollView style={{backgroundColor:'#EEEEEE'}}>
      <TouchableOpacity onPress={this._changeIcon.bind()}>
        <View style={[styles.menuContainer,styles.menuIcon]}>
          <Text style={{}}>头像</Text>
          <Image source={this.state.avatarSource}
          style={[styles.menuImage]}/>
          <Image style={[styles.menuRight,{top:40}]}
          source={require('./image/right.png')}/>
        </View>
      </TouchableOpacity>
      <MenuItem
          title="小画家姓名"
          params="悄悄牛牛"
          onForward={()=>{
            this.props._navigator.push({
              name:this.props.params,
              component:ChangeName,
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
    position:'absolute',
    right:10,
  },

 menuRight2:{
   position:'absolute',
   right:30,

 },

 menuImage:{
   width:80,
   height:80,
   marginRight:30,
   borderRadius:360,
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