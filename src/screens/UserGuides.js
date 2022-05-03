import React from 'react';
import { WebView } from 'react-native-webview';

const UserGuides = () => {
    return(
        <WebView style={{flex:1}} source={{ uri: 'https://sites.google.com/view/usergu/home' }} />
    )
}

export default UserGuides;