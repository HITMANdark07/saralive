import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { API } from '../../api.config';
import Icon from 'react-native-vector-icons/Entypo';
import PerformerCard from '../components/PerformerCard';
import Footer from '../components/Footer';

const dark= '#10152F';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
const Home = ({navigation, currentUser}) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);
    return (
        <View style={{flex:1, backgroundColor:dark}}>
            <View style={{backgroundColor:'#1A224B', borderBottomLeftRadius:50, borderBottomRightRadius:50, marginBottom:20}}>
            <Text style={{color:'#fff', fontWeight:'700', alignSelf:'center', fontSize:20,margin:20}}>ONLINE PERFORMERS</Text>
            </View>
            <ScrollView  refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
            }
            >
            <View style={{flexDirection:'row', justifyContent:'center', marginBottom:100}}>
                <View style={{flexDirection:'column', justifyContent:'flex-start'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard h={true} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'column'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate('Performer')}}>
                    <PerformerCard />
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            <Footer navigation={navigation} name="discover" />
        </View>
    )
}
const styles = StyleSheet.create({
    
})

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Home)
