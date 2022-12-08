import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity  } from 'react-native';

export default function Profile(){
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
            <Text>Nom</Text>
            <Text>Prenom</Text>
            <Text>Date de naissance</Text>
            <Text>Genre</Text>
        </View>
    )
}
    
    

    const styles = StyleSheet.create({
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