import { StyleSheet, Text, View, Button, SearchBar, Image, TouchableOpacity } from 'react-native';


export default function Home({navigation}){
    return(
        <View>
            <Text>Recherchez une ville</Text>
            <SearchBar>
            <TouchableOpacity activeOpacity={0.5}>
                <Image source={require('./assets/search.png')} />
              </TouchableOpacity>
            </SearchBar>
        </View>
    )
}