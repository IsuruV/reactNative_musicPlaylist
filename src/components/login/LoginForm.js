import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from '../common';

class LoginForm extends Component{
  constructor(){
    super();
    this.state = {email: '', password: '', error: '', loading: false};
  }
  onButtonPress(){
    const {email, password} = this.state;
    this.setState({error:'', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=> this.onLoginSucess())
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=> this.onLoginSucess('Validation Error'))
      .catch(()=>{
      })
    });
  }

  onLoginSucess(error=''){
    this.setState({loading: false, email: '', password: '', error: error})
  }
  renderButton(){
      if (this.state.loading){
        return  <Spinner size='small'/>;
      }
        return (<Button onPress={this.onButtonPress.bind(this)}>
           Login
         </Button>);
  }
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            style={{height: 20, width: 100}}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholder={'johndoe@gmail.com'}
            secured={false}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Input
            label={'Password'}
            style={{height: 20, width: 100}}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            secured={true}
          />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles={
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
