import React from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  TextInput,
  Images,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  NativeAppEventEmitter,
  Platform,
  PermissionsAndroid
} from 'react-native';

import BleManager from 'react-native-ble-manager';
import {RkButton , RkText} from 'react-native-ui-kitten';
import calWeight from '../components/calWeight';

export default class searchBLE extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.guid !== r2.guid });
    this.state = {
      ble: null,
      scanning: false,
      devices: []
    }
  }
  componentDidMount() {
    console.log(this.props.navigation.state.params.bodyWeight)
    BleManager.start({showAlert: false}).then(result=>console.log(result) ,err => console.log(err));
    console.log(BleManager)
    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);

    NativeAppEventEmitter
        .addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral );
        
    if (Platform.OS === 'android' && Platform.Version >= 23) {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
            if (result) {
              console.log("Permission is OK");
            } else {
              PermissionsAndroid.requestPermission(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
                if (result) {
                  console.log("User accept");
                } else {
                  console.log("User refuse");
                }
              }, err => { console.log(err) });
            }
      }, err => {
        console.log(err);
      });
    }

    this.toggleScanning(true);
  }

  handleScan() {
      BleManager.scan([], 60, true)
          .then((results) => {
            let check = true;
            if(this.state.devices.length === 0){
              this.state.devices.push({
                name: this.state.ble.name,
                id: this.state.ble.id
              })
            }

            for(let i=0;i<this.state.devices.length;i++){
                if(this.state.devices[i].id === this.state.ble.id){
                  check = false;
                  break;
                }
              }
              console.log(check)
              if(check)
                this.state.devices.push({
                name: this.state.ble.name,
                id: this.state.ble.id,
              })
            console.log('Scanning...'); 
            console.log(this.state.ble.id)
          })
          .catch(err => { console.log(err) });
  }

  handleDiscoverPeripheral(data){
        this.setState({ ble: data })
    }

  toggleScanning(bool){
      if (bool) {
          this.setState({scanning:true})
          this.handleScan();
          setTimeout(() => {
            this.scanning = setInterval( ()=> this.handleScan(), 5000);
          })
      } else{
          this.setState({scanning:false, ble: null})
          clearInterval(this.scanning);
      }
  }

  connect(id) {
    BleManager.connect(id)
      .then(peripheralInfo => {
        console.log(peripheralInfo);
        console.log(readCharacteristicForDevice());
      })
   }
  // onPress={() => this.props.navigation.navigate('CalWeight',{bodyWeight: this.props.navigation.state.params.bodyWeight})}

  fetchBluetooth() {
    const { devices } = this.state;
    console.log(devices)
    if(devices.length === 0){
      return (
        <RkText style={styles.header}>
          Scan Bluetooth...{'\n'}
          Peripherals Nearby {'\n'}
        </RkText>
      )
    } else {
      console.log(this.state.devices);
      const deviceList = [];
      this.state.devices.map((device, index) => {
        const { id, name } = device;
        deviceList.push(
          <TouchableOpacity style={styles.search} onPress={ () => this.connect(id) } key={ index } >
            <Text style={styles.searchText} onPress={() => this.props.navigation.navigate('showWeight',{bodyWeight: this.props.navigation.state.params.bodyWeight})}> { name ? name : id } </Text>
          </TouchableOpacity>
        )
      })

      return (
        <View>
          <RkText style={styles.header}>
            Please wait...{'\n'}
            Peripherals Nearby {'\n'}
          </RkText>
          { deviceList }
        </View>
      )
    }
  }

  render() {

    return (
      <Image source={require("../images/bg1.png")} style={styles.container}>
          { this.fetchBluetooth() }
      </Image>
    );

    /*return (
        <View style={container}>
            <TouchableHighlight style={{padding:20, backgroundColor:'#ccc'}} onPress={() => this.toggleScanning(!this.state.scanning) }>
                <Text>Scan Bluetooth ({this.state.scanning ? 'on' : 'off'})</Text>
            </TouchableHighlight>
            {bleList}
        </View>
    );*/
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    color: '#ffffff',
  },
  header: {
    top: 50,
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
  search: {
    alignItems: 'center',
    top: 50,
    margin: 10,
  },
  searchText: {
    color: '#ffffff',
    fontSize: 18,
  }
  
});