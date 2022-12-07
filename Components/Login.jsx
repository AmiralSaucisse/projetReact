import { useEffect, useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Service/firebase';

export default function Login({ setUser, navigation }) {
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountCreated, setAccountCreated] = useState(false);

    function switchForm() {
        setLogin(!login);
    }

    function signup() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((credential) => {
                setLogin(true);
                setAccountCreated(true);
            })
    }

    function signin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((credential) => {
                setUser(credential.user);
                navigation.navigate("Home");
            })
    }



    return (
        <View style={styles.loginpage}>
            <Image style={styles.imglogin} source={{ uri:'https://weather.training-dev.fr/picture/meteoJetLag.png' }} />
        <View style={styles.form}>
            { accountCreated &&
                <View>
                    <Text>Compte créé, veuillez vous connecter</Text>
                </View>
            }
            <View style={styles.formGroup}>
                <Text>Email</Text>
                <TextInput style={styles.field} onChangeText={value => setEmail(value)}></TextInput>
            </View>
            <View style={styles.formGroup}>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} style={styles.field} onChangeText={value => setPassword(value)}></TextInput>
            </View>
            {login &&
                <View style={styles.formGroupHorizontal}>
                    <Text style={styles.link} onPress={() => switchForm()}>S'inscrire</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => signin()}>Connexion</Text>
                    </Pressable>
                </View>
            }
            {!login &&
                <View style={styles.formGroupHorizontal}>
                    <Text style={styles.link} onPress={() => switchForm()}>Se connecter</Text>
                    <Pressable style={styles.button} onPress={() => signup()}>
                        <Text style={styles.buttonText}>
                            Inscription
                        </Text>
                    </Pressable>
                </View>
            }
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    loginpage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: "10px"
    },
    formGroup: {
        alignItems: 'strech',
    },
    form: {
        padding: "20px",
        fontFamily: "Calibri"
    },
    field: {
        border: "1px solid #808080",
        borderRadius: "4px",
        width: "100%"
    },
    formGroupHorizontal: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    link: {
        color: "#ff6e27",
        paddingTop: "10px",
    },
    button: {
        backgroundColor: "#ff6e27",
        padding: "10px",
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
    },
    buttonText: {
        color: "white"
    },
    imglogin: {
        position: 'relative',
        height: 200,
        width: 200
    }
});