
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

import HomeHeader from '../common/HomeHeader';

class addItems extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2})
    //     };
    //  }
    createRow(item){
        return(
            <View style={styles.item}>
                <Image
                style={{width: 150, height: 128}}
                source={{uri: item.link}}
                />
            </View>
        );
    }
    render() {
        return (
            <Image source={require("../../images/bg1.png")} style={styles.container}>
            
            <HomeHeader
            title="Add Items"
            navigation={this.props.navigation}
            />
                <View style={styles.SquareBackground}>
                     <View style={styles.viewStyle2}>
                        <Text style={styles.fontTopic}>Items Today</Text>
                    </View>
                    <View style={styles.viewStyle2}>
                        <View style={styles.viewItem}>
                            <Text style>
                                Items1
                            </Text>
                    </View>
                    <View style={styles.viewItem}>
                            <Text>
                                Items2
                            </Text>
                        </View>
                    </View>
                    <View style={styles.viewStyle2}>
                        <View style={styles.viewItem}>
                             <Text>
                                Items3
                            </Text>
                    </View>
                    <View style={styles.viewItem}>
                        <Text>
                            Items4
                        </Text>
                    </View>
                </View>
                   
            <View>
            <TouchableOpacity style={styles.up}
                    onPress={() => this.props.navigation.navigate('Upload')}>
                    <Text style={styles.text}>Add Item จ้า</Text>
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
         backgroundColor:'rgb(230, 126, 34)'
    },
    up:{
    marginTop:10,
    backgroundColor:'rgb(52, 73, 94)',
    width:200,
    height:40,
    alignItems:'center',
  },

  text:{
    
    marginTop:20,
    justifyContent:'center',
    color:'white',
    fontWeight:'bold'
  }
});

export default addItems;