import React, { Component } from 'react'
import {
  Platform, View, TouchableOpacity, Text, StyleSheet, Modal, FlatList, StatusBar
} from 'react-native'

export default class Picker extends Component {
  render() {
    const { style, textStyle, modalStyle, listStyle, itemStyle } = this.props
    const { items, open, onPress, onChange } = this.props
    const labels = items.map(item => item.label)
    const values = items.map(item => item.value)

    const data = items.map(
      item => ({
        key: item.value,
        label: item.label,
        onPress: () => onChange(item.value),
      })
    )

    const flatStyle = (style ? StyleSheet.flatten(style) : {})
    const flatTextStyle = (textStyle ? StyleSheet.flatten(textStyle) : {})
    const flatModalStyle = (modalStyle ? StyleSheet.flatten(modalStyle) : {})
    const flatListStyle = (listStyle ? StyleSheet.flatten(listStyle) : {})
    const flatItemStyle = (itemStyle ? StyleSheet.flatten(itemStyle) : {})

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
          visible={open}
          animationType="slide"
        >
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && (
            <View
              style={{
                height: 24,
                backgroundColor: 'rgba(0,0,0,0.2)',
              }}
            />
          )}
          <View
            style={[{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 20,
            }, flatModalStyle]}
          >
            <FlatList
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity onPress={item.onPress}>
                  <Text style={[{
                    padding: 10,
                  }, flatItemStyle]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
              style={[{
                backgroundColor: 'white',
                alignSelf: 'stretch',
                padding: 20,
              }, flatListStyle]}
            />
          </View>
        </Modal>
      </TouchableOpacity>
    )
  }
}
