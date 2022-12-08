import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity  } from 'react-native';
import { useState, useEffect, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { getMeteoApi } from '../Service/weatherAPI';




export default function Home({navigation}){
    const [cityIsValid, setCityIsValid] = useState(false);
    const [city, setCity] = useState([]);
    const [favoris, setFavoris] = useState([]);
    const [meteo, setMeteo] = useState({});

   
//scrapped, pas assez de tempsq pour faire un header correct
//function HomeNav({ navigation }) {
//    useLayoutEffect(() => {
//      navigation.setOptions({
//        headerLeft: () => 
//            <TouchableOpacity activeOpacity={0.5}>
//             <Image style={styles.iconhome}  source={{ uri:'https://www.zupimages.net/up/22/49/w18k.png' }} />
//           </TouchableOpacity>,
//        headerRight: () => (
//            <View>
//                <TouchableOpacity activeOpacity={0.5}>
//                    <Image style={styles.iconhome} source={{ uri:'https://www.zupimages.net/up/22/49/ih0w.png' }} />
//                </TouchableOpacity>
//                <TouchableOpacity activeOpacity={0.5}>
//                    <Image style={styles.iconhome} source={{ uri:'https://www.zupimages.net/up/22/49/iu2v.png' }} />
//                </TouchableOpacity>
//            </View>
//        ),
//      });
//    }, [navigation]);}

    function Card({city}){
        return(
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={ styles.cardHeaderText }>{cityfav.name}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.cardIcon}>
                        <Image source={{uri: cityfav.icon}} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={styles.cardDescription}>
                        <Text>{cityfav.description}</Text>
                    </View>
                </View>
            </View>
        );
    }


    function getMeteo(city) {
        getMeteoApi(city).then(data => {
                if (data.error) {
                    setCityIsValid(false);
                } else {
                    setMeteo(data)
                    navigation.navigate('Weather')
                    setCityIsValid(true);
                }
            })
    }


    return(     
        <View>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.iconhome}  source={{ uri:'https://www.zupimages.net/up/22/49/w18k.png' }} />
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
                        <Image style={styles.iconhome} source={{ uri:'https://www.zupimages.net/up/22/49/ih0w.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Login')}>
                        <Image style={styles.iconhome} source={{ uri:'https://www.zupimages.net/up/22/49/iu2v.png' }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.Titlepage} >Recherchez une ville</Text>
            <TouchableOpacity style={styles.InputSearch} activeOpacity={0.5} > 
                <TouchableOpacity onPress={() => getMeteo(city)}>
                    <Image style={styles.iconSearch} source={require('../assets/search.png')} />
                </TouchableOpacity>
            <TextInput style={styles.Input} placeholder="Rechercher" onChangeText={value => setCity(value)} />                
            </TouchableOpacity>  
        </View>
    )
}

const styles = StyleSheet.create({
    Titlepage:{
        fontSize: 20,
        marginTop: 10,
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
        width : 40,
        height : 40
    },
    header: {
        flexDirection: "row",
        alignItems: "stretch",
        margin: 5,
        justifyContent: 'space-between'
    },
    headerRight: {
        flexDirection: "row",
        alignContent: "right"
    }
})