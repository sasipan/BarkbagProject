import React from 'react'
import { View } from 'react-native';

const withLayout = (style, key) => (LeftComponent, RightComponent) => (
  <View style={style} key={key} >
    { LeftComponent }
    { RightComponent }
  </View>
)

const withData = data => Component => (
  <Component>
    { data }
  </Component>
)

export {
  withLayout,
  withData
}
