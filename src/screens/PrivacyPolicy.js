import React from 'react';
import { WebView } from 'react-native-webview';

const PrivacyPolicy = () => {
    return(
        <WebView style={{flex:1}} source={{ uri: 'https://sites.google.com/view/poplyprivacypolicy/home' }} />
    )
}

export default PrivacyPolicy;