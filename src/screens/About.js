import React from 'react';
import { WebView } from 'react-native-webview';

const AboutUs = () => {
    return(
        <WebView style={{flex:1}} source={{ uri: 'https://sites.google.com/view/poplyaboutus/home' }} />
    )
}

export default AboutUs;