import {React,Menu} from 'react';

const SideMenu = require('react-native-side-menu');

class ContentView extends React.Component {
  render() {
    return (
      <View >
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

export default class Comp extends React.Component {
  render() {
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    );
  }
}