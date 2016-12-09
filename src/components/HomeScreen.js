import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { showLogin } from '../actions';
import { Button, Card, CardSection } from './common';

class HomeScreen extends Component {
  
  onPress() {
    this.props.showLogin();
  }

  render() {
    const { logoStyle, textStyle, thumbnailContainerStyle } = styles;
    console.log(this.props);
    return (
      // TODO: Transform this into a separate component
      <View style={thumbnailContainerStyle}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Image
            style={logoStyle}
            source={{ uri: 'https://i.imgur.com/xBYWzrJ.png' }} 
          />
          <Text style={textStyle}>Manager</Text>
          <Text>Touch to log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  logoStyle: {
    height: 100,
    width: 100
  },
  textStyle: {
    fontSize: 18,
    alignSelf: 'center'
  },
  thumbnailContainerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 80
  }
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { showLogin })(HomeScreen);
