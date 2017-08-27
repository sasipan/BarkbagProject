import React, { Component } from 'react';
import {

    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    ListView,
    AppRegistry,
    AsyncStorage

} from 'react-native'
import axios from 'axios'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ImagePicker from 'react-native-image-picker'

class uploadPic extends Component {

    constructor(props) {
        super(props)
        this._pickImage.bind(this)
    }

    state = {
        item: 'item n',
        description: 'item 2',
        image: ''
    }

    _pickImage = async () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'fb', title: 'Choose Photo from Facebook' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, response => {
            
            if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    image: source
                });
            }
        })
    }

    upload = async () => {
        axios.post('http://localhost:8000/items', {
            item: this.state.item,
            description: this.state.description,
            image_url: this.state.image
        })
        await this.props.navigation.state.params.refresh
        await this.props.navigation.navigate('AddItem')
    }

    render() {
        return (
            <Image source={require("../../images/bg1.png")} style={styles.container}>
                <View style={styles.SquareBackground}>
                    <View>
                        <TouchableOpacity onPress={this._pickImage} >
                            <Image source={this.state.image === '' ? require("../../images/picture.png") : this.state.image } style={{ height: 100, width: 100 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input}
                            placeholder='Item name'>
                        </TextInput>

                        <TextInput style={styles.inputDes}
                            placeholder='Description'>
                        </TextInput>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.upload.bind(this)} >
                            <Text style={styles.buttonText}>
                                Add Item
                        </Text>
                        </TouchableOpacity>
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
        flex: 1,
        // margin: 30,
        // paddingLeft: 30,
        // paddingRight: 30,
        width: 300,
        height: 300,
        backgroundColor: "rgba(44, 62, 80,0.5)"
    },
    fontTopic: {
        fontSize: 25,
        color: 'white'
    },
    viewStyle2: {
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    viewItem: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 16,
        margin: 16,
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },

    backgroundImages: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',

    },
    inputContainer: {

        marginTop: 5,
        padding: 30,
        alignSelf: 'stretch',


    },
    input: {
        color: 'white',
        fontSize: 16,
        height: 50,
        padding: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0)',

    },
    inputDes: {
        color: 'white',
        fontSize: 16,
        height: 80,
        padding: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0)',

    },
    buttonContainer: {
        backgroundColor: "#0D9092",
        paddingVertical: 10,
        //margin: 30,
    },
    buttonText: {
        textAlign: "center",
        color: "#FFFF",
        fontSize: 15
    },

});
export default uploadPic;