import React from 'react'
import { Modal as ReactNativeModal, FlatList } from 'react-native'
import { TouchableOpacity, Dimensions } from 'react-native'

import Item from './Item'
import StatusBar from './StatusBar'

const marginTop = (data, itemHeight = 32, listPadding = 20) => {
  const { height } = Dimensions.get('window')
  const count = data.length ? data.length : 0
  return (height / 2) - (count * itemHeight / 2) - (listPadding / 2)
}

const Modal = ({ open, data, style, listStyle, itemStyle, onClose }) => (
  <ReactNativeModal
    visible={open}
    animationType="slide"
    onRequestClose={onClose}
    transparent={true}
  >
    <TouchableOpacity
      onPress={onClose}
      style={[{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
      }, style]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <Item {...item} style={itemStyle} />}
        contentContainerStyle={[{
          backgroundColor: 'white',
          alignSelf: 'center',
          marginTop: marginTop(data, itemStyle.height, listStyle.padding),
          padding: 20,
        }, listStyle]}
      />
    </TouchableOpacity>
  </ReactNativeModal>
)

export default Modal
