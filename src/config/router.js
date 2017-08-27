import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation'

import getBodyWeight from '../components/mainMenu/getBodyWeight';
import main from '../components/mainMenu/main';
import addItems from '../components/AddItem/addItems';
import uploadPic from '../components/AddItem/uploadPic';
import DrawerMenu from '../components/common/DrawerMenu';
import item from '../components/item';
import profile from '../components/mainMenu/profile';
import searchBLE from '../components/searchBLE';
import showWeightFromDB from '../components/showWeightFromDB';


const AddnewItem = StackNavigator({

  Home: {
      name: 'Home',
      screen: main,
      navigationOptions: {
        header: null
      },
    },
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
  },
  getWeight: {
    name: 'getWeight',
    screen: getBodyWeight
  },
  SearchBLE: {
    name: 'SearchBLE',
    screen: searchBLE
  },
  showWeight: {
    name: 'showWeight',
    screen: showWeightFromDB
  }
})




const AppNavigator = DrawerNavigator(
  {
    Home: {
      name: 'Home',
      screen: main,
      navigationOptions: {
        header: null
      },
    },
    AddItem: {
      name: 'Main Menu',
      screen: AddnewItem,


    },

  },
  {
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
      screen: main,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',// ไม่อยากได้ header ก็ปรับเป็น none 
    mode: 'card'
  }
)

export default () => <AppNavigator />