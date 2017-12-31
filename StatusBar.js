import React from 'react'
import { Platform, StatusBar as ReactNativeStatusBar, View } from 'react-native'

const StatusBar = ({ label, style, onPress }) => (
  <View
    style={{
      height: ReactNativeStatusBar.currentHeight || 20,
    }}
  />
)

export default StatusBar
