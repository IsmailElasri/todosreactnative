import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Navigator} from 'react-native';
import AddTodo from './containers/addTodo'
import VisibleTodos from './containers/visibleTodos'
import { connect } from 'react-redux'
import SearchTodo from './containers/SearchTodo'
import AllDone from './containers/AllDone'




class TodoApp extends Component {
    state = {
        todos:[],
        visibilityFilter:'SHOW_ALL_TODOS'
    }

  render(){
      return (
    <View  style={styles.container}> 
      
        <AddTodo/> 
        <AllDone/>
        
        <View>
          <VisibleTodos style={styles.visibletodos}/>
        </View>
        <SearchTodo />
      
    </View>
    
  );
}
}



export default (TodoApp);


const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    padding:10,
    width : Dimensions.get('window').width,
  },
  visibletodos:{
    width:50
  }
});

