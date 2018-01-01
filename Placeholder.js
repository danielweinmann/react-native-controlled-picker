import React from 'react'
import { Text } from 'react-native'

const Placeholder = ({ children, style }) => (
  <Text style={[{ color: 'lightgray' }, style]}>
    {children}
  </Text>
)

export default Placeholder
