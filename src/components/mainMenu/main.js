import React , {Component} from 'react';
import {
    Appregistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

import HomeHeader from '../common/HomeHeader';

export default class main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/1.png')} style={styles.backgroundImages}>
                
                <HomeHeader navigation={this.props.navigation}/>

                <View style={styles.place1}>
                
                </View>

                <View style={styles.place2}>

                     <View style={styles.place3}>
                          <View style={styles.place5}>
                               <TouchableOpacity style={styles.button1}
                                   onPress={() => this.props.navigation.navigate('getWeight')}>
                                     <Text style={styles.buttonText}>WEIGHT</Text>
                               </TouchableOpacity>
                          </View>
                          <View style={styles.place6}>
                               <TouchableOpacity style={styles.button3}>
                                     <Text style={styles.buttonText}>FUNCTION2</Text>
                               </TouchableOpacity>
                          </View>

                     </View>
                     
                     <View style={styles.place4}>
                         <View style={styles.place7}>
                               <TouchableOpacity style={styles.button2}>
                                   
                                   <Text style={styles.buttonText}>FUNCTION3</Text>
                               </TouchableOpacity>
                          </View>
                          <View style={styles.place8}>
                               <TouchableOpacity style={styles.button4}>
                                   <Text style={styles.buttonText}>FUNCTION4</Text>
                               </TouchableOpacity>
                          </View>


                     </View>

                </View>

            </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    place1: {
        flex:2,
        //backgroundColor: 'rgba(0,255,0,0.5)'
    },
    place2: {
        flex:4,
        //backgroundColor: 'rgba(255,0,0,0.5)'
    },
    place3: {
        flex:2,
        //backgroundColor: 'rgba(0,0,255,0.5)',
        flexDirection: 'row',
    },
    place4: {
        flex:2,
        //backgroundColor: 'rgba(0,0,255,0.9)',
        flexDirection: 'row',
    },
    place5: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        //backgroundColor: '#c0392b'
    },
    place6: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        //backgroundColor: '#f1c40f'
    },
    place7: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        //backgroundColor: '#bdc3c7'
    },
    place8: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        //backgroundColor: '#27ae60'
    },
    backgroundImages: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',

    },
    button1: {
        //margin:15,
        justifyContent: 'center',
        width: 170,
        height: 170,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 15,
    },
    button2: {
        justifyContent: 'center',
        
        //marginLeft:15,
        width: 170,
        height: 170,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 15,
        
    },
    button3: {
        //margin:15,
        justifyContent: 'center',
        width: 170,
        height: 170,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 15,
    },
    button4: {
        justifyContent: 'center',
        
        //marginLeft:15,
        width: 170,
        height: 170,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 15,
    },
    buttonText: {
        
        textAlign: "center",
        color: "#2980b9",
        fontSize: 20,
   
    }
});