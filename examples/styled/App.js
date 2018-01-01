import React, { Component } from 'react'
import { View } from 'react-native'
import { Picker } from 'react-native-controlled-picker'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      language: null,
      open: false,
    }
    this.onChange = this.handleChange.bind(this)
    this.onPress = this.handlePress.bind(this)
    this.onClose = this.handleClose.bind(this)
  }

  handleChange(language) {
    this.setState({ language, open: false })
  }

  handlePress() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          value={this.state.language}
          onChange={this.onChange}
          onPress={this.onPress}
          onClose={this.onClose}
          open={this.state.open}
          style={styles.picker}
          textStyle={styles.pickerText}
          placeholderStyle={styles.pickerPlaceholder}
          modalStyle={styles.pickerModal}
          listStyle={styles.pickerList}
          itemStyle={styles.pickerItem}
          items={[
            { value: 'js', label: 'JavaScript' },
            { value: 'ruby', label: 'Ruby' },
            { value: 'python', label: 'Python' },
            { value: 'elm', label: 'Elm' },
          ]}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    alignSelf: 'stretch',
    backgroundColor: 'cadetblue',
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 20,
    borderRadius: 10,
  },
  pickerText: {
    color: 'white',
  },
  pickerPlaceholder: {
    color: 'darkslategray',
  },
  pickerModal: {
    backgroundColor: 'coral',
  },
  pickerList: {
    backgroundColor: 'cadetblue',
    borderRadius: 10,
  },
  pickerItem: {
    color: 'white',
    fontWeight: 'bold',
  }
}
