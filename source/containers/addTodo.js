import React, { Component } from 'react';
import { StyleSheet, Text,Button, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import {fetchTodosFromAPI} from '../actions/actions'
import {setVisibilityFilter } from '../actions/actions'

class AddTodo extends Component {
    state ={
        title:'',
        data:[]
    }

    addTodo = (title) =>{
        //Ici on va faire un update sur le redux store en ajoutant un todo
        //Donc il faut dispatcher l'action d'ajout
        //On appelle l'action avec son type
        this.props.dispatch(addTodo(title))
        this.setState({title:''})
    }
    fetchTodos(){
      fetch('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=30')
      .then(res => res.json()).then( json => { this.data = json; this.props.dispatch(fetchTodosFromAPI(this.data));})
    }
    show_all(){
      this.props.dispatch(setVisibilityFilter("SHOW_ALL"));
    }
    show_completed(){
      this.props.dispatch(setVisibilityFilter("SHOW_COMPLETED"));
    }
    show_active(){
      this.props.dispatch(setVisibilityFilter("SHOW_ACTIVE"));
    }
  render(){
      return (
        <View style={styles.content}>
          <Button onPress={() => this.fetchTodos()}title="Get Todos From API" style={styles.btngettodos}>  </Button> 
    <View style={styles.container}>
        
        <TextInput 
        onChangeText={(title)=>this.setState({title})}
        value={this.state.title}
        style={styles.input}
        placeholder="new Todo"
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.title)}>
           <View style={styles.viewtouchable}>
             <Ionicons style={styles.iconAdd} name="md-add" size={30}/>
           </View>
        </TouchableOpacity>
    </View>
    <View> 
    </View>
    <View style={styles.radio}>
    <Button onPress={() => this.show_all()} style={styles.radioButton} title="show all"> </Button>
    <Button style={styles.radioButton}  onPress={() => this.show_active()} title="active"> </Button>
    <Button style={styles.radioButton}  onPress={() => this.show_completed()} title="done"> </Button>
    </View>
    </View>
  );
}
}






const styles = StyleSheet.create({
  container: {
   flexDirection:'row',
   marginHorizontal:20
  },
  btngettodos:{
    marginTop:70,
    flex:1
  },
  input:{
      marginTop:10,
      borderWidth:1,
      borderColor:'#f2f2e1',
      backgroundColor:'#eaeaea',
      height:50,
      flex:1,
      padding:5
  },
  viewtouchable:{
      marginTop:10,
      height:50,
      backgroundColor:'#eaeaea',
      alignItems:'center',
      justifyContent: 'center',
  },
  iconAdd:{
      color:'#de9595',
      padding:10
  },
  content:{
    paddingTop:40,

  }, 
  radio:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20
  },
  radioButton:{
    margin:20
  } 

});



//Pour accéder au store il faut connecter la classe 
//Avec Redux


export default connect()(AddTodo);
