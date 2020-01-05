import React, { Component } from 'react';
import { StyleSheet, Text,Button, View, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { toggleAllTodos } from '../actions/actions'


class AllDone extends Component {
    allDone(){
         //Ici on va faire un update sur le redux store en modifiant tous les todos en complétés ou actifs 
        //Donc il faut dispatcher l'action de modification toggleAllTodos
        //On appelle l'action avec son nom
        this.props.dispatch(toggleAllTodos());
    }
  render(){
      return (
        <View >
          <Button  onPress={()=> this.allDone()}  title="All Done"  />
        </View>
  );
}
}


export default connect()(AllDone);
