import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { API } from '../../api.config';
import Icon from 'react-native-vector-icons/Entypo';
import ChatListItem from '../components/ChatListItem';
import { getDatabase, push, ref, set, orderByChild, equalTo,onChildAdded, query, orderByValue, onValue, update } from "firebase/database";
import Footer from '../components/Footer';

const dark= '#10152F';
const InboxScreen = ({navigation, currentUser}) => {
    const [channels, setChannels] = React.useState([]);
    
    const getChannels = () => {
        console.log("running");
        const db = getDatabase();
        const channelsRef = ref(db, 'client/'+currentUser.user_id);
        onValue(channelsRef, (snapShot) => {
            const c =[];
            snapShot.forEach((snap) => {
                c.push(snap.val());
            });
            setChannels([...c]);
        })
    }
    console.log(channels);
    React.useEffect(() => {
        getChannels();
    },[]);
    return (
        <View style={{flex:1, backgroundColor:dark}}>
            <View style={{backgroundColor:'#1A224B', borderBottomLeftRadius:50, borderBottomRightRadius:50, marginBottom:20}}>
            <Text style={{color:'#fff', fontWeight:'700', alignSelf:'center', fontSize:20,margin:20}}>MESSAGES</Text>
            </View>
            <ScrollView 
            >
                <View style={{marginBottom:100}}>

                    {channels.map((cha) => (
                        <TouchableOpacity key={cha.channelId} activeOpacity={0.4} onPress={() => { navigation.navigate('Chat',{channelId:cha.channelId, performer:cha.performer, performer_name:cha.performer_name})}}>
                            <ChatListItem name={cha.performer_name} message={`${cha.last_message.substr(0,12)}${cha.last_message.length>12 ? "...":""}`} time={cha.timeStamp} />
                        </TouchableOpacity>
                    ))}
                                                    
                </View>
            </ScrollView>
            <Footer navigation={navigation} name="messages" />
        </View>
    )
}
const styles = StyleSheet.create({
    
})

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(InboxScreen)
