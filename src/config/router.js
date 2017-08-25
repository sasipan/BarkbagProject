import React, { Component } from 'react';
import {StyleSheet } from 'react-native';

import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation'

import addItems from '../components/AddItem/addItems';
import uploadPic from '../components/AddItem/uploadPic';
import DrawerMenu from '../components/common/DrawerMenu';

const AddnewItem = StackNavigator({
  AddItem: {
    name: 'AddItem',
    screen: addItems,
    navigationOptions: {
      header: null
    },
  },
  Upload: {
    name: 'Upload',
    screen: uploadPic
  }
})

const AppNavigator = DrawerNavigator(
  {
   Home:{
     name: 'Home',
     screen:AddnewItem,
     navigationOptions: {
        header: null
      },
   },
  
    }, {
    contentComponent: DrawerMenu,
    drawerPosition: 'left',
    initialRouteName: 'Home',
    headerMode: 'none',
    header: { visible: false },
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    style: {
      backgroundColor: '#303030',
    },
    Index: {
      screen: AddnewItem,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'screen',// ไม่อยากได้ header ก็ปรับเป็น none 
    mode: 'card'
  }
)

export default () => <AppNavigator />