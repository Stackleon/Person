/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React,{Component,PropTypes} from 'react';
 import {Navigator,AppRegistry,BackAndroid} from 'react-native';
 import Personal from './app/page/Personal'

var _navigator;
class Person extends Component {
  componentDidMount() {

  BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
      _navigator.pop();
      return true;
    }
    return false;
  });
 }


  render() {
    return(
    < Navigator
      initialRoute = {
        {
            name: 'person',
            component: Personal,
        }
    }
    renderScene = {(route, navigator) => {
            let Component = route.component;
            _navigator = navigator;
            return <Component _navigator = {navigator} />}}
    />
    );
  }
}

AppRegistry.registerComponent('Person', () => Person);
