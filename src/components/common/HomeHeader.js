import React from 'react'

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Text,
  Platform
} from 'react-native'

export default class HomeHeader extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired
  }


  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Image
            style={styles.btnLeft}
            source={require('../../images/camera.jpg')} />
        </TouchableHighlight>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#303030',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
   viewStyle: {
        backgroundColor: '#303030',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        paddingTop: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
   btnLeft: {
    width: 20, 
    height: 20, 
    marginLeft: 20,
     marginRight:15
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'

  }
})