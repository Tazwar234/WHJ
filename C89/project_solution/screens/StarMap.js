import React, { Component } from 'react';
import { Text, View } from 'react-native';
npm install 'react-native-webview'
import {webView} from 'react-native-webview'
const {longitude, latitude } = this.state;

export default class StarMapScreen extends Component {
    <WebView
       scalesPageToFit={true}
       source = {{ uri:path }}
       styles = {{ marginTop : 20, marginBottom : 20, }}
/>
<TextInput
 style={{height: 40, borderColor: 'gray', borderWidth: 1}}
 placeholder="Enter your latitude"
 placeHolderTextColor = "#ffff"
 onChangeText={(text)}=>{
     this.setState({
         latitude: text
     })

/>
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>StarMap Screen!</Text>
            </View>
        )
    }
}
