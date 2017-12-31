import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Modal from './Modal'

export default class Picker extends Component {
  render() {
    const { style, textStyle, modalStyle, listStyle, itemStyle } = this.props
    const { items, open, onPress, onChange, onClose } = this.props
    const labels = items.map(item => item.label)
    const values = items.map(item => item.value)

    const data = items.map(
      item => ({
        key: item.value,
        label: item.label,
        onPress: () => onChange(item.value),
      })
    )

    const flatStyle = style ? StyleSheet.flatten(style) : {}
    const flatTextStyle = textStyle ? StyleSheet.flatten(textStyle) : {}

    const { value } = this.props

    const defaultTextStyle = {
      color: 'black',
      fontSize: 12,
      lineHeight: (flatStyle.height ? flatStyle.height : 12),
    }

    return(
      <TouchableOpacity
        onPress={onPress}
        style={[{
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 6,
        }, flatStyle]}
      >
        <Text
          style={[{ flex: 1 }, defaultTextStyle, textStyle]}
        >
          {labels[values.indexOf(value)]}
        </Text>
        <Text style={[{color: 'black'}, defaultTextStyle, flatTextStyle]}>
          ▼
        </Text>
        <Modal
          open={open}
          data={data}
          onClose={onClose}
          style={modalStyle ? StyleSheet.flatten(modalStyle) : {}}
          listStyle={listStyle ? StyleSheet.flatten(listStyle) : {}}
          itemStyle={itemStyle ? StyleSheet.flatten(itemStyle) : {}}
        />
      </TouchableOpacity>
    )
  }
}
