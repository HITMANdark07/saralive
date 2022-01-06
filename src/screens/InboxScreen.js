import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { API } from '../../api.config';
import Icon from 'react-native-vector-icons/Entypo';
import ChatListItem from '../components/ChatListItem';
import Footer from '../components/Footer';

const dark= '#10152F';
const InboxScreen = ({navigation, currentUser}) => {
    return (
        <View style={{flex:1, backgroundColor:dark}}>
            <View style={{backgroundColor:'#1A224B', borderBottomLeftRadius:50, borderBottomRightRadius:50, marginBottom:20}}>
            <Text style={{color:'#fff', fontWeight:'700', alignSelf:'center', fontSize:20,margin:20}}>MESSAGES</Text>
            </View>
            <ScrollView >
                <View style={{marginBottom:100}}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('Chat')}}>
                        <ChatListItem />
                    </TouchableOpacity>
                    
                    
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
