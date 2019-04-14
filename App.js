import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar,TextInput,Button } from 'react-native';
import appStyle from './styles.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
    var x = 5;
  }

  login(){

  }

  switchToSignUp() {
    
  }

  render() {
    return (
      <View style={styles.container} >
        <StatusBar hidden />
        <Image 
          style={{width: 300, height: 90}}
          source={require('./assets/app/logo.png')}
        />
      <View style={appStyle.generalContainer}>

        <Text tyle={appStyle.label}>
          EMail
        </Text>
         <TextInput
            style={appStyle.textInput}
            autoComplete = "email"          
        />
        <Text style={appStyle.label}>
          Password
        </Text>
         <TextInput
            style={appStyle.textInput}
            autoComplete = "email"          
        />

        <View style={appStyle.buttonContainer}>
        <Button
            style={appStyle.button}
            title="Log In"
            onPress= {this.login}
          />
        </View>

        
      </View>
 
      <View style={appStyle.buttonContainer}>
            <Text style={appStyle.infoLabel}>Don't have an account?<Text onPress={this.switchToSignUp} style={appStyle.linkLabel}> Sign Up!</Text></Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
