import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function Home({navigation}){
    return(
        <View>
            <Text style={styles.Titlepage} >Recherchez une ville</Text>
            <TouchableOpacity style={styles.iconSearch} activeOpacity={0.5}>
                <Image source={'https://zupimages.net/up/22/49/2ws7.png'} /> 
            </TouchableOpacity>
            <TextInput style={styles.InputSeach} placeholder='Paris' />
              
        </View>
    )
}


const styles = StyleSheet.create({
Titlepage:{

},
 iconSearch: {

 },
InputSeach: {
    flex: 1,
    marginTop: 5,
    border: "1px solid #ff6e27",
    borderRadius: 16
}


})