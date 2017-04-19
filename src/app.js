import firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/login/LoginForm';


class App extends Component{
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyAAQZBb87zbYG_jin6-_y-hQlOMJecglQg",
      authDomain: "authentication-b0170.firebaseapp.com",
      databaseURL: "https://authentication-b0170.firebaseio.com",
      projectId: "authentication-b0170",
      storageBucket: "authentication-b0170.appspot.com",
      messagingSenderId: "78668310939"
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <View>
      <Header title="Authentication"/>
        <LoginForm/>
      </View>
    )
  }

}

export default App;
