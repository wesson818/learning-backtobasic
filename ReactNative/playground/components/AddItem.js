import React, {useState,useRef} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default AddItem = ({addItem}) => {
  const [text, setText] = useState('')

  return (
    <View style={styles.header}>
      <TextInput 
        placeholder="Add Item..." 
        style={styles.input}  
        value={text}
        onChangeText={(textValue)=>{setText(textValue)}}
        clearButtonMode="always"
      />
      {/* <Text>{text}</Text> */}
      <TouchableOpacity style={styles.btn} onPress={()=>{setText('');addItem(text)}}>
        <Text style={styles.btnText}>
           <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16,
    },
    btn:{
        backgroundColor: '#c2bad8',
        padding: 9,
        margin:5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign:'center'
    }
})