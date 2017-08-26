import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Item = props => {
  const styles = StyleSheet.create({
    viewItem: {
      justifyContent: 'space-between',
      alignItems: 'stretch',
      padding: 16,
      margin: 16,
    }
  })
  console.log(props.data.img_url)
  return (
    <View style={styles.viewItem} >
      <Image source={props.data.img_url} style={{height: 100, width: 100}}/>
      <Text>
        { props.data.item }
      </Text>
    </View>
  )
}

export default Item
