import React, { Component } from 'react';
import {

    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    ListView

} from 'react-native';

class uploadPic extends Component {
    render() {
        return (
            <Image source={require("../../images/bg1.png")} style={styles.container}>
                <View style={styles.SquareBackground}>
                     <View style={styles.viewStyle2}>
                        <Text style={styles.fontTopic}>Items Today</Text>
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    SquareBackground: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex:1,
        margin:30,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor: "rgba(44, 62, 80,0.5)"
    },
    fontTopic: {
        fontSize: 25,
        color:'white'
    },
    viewStyle2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewItem:{
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding:16,
        margin:16,
         flexDirection: 'row',
         backgroundColor:'yellow'
    }
});
export default uploadPic;