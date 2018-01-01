import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import Modal from './Modal'
import Placeholder from './Placeholder'

class Picker extends Component {
  render() {
    const { value, items, open, onPress, onChange, onClose } = this.props
    const { style, textStyle, modalStyle, listStyle, itemStyle } = this.props
    const { placeholder, placeholderStyle } = this.props
    const labels = items.map(item => item.label)
    const values = items.map(item => item.value)
    const currentIndex = values.indexOf(value)

    const data = items.map(
      item => ({
        key: item.value,
        label: item.label,
        onPress: () => onChange(item.value),
      })
    )

    const flatStyle = style ? StyleSheet.flatten(style) : {}
    const flatTextStyle = textStyle ? StyleSheet.flatten(textStyle) : {}

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
        <Text style={[{ flex: 1 }, defaultTextStyle, textStyle]}>
          {currentIndex > -1 ? labels[currentIndex] : (
            <Placeholder style={placeholderStyle}>{placeholder}</Placeholder>
          )}
        </Text>
        <Text style={[{ color: 'black' }, defaultTextStyle, flatTextStyle]}>
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

const stylePropType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.arrayOf(PropTypes.object),
])

Picker.propTypes = {
  open: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onPress: PropTypes.func,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  style: stylePropType,
  textStyle: stylePropType,
  placeholderStyle: stylePropType,
  modalStyle: stylePropType,
  listStyle: stylePropType,
  itemStyle: stylePropType,
}

Picker.defaultProps = {
  open: false,
  items: [],
  value: null,
  placeholder: 'Please select...',
  style: {},
  textStyle: {},
  placeholderStyle: {},
  modalStyle: {},
  listStyle: {},
  itemStyle: {},
}

export default Picker
