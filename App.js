import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './source/todoapp';
import store from './source/strore';
import { Provider } from  'react-redux'


//Le provider va nous servir à utiliser le store depuis
//n'importe quelle component 


// pour créer un strore Redux il nous faut : (voir ./sources/store/index)
// Les reducers (voir ./sources/reducers) : on a utilisé deux reducers  1- Todos  2- Filtre : pour manipuler les todos et les filtrer 
// Un combinateur de reducers (voir ./sources/reducers/index): il va nous servir à combiner les deux reducers pour les utiliser en un seul
// Les actions (voir ./sources/actions) ce sont les intermédiaires entre l'application et le store avec une proriété type pour définir
//l'action utilisée 


//ici on va inclure le component  ./source/todoApp

export default function App() {
  return (
    <Provider store={store}>
    <TodoApp/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
