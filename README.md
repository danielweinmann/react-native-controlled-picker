# react-native-controlled-picker
A 100% controlled and declarative Picker for React Native

## Installation

```yarn add react-native-controlled-picker```

or

```npm install react-native-controlled-picker --save```

## Examples

### Simplest example

[Run this example on Expo](https://exp.host/@danielweinmann/react-native-controlled-picker-simplest)

[Read the source code](examples/simplest/App.js)

### Styled example

[Run this example on Expo](https://exp.host/@danielweinmann/react-native-controlled-picker-styled)

[Read the source code](examples/styled/App.js)

## Props

| Property | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| open | boolean | `false` | Whether the items modal is open or not |
| items | array of objects | `[]` | Array of objects with `label` and `value` keys |
| value | any | `null` | The value of the current selected item |
| onPress | function | | Function to be called when the user clicks on the picker |
| onChange | function | | Function to be called when the user selects an item |
| onClose | function | | Function to be called when the user request to close the modal |
| style | function | `{}` | Additional style for the picker's container view |
| textStyle | function | `{}` | Additional style for the picker's text |
| modalStyle | function | `{}` | Additional style for the modal's container view |
| listStyle | function | `{}` | Additional style for the list's container view |
| itemStyle | function | `{}` | Additional style for the item's text |

## Contributing

Please create issues and send pull requests!

## License

[MIT](LICENSE)
