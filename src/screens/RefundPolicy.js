import React from 'react';
import { WebView } from 'react-native-webview';

const RefundPolicy = () => {
    return(
        <WebView style={{flex:1}} source={{ uri: 'https://poply.live/refund.html' }} />
    )
}

export default RefundPolicy;