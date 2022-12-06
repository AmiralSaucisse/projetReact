import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';


export default function Home({navigation}){
    return(
        <View>
            <Text>Recherchez une ville</Text>
            <TouchableOpacity activeOpacity={0.5}>
                <Image source={{ uri: 'https://zupimages.net/up/22/49/2ws7.png' }} />
                <TextInput placeholder='Paris' /> 
            </TouchableOpacity>
              
        </View>
    )
}