import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    // Action creator passwordChanged
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label='E-mail'
            onChangeText={this.onEmailChange.bind(this)}
            placeholder='email@domain.com'
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password' 
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// Only map the props that we want to use
const mapStateToProps = state => {
  return {
    // auth is the reducer that produces email 
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
