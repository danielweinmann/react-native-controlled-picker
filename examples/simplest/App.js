import React, { Component } from 'react'
import { View } from 'react-native'
import { Picker } from 'react-native-controlled-picker'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      language: 'js',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
}
