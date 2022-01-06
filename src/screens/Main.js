import React from 'react';
import { View, Text, ImageBackground , StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/AntDesign';

const Main = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require("../../assets/images/back.jpg")} resizeMode="cover" style={{flex:1, justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('SignUp')
                }}>
                                <Icon name="person-add-alt-1" size={30} color='#fff' style={{marginRight:20}} />
                                <Text style={{fontSize:22, fontWeight:'800', color:'#fff'}}>SIGNUP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Login')
                }} >
                                <Ico name="login" size={30} color='#fff' style={{marginRight:20}} />
                                <Text style={{fontSize:22, fontWeight:'800', color:'#fff'}}>LOGIN</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#4BD5CF',
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
    }
})

export default Main
