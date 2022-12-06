import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function Home({navigation}){
    return(
        <View>
            <Text style={styles.Titlepage} >Recherchez une ville</Text>
            <TouchableOpacity activeOpacity={0.5}>
                <Image style={styles.iconSearch} source={require('../assets/search.png')} /> 
            </TouchableOpacity>
            <TextInput style={styles.InputSeach} placeholder='Paris' />
              
        </View>
    )
}


const styles = StyleSheet.create({
Titlepage:{

},

iconSearch: { 
    position: 'relative'
 },
 
InputSeach: {
    flex: 1,
    marginTop: 5,
    border: "1px solid #ff6e27",
    borderRadius: 16
}


})