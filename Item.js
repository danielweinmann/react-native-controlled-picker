import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Item = ({ label, style, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[{
      fontSize: 12,
      lineHeight: 12,
      height: 32,
      padding: 10,
    }, style]}>
      {label}
    </Text>
  </TouchableOpacity>
)

export default Item
