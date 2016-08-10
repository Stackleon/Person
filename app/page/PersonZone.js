import React,{Component,PropTypes} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ListView} from 'react-native';

export default class PersonZone extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
    this.state={
      dataSource:ds.cloneWithRows(['row1','row2']),
    }
  }


  render(){
    return(
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData)=><Text>{rowData}</Text>}
      />
    );
  }
}



const styles = StyleSheet.create({
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
