import { View, Button, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export function Header(){
    return(
        <View>
            <Image style={styles.icon} source={'https://www.zupimages.net/up/22/49/w18k.png'} />
            <Image style={styles.icon} source={'https://www.zupimages.net/up/22/49/ih0w.png'} />
            <Image style={styles.icon} source={'https://www.zupimages.net/up/22/49/iu2v.png'} />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: { 
        position: 'relative',
        width : 50,
        height : 50
     }
    })