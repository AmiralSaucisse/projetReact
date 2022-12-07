import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function Home({navigation}){
    return(     
        <View>
            <NavigationContainer.setOptions />
            <Text style={styles.Titlepage} >Recherchez une ville</Text>
            <TouchableOpacity style={styles.InputSearch} activeOpacity={0.5}> 
            <Image style={styles.iconSearch} source={require('../assets/search.png')} />
            <TextInput style={styles.Input} placeholder="Rechercher" />                
            </TouchableOpacity>  
        </View>
    )
}

function HomeNav({ navigation }) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => 
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={styles.iconhome}  source={{ uri:'https://www.zupimages.net/up/22/49/w18k.png' }} />
            </TouchableOpacity>,
        headerRight: () => (
            <View>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={styles.iconhome} source={{ uri:'https://www.zupimages.net/up/22/49/ih0w.png' }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={styles.iconhome} source={{ uri:'https://www.zupimages.net/up/22/49/iu2v.png' }} />
                </TouchableOpacity>
            </View>
        ),
      });
    }, [navigation]);}


const styles = StyleSheet.create({
Titlepage:{
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15
},

iconSearch: { 
    position: 'relative',
    width : 25,
    height : 25
 },
 
InputSearch: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    border: "1px solid #ff6e27",
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row"
},
Input: {
    flex: 1,
    alignItems: "strech"
},
iconhome: {
    position: 'relative',
    width : 25,
    height : 25
}
})