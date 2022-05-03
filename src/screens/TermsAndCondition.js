import React from 'react';
import { WebView } from 'react-native-webview';

const TermsAndCondition = () => {
    return(
        <WebView style={{flex:1}} source={{ uri: 'https://sites.google.com/view/termsand/home' }} />
    )
}

export default TermsAndCondition;