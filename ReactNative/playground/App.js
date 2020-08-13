import React, { useState } from 'react'
import {View,StyleSheet,FlatList,Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
// import {v4 as uuidv4} from 'uuid'

export default App = () => {

  const [items, setItmes] = useState([
    // {id: uuidv4(), text: 'Milk'},
    // {id: uuidv4(), text: 'Eggs'},
    // {id: uuidv4(), text: 'Bread'},
    // {id: uuidv4(), text: 'Juice'},
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ])

  function deleteItem(id){
    setItmes(prevItem => {
      return prevItem.filter(item => item.id != id)
    })
  }

  function addItem(text) {
    if(!text){
      Alert.alert('Error','Please enter item')
    }else{
      setItmes(prevItem => {
        return[
          ...prevItem,
          {id:new Date(). getTime(),text},
        ]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex:1, 
    paddingTop:40
  },
  text: {
    color: '#000',
    fontSize: 30
  }
})