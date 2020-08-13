import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default ListItem = ({item,deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text> 
                <Icon name="remove" size={20} color="firebrick" onPress={()=>deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding: 15,
        backgroundColor: '#ccc',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    listItemText:{
        fontWeight:'bold'
    }
})