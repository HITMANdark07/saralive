import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { API } from '../../api.config';
import Icon from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/AntDesign';
import Ic from 'react-native-vector-icons/FontAwesome';
import ChatListItem from '../components/ChatListItem';
import Footer from '../components/Footer';

const dark= '#10152F';
const ChatScreen = ({navigation, currentUser}) => {

    const [message, setMessage] = React.useState("");
    return (
        <View style={{flex:1,backgroundColor:dark}}>
            
            <View style={{backgroundColor:'#1A224B', borderBottomLeftRadius:50, borderBottomRightRadius:50, marginBottom:20,flexDirection:'row' }}>
            <TouchableOpacity onPress={() => {navigation.navigate('Messages');}} style={{margin:20, marginRight:0}}>
                <Icon name='chevron-back-outline' color={'#fff'} size={30}/>
            </TouchableOpacity>
            <Image source={{uri:'https://pbs.twimg.com/profile_images/1280095122923720704/K8IvmzSY_400x400.jpg'}} style={{height:40, width:40, borderRadius:50, alignSelf:'center'}} />
            <Text style={{color:'#fff', fontWeight:'400', alignSelf:'center', fontSize:18,margin:20, marginLeft:5}}>Performer Test</Text>
            </View>
            <ScrollView style={{flex:1}}>
                <View >
                    
                    
                    
                </View>
            </ScrollView>
            <View style={styles.chatFoot}>
                <Ico name="message1" size={28} color='#fff' style={{alignSelf:'center'}} />
                <TextInput placeholderTextColor='#ddd' style={{flex:1, color:'#fff', alignSelf:'center', marginLeft:10}} value={message} autoCapitalize='none'  onChangeText={(e) => setMessage(e)} placeholder="Type Message Here..."  />
                <TouchableOpacity style={{alignSelf:'center'}} onPress={() => setMessage("")}>
                <Ic name="send" size={28} color='#fff'  />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    chatFoot:{
        backgroundColor:'#1A224B',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        padding:20,
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(ChatScreen)
