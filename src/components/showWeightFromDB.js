import React,{Component} from 'react';
import {RkButton , RkText , RkTextInput} from 'react-native-ui-kitten';
import axios from 'axios'

import {
    AppRegistry,
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    
} from 'react-native';
// import getBodyWeight from '../components/mainMenu/getBodyWeight';

export default class getBodyWeight extends Component {
    state = {
        data: '',
        components: []
    }

    async componentDidMount() {
        let interval = setInterval( async () => {
            const result = await axios.get('http://188.166.239.144:8000/last')
            const data = await result.data
            this.setState({
                data: data
            })
        }, 5000);
        interval.start()
    }

    recommend(leftWeight,rightWeight,angles){
        let recommendStatus = ""
        if(leftWeight < 5 || rightWeight < 5){
            recommendStatus = "Some strap are not active";
        }
        else if(angles > 12){
            recommendStatus = "Please make sure to correct posture";
        }

        return recommendStatus
    }

    render() {
        console.log(this.state.data)
        return (
            <Image source={require("../images/bg1.png")} style={styles.container}>
                <View style={styles.containerOutter}>
                    <View style={styles.logoContainer}>
                        <RkText style={styles.title}>
                            Kunchai's Backpack 
                        </RkText>
                    </View>
                    <View style={styles.showWeight}>
                        <RkText style={styles.weightSection}>
                            {this.state.data === '' ? 'loading...' : this.state.data[0].avgWeight}
                        </RkText>
                        <RkText style={styles.subWeightSection}>
                            Max {this.state.data === '' ? 'loading...' : ((this.state.data[0].bodyWeight)/10).toFixed(2)} kg. 
                        </RkText>
                        <RkText style={styles.result}>
                            Risk Assessment : {this.state.data === '' ? 'Wait a minute...' : this.state.data[0].result} 
                        </RkText>
                        <RkText style={styles.recommend}>
                            {this.recommend(this.state.data === '' ? '0' : this.state.data[0].leftWeight,this.state.data === '' ? '0' : this.state.data[0].rightWeight,this.state.data === '' ? '0' : this.state.data[0].angles)}
                        </RkText>
                        <RkText style={styles.lastUpdate}>
                            Last update: {this.state.data === '' ? 'loading...' : this.state.data[0].time}  
                        </RkText>
                    </View>
                </View>
            </Image>
        ); 
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: null,
        height: null,    
    },
    lastUpdate: {
        textAlign: "center",
        fontSize: 15,
        color: "#ffffff",
        marginTop: 200
    },
    weightSection: {
        textAlign: "center",
        fontSize: 120,
        marginTop: 5,
        color: "#ffffff",
        fontStyle: "italic",
        fontWeight: '600'
    },
    result : {
        fontSize: 30,
        color: "#000",
        marginTop: 100,
        textAlign: "center",
    },
    recommend : {
        fontSize: 25,
        color: "#000",
        marginTop: 20,
        textAlign: "center",
    },
    subWeightSection: {
        textAlign: "center",
        fontSize: 25,
        color: "#ffffff",
    },
    title: {
        color: '#FFFF',
        marginTop: 0,
        width: 500,
        textAlign: "center",
        //opacity: 0.9,
        fontSize: 25  
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 3,
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    input: {
        margin: 20,
        width: 200,
        height: 80,
        backgroundColor: "transparent",
        color: "#FFFF",
        fontSize: 50,
        textAlign: "center"
    },
    buttonContainer: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 10
    },
    buttonText: {
        textAlign: "center",
        color: "#178EB3",
        fontSize: 20,
    },
    containerOutter:{
        marginTop: 50,
    }
});