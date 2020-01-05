import React, { Component } from 'react';
import { Button ,StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'


const listTodos = ({ todos , toggleTodo, deleteTodo, editTodo}) => { 
    return <ScrollView style={styles.container} > 
        {  todos.map(todo => 
        <View style={styles.todo} key={todo.id}>
            <Text  onPress={()=> toggleTodo(todo.id)} style={{fontSize:15,flex:1,textDecorationLine:todo.completed?'line-through':'none'}}> {todo.title} </Text> 
            <View>
            <Ionicons  style={styles.todoIconUpdate} onPress={() => editTodo(todo.id)}  name="md-create" size={25}/>
            </View>
            <View >
            <Ionicons  style={styles.todoIcon} onPress={() => deleteTodo(todo.id)}  name="md-trash" size={25}/>
           </View>
        </View>
        )
        }  
    </ScrollView>
    
}



const styles = StyleSheet.create({
    container: {
             flexDirection:'column',
             height:Dimensions.get('window').height/2.5,
            
    },
    todo:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:10
    },
    todoIcon:{
        color:'#2597FF'
       
    },
    todoIconUpdate:{
        color:'#2597FF',
        marginRight:10
    }
 })

export default listTodos;

