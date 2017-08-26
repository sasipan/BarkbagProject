/* @flow */
/* eslint no-undef: "error" */
/* eslint-env node */
import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'


export default class DrawerMenu extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.object.isRequired
  }

  

  //  static navigationOptions = {
  //      header:{
  //        visible:false,
  //        mode:'none',
  //      }
  //   };

  constructor(props) {
    super(props)
    this.state = {
      pressed: ''
    }
  }

  render() {
    function icon(index) {
      if (index == 0) {
        return <Image source={require('../../images/home.png')} style={styles.btnIcon} />
      } else if (index == 1) {
        return <Image source={require('../../images/workstation.jpg')} style={styles.btnIcon} />
    }
    }
    return (
      <View style={styles.content}>
        <Image
          style={styles.menuImg}
          source={require('../../images/workstation.jpg')}/>
        {this.props.navigation.state.routes.map((route, index) => (
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate(route.routeName)}
            onHideUnderlay={()=>{this.setState({pressed: ''})}}
            onShowUnderlay={()=>{this.setState({pressed: route.routeName})}}
            style={[styles.btn, this.state.pressed === route.routeName ? styles.tabPress : {}]}
            key={route.routeName}>
            <View style={styles.btnBox}>
              {icon(index)}
              <Text style={[styles.btnTxt, this.props.navigation.state.index === index ? styles.btnTxtActive : {}]}>
                {route.routeName.toUpperCase()}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#303030',
  },
  menuImg: {
    position: 'relative',
    width: null,
    height: 150
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    //borderBottomWidth: 1,
    //borderColor: '#2a3540'
  },
  btnBox: {
    flexDirection: 'row'
  },
  btnIcon: {
    height: 30,
    width: 30,
  },
  btnTxt: {
    paddingLeft: 20,
    color: '#fff',
    fontSize: 16,
    lineHeight: 17,
    //fontFamily: 'Raleway-Regular'
  },
  btnTxtActive: {
    color: '#f94057'
  }
})
