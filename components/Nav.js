import React from 'react';
//import { Link } from 'react-router-dom';
import { Image, Text, View } from 'react-native';
function Nav() {
    const navStyle = {
        color: 'white'
    };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat with friends</Text>
    </View>
  );
}

export default Nav;
