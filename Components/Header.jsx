import { View, Button, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export function Header(){
    return(
        <View>
            <Image source={'https://www.zupimages.net/up/22/49/w18k.png'} />
            <Image source={'https://www.zupimages.net/up/22/49/ih0w.png'} />
            <Image source={'https://www.zupimages.net/up/22/49/iu2v.png'} />
        </View>
    )
}