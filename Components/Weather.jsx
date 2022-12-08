import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity  } from 'react-native';
import Home from './Home';

export default function Profile(){
    return(
        <View>
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
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={ styles.cardHeaderText }>{data.name}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.cardIcon}>
                        <Image source={{uri: data.weather}} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={styles.cardDescription}>
                        <Text>{data.temperature}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      marginBottom: 10,
      border: "4px solid #ff6e27",
      borderRadius: 16
    },
    cardHeader:{
        backgroundColor: "#ff6e27",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 6
        
    },
    cardBody:{
        flex:1,
        flexDirection: "row"
    },
    cardHeaderText:{
        color: "white"
    },
    cardPrice: {
        border: "1px solid #ff6e27",
        backgroundColor: "#ff6e27",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 6
    },
    cardDescription:{
        flexWrap: 'wrap',
        flex: 1,
        padding: 8
    },
    cardPriceText:{
        color: "white"
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