import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    // Action creator passwordChanged
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
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
            label='Password' 
            onChangeText={this.onPasswordChange.bind(this)}
            placeholder='password'
            secureTextEntry
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

// Only map the props that we want to use
const mapStateToProps = ({ auth }) => {
  // just the auth piece of state
  const { email, password, error } = auth;
  return { email, password, error };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser 
})(LoginForm);
