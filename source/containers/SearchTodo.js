import React, { Component } from 'react';
import { StyleSheet, Text,Button, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import {setVisibilityFilter } from '../actions/actions'



//Ici pour faire une recherche il faut envoyer le titre qu'on cherche comme filtre  au reducer de filtrage 
//le reducer va recevoir le filtre à chaque modification dans l'input de la recherche
// voir ../containers/visibleTodos (default)

class SearchTodo extends Component {
    state ={
        title:'',
        data:[]
    }
  render(){
      return (
        <View style={styles.content}>
    <View style={styles.container}>
        <TextInput 
        onChangeText={(title)=>{this.setState({title}); this.props.dispatch(setVisibilityFilter(title)); }}
        value={this.state.title}
        style={styles.input}
        placeholder="Search for todo by title"
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.title)}>
           <View style={styles.viewtouchable}>
             <Ionicons style={styles.iconAdd} name="md-search" size={30}/>
           </View>
        </TouchableOpacity>
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
    marginTop:10,
    flex:1
  },
  input:{
      marginTop:5,
      borderWidth:1,
      borderColor:'#f2f2e1',
      backgroundColor:'#eaeaea',
      height:50,
      flex:1,
      padding:5
  },
  viewtouchable:{
      marginTop:5,
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
    paddingTop:4,

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


export default connect()(SearchTodo);
