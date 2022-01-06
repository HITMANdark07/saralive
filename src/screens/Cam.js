import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { API } from '../../api.config';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Footer from '../components/Footer';
import Ico from 'react-native-vector-icons/Entypo';
import RtcEngine, { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora';
import requestCameraAndAudioPermission from '../permissions/permission';


const dark= '#10152F';
const Cam = ({navigation, currentUser}) => {
    const appId = "6a6e334589344ae69ae7f476a8ee8d59"
    const channelName = "channel-x"
    const token = "006db7d00a09c9f4fcba0634a73106db405IACBYhz30iv6wZ33yBXbTfRZbXxJcea0AfE22zAu856jfAJkFYoAAAAAEAB/8F67S5jYYQEAAQBKmNhh"

    const [engine, setEngine] = React.useState(undefined);
    const [show, setShow] = React.useState(false);
    const [peerIds, setPeerIds] = React.useState([]);
    // const [channelName, setChannelName] = React.useState("channel1");
    const [joinSucceed, setJoinSucceed] = React.useState(false);

    React.useEffect(() => {
        // variable used by cleanup function
        let isSubscribed = true;

        // create the function
        const createEngine = async () => {
            console.log("inside engine");
            try {
                if (Platform.OS === 'android') {
                    // Request required permissions from Android
                    await requestCameraAndAudioPermission();
                    setShow(true);
                }
                console.log("inside try");
                const rtcEngine = await RtcEngine.create(appId);
                await rtcEngine.enableVideo();

                // need to prevent calls to setEngine after the component has unmounted
                if (isSubscribed) {
                    setEngine(rtcEngine);
                }
            } catch (e) {
                console.log(e);
            }
        }

        // call the function
        if (!engine) createEngine();

        engine?.addListener('Warning', (warn) => {
            console.log('Warning', warn)
        })

        engine?.addListener('Error', (err) => {
            console.log('Error', err)
        })

        engine?.addListener('UserJoined', (uid, elapsed) => {
            console.log('UserJoined', uid, elapsed)
            // If new user
            if (peerIds.indexOf(uid) === -1) {
                // Add peer ID to state array
                setPeerIds([...peerIds, uid])
            }
        })

        engine?.addListener('UserOffline', (uid, reason) => {
            console.log('UserOffline', uid, reason)
            // Remove peer ID from state array
            setPeerIds(peerIds.filter(id => id !== uid))
        })

        // If Local user joins RTC channel
        engine?.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
            console.log('JoinChannelSuccess', channel, uid, elapsed)
            if (isSubscribed) {
                // Set state variable to true
                setJoinSucceed(true)
            }
        })

        // return a cleanup
        return () => {
            console.log('unmount')
            isSubscribed = false;
            console.log(engine)
            engine?.removeAllListeners();
            engine?.destroy();
        }

    },
        // will run once on component mount or if engine changes
        [engine]
    );
    console.log("peerId", peerIds);
    // const renderRemoteVideos = () => {
    //     return (
    //         <ScrollView
    //             // style={REMOTE_CONTAINER}
    //             contentContainerStyle={{ paddingHorizontal: 2.5 }}
    //             horizontal={true}>
    //             {peerIds.map((value, index, array) => {
    //                 return (
    //                     <RtcRemoteView.SurfaceView
    //                         // style={REMOTE}
    //                         uid={value}
    //                         channelId={channelName}
    //                         renderMode={VideoRenderMode.Hidden}
    //                         zOrderMediaOverlay={true} />
    //                 )
    //             })}
    //         </ScrollView>
    //     )
    // }

    const startCall = async () => {
        // Join Channel using null token and channel name
        await engine?.joinChannel(token, channelName, currentUser.id, 0)
        console.log('startCall')
    }

    const endCall = async () => {
        setPeerIds([]);
        setJoinSucceed(false)
        await engine?.leaveChannel()
    }
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
              {
                  engine && joinSucceed && (
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:40, margin:5}}>
                        <View style={{borderRadius:20,overflow:'hidden' ,borderColor:'#fff', borderWidth:2}}>
                        {
                            peerIds.map((value) => (
                                <RtcRemoteView.SurfaceView
                                style={{ height:200, width:150 }}
                                uid={value}
                                channelId={channelName}
                                renderMode={VideoRenderMode.Hidden}
                                zOrderMediaOverlay={true} />
                            ))
                        }
                        </View>

                        <View style={{borderRadius:20,overflow:'hidden' ,borderColor:'#fff', borderWidth:2}}>
                        <RtcLocalView.SurfaceView
                        style={{ height:200, width:150 }}
                        channelId={channelName}
                        renderMode={VideoRenderMode.Hidden} />
                        </View>
                    </View>
                  )
              }
                {
                    show && !joinSucceed && (
                        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={startCall}>
                            <Ico name="picasa" size={30} color='#fff' style={{marginRight:20}} />
                            <Text style={{fontSize:22, fontWeight:'700', color:'#fff'}}>START</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    joinSucceed && (
                        <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]} activeOpacity={0.6} onPress={endCall}>
                            <Text style={{fontSize:22, fontWeight:'700', color:'#fff'}}>EXIT MATCHING</Text>
                        </TouchableOpacity>
                    )
                }
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
