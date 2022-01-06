import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';

function ChatListItem() {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, width:'100%'}}>
            <View >
            <Image source={{uri:'https://pbs.twimg.com/profile_images/1280095122923720704/K8IvmzSY_400x400.jpg'}} style={{height:70, width:70, borderRadius:50}} />
            <Icon name="primitive-dot" style={{position:'absolute',bottom:8, left:59}} size={20} color="#00ff00" />
            </View>

            <View style={{flexDirection:'column', justifyContent:'space-evenly', flex:1, paddingLeft:18}}>
                <Text style={{color:'#fff', fontWeight:'700',justifyContent:'flex-start'}}>Performer Test</Text>
                <Text style={{color:'grey', fontWeight:'400', fontSize:13,justifyContent:'flex-start'}}>Hi, How are You</Text>
            </View>

            <View style={{flexDirection:'column', padding:5}}>
                <Text style={{justifyContent:'flex-start', color:'grey'}}>12:35 PM</Text>
            </View>
        </View>
    )
}
export default ChatListItem;
