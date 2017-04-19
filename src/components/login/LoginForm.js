import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Card, CardSection, Input} from '../common';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {email: '', password: ''};
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
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
