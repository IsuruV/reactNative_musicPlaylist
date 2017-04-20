import firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Spinner, Button, Card, CardSection} from './components/common';
import LoginForm from './components/login/LoginForm';


class App extends Component{
  constructor(){
    super();
    this.state = {loggedIn: null};
  }
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
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    });
  }
  signOut(){
    firebase.auth().signOut()
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={this.signOut.bind(this)}>Log Out</Button>
            </CardSection>
          </Card>);
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size="large"/>;
    }
  }

  render(){
    return(
      <View>
      <Header title="Authentication"/>
        {this.renderContent()}
      </View>
    )
  }

}

export default App;
