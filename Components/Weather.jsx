import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';

export default function Profile(){
    return(
        <View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={ styles.cardHeaderText }>{city.name}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.cardIcon}>
                        <Image source={{uri: city.weather}} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={styles.cardDescription}>
                        <Text>{city.temperature}</Text>
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
  });