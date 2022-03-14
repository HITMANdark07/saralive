import React from 'react';
import { View, Text, ImageBackground , StyleSheet, TouchableOpacity, Image, Linking, ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/AntDesign';
import {
    GoogleSignin,
  } from '@react-native-google-signin/google-signin';

const Main = ({navigation}) => {
    const signIn = () => {
        GoogleSignin.configure({
            androidClientId: '291449817191-8h1gnefrl5jtm219h6ul2bn40hh486vs.apps.googleusercontent.com',
            webClientId:'291449817191-io9obsmhs6suv8eadlrjj6jujefqjcqh.apps.googleusercontent.com'
            });
        GoogleSignin.hasPlayServices().then((hasPlayService) => {
                if (hasPlayService) {
                    GoogleSignin.signIn().then((userInfo) => {
                            const {email , name, photo} = userInfo.user;
                            console.log(email,name,photo);  
                            ToastAndroid.showWithGravity("Hi "+email,ToastAndroid.CENTER,ToastAndroid.LONG); 
                    })
                }
        }).catch((e) => {
            console.log("ERROR IS : " + JSON.stringify(e));
        })
    }
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require("../../assets/images/back.jpg")} resizeMode="cover" style={{flex:1, justifyContent:'flex-end'}}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignUp')
                }}>
                    <LinearGradient  colors={['#FEDB37', '#FDB931', '#9f7928', '#8A6E2F']} style={styles.button} >
                                <>
                                <Icon name="person-add-alt-1" size={30} color='#fff' style={{marginRight:20}} />
                                <Text style={{fontSize:22, fontWeight:'800', color:'#fff'}}>SIGNUP</Text>
                                </>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {
                    navigation.navigate('Login')
                }} >
                    <LinearGradient  colors={['#FEDB37', '#FDB931', '#9f7928', '#8A6E2F']} style={styles.button} >
                        <>
                                <Ico name="login" size={30} color='#fff' style={{marginRight:20}} />
                                <Text style={{fontSize:22, fontWeight:'800', color:'#fff'}}>LOGIN</Text>
                        </>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.social} activeOpacity={0.4}>
                    <Image source={require("../../assets/images/fb.png")} style={{width:50, height:50}} />
                    <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Signin with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social} activeOpacity={0.4} onPress={signIn}>
                    <Image source={require("../../assets/images/google.png")} style={{width:40, height:40, padding:5}} />
                    <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Signin with Google</Text>
                </TouchableOpacity>
                <View style={{ margin:15}}>
                    <Text style={{color:'white', fontSize:12, textAlign:'center'}}>By using Poply, you agree to our 
                    <Text style={{textDecorationLine:'underline'}} onPress={ ()=> Linking.openURL('https://sites.google.com/view/termsand/home') }> terms of usage</Text> and 
                    <Text style={{textDecorationLine:'underline'}} onPress={() => {
                        Linking.openURL('https://sites.google.com/view/poplyprivacypolicy/home');
                    }}> Privacy Policy.</Text></Text>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#FFD700',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
        width:'60%',
        alignSelf:'center',
        borderRadius:50,
        alignItems:'center',
        padding:8,
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    social:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
        width:'60%',
        alignSelf:'center',
        borderRadius:50,
        alignItems:'center',
        padding:3,
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default Main
