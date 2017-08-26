import React,{Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    
} from 'react-native';

import HomeHeader from '../common/HomeHeader';

export default class getBodyWeight extends Component {
 
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/2.png')} style={styles.backgroundImages}>
                
                
                <View style={styles.textContainer}>
                   
                    <Text style={styles.title}>
                   Please input your body weight. (kg)
                    </Text>
                    
                    <View style={styles.formInputContainer}>
                    <TextInput
                        style={styles.input}
                        
                        />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                           NEXT
                        </Text>
                    </TouchableOpacity>

                  
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
      
    },
    backgroundImages: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',

    },
    title: {
        color: '#FFFF',
        marginBottom: 150,
        width: 500,
        textAlign: "center",
        //opacity: 0.9,
        fontSize: 20
        
        
    },

    formInputContainer: {
        justifyContent: 'center',
    },

    textContainer: {
        alignItems: 'center',
        //flexGrow: 3,
        justifyContent: 'center'
    },
    input: {
        margin: 20,
        width: 200,
        height: 55,
        borderWidth: 6,
        borderColor: '#fff',
        backgroundColor: "transparent",
        color: "#FFFF",
        fontSize: 30,
        textAlign: "center",
        
    },
    buttonContainer: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        textAlign: "center",
        color: "#2980b9",
        fontSize: 20,
   
    }

});