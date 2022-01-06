import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { API } from '../../api.config';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Footer from '../components/Footer';
import Ico from 'react-native-vector-icons/Entypo';

const dark= '#10152F';
const Cam = ({navigation, currentUser}) => {
    return (
        <View style={{flex:1, backgroundColor:dark, justifyContent:'space-between'}}>
            {/* <Text style={{color:'grey'}}>{JSON.stringify(currentUser)}</Text> */}
            <LottieView
                // style={{position:'absolute', top:0}}
                source={require('../../assets/love.json')}
                autoPlay
                loop
              />
              <View style={{backgroundColor:'#1A224B', borderBottomLeftRadius:50, borderBottomRightRadius:50, marginBottom:20}}>
              <Text style={{color:'#fff', fontWeight:'700', alignSelf:'center', fontSize:20,margin:20}}>FACE TO FACE</Text>
              </View>
              <View style={{flexDirection:'column', justifyContent:'space-between',flex:1, marginBottom:100}}>
              <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white', fontSize:16}}>You'll have a 10 seconds to decide </Text>
                  <Text style={{color:'white', fontSize:16}}> wheather you like each other or not. </Text>
                  <Text style={{color:'white', fontSize:16}}>Light up the heart if you find love at first sight!</Text>
              </View>
              <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Ico name="picasa" size={30} color='#fff' style={{marginRight:20}} />
                    <Text style={{fontSize:22, fontWeight:'700', color:'#fff'}}>START</Text>
                </TouchableOpacity>
              </View>
            <Footer navigation={navigation} name="oncam" />
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#4BD5CF',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:45,
        marginBottom:20,
        width:'50%',
        alignSelf:'center',
        borderRadius:50,
        alignItems:'center',
        padding:8,
        margin:5,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Cam)
