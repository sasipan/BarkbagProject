import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const bagWeight = 9.56;
const bodyWeight = 0;

// function riskOfBag (bagWeight,bodyWeight){
//   let risk = "";
//   const calculatorWeight = bodyWeight*.10;
//   if(bagWeight < calculatorWeight){
//     risk = require("../images/bg1.png");
//   }
//   else if(bagWeight == calculatorWeight){
//     risk = require("../images/bg2.png");
//   }
//   else if (bagWeight > calculatorWeight){
//     risk = require("../images/bg3.png");
//   }
//   else{
//     risk = "error";
//   }
//   return risk;
// }


export default class ReactNativeBagApp extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
            bodyWeight: 0,
        }
    }

  componentDidMount() {
    this.setState({
      bodyWeight: this.props.navigation.state.params.bodyWeight,
    })
  }

  render() {
    console.log(this.props.navigation.state.params.bodyWeight)
      return (
        <Image
          source={require("../images/bg1.png")}
          style={styles.container}>
            <Text style={styles.header}>
              Please wait...{'\n'}
              Weight detector are running.{'\n'}
            </Text>
            <Text style={styles.value}>{bagWeight}{'\n'}
              <Text style={styles.unit}>kg</Text>
            </Text>
        </Image>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    alignItems: 'center',
  },
  header: {
    top: 100,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
  value:  {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 70,
    top: 150,
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
  unit: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  }
});