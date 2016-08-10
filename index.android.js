/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React,{Component,PropTypes} from 'react';
 import {Navigator,AppRegistry} from 'react-native';
 import Personal from './app/page/Personal'
class Person extends Component {
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
            return <Component _navigator = {navigator} />}}
    />
    );
  }
}

AppRegistry.registerComponent('Person', () => Person);
