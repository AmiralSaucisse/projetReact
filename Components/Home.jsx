import { StyleSheet, Text, View, Button } from 'react-native';



export default function Home({navigation}){
    return(
        <View>
            <Text>aaaaaaaaaaaaaaaaaaaaaaa</Text>
            <Button title="Profile" onPress={() => navigation.navigate('Profile') }/>
        </View>
    )
}