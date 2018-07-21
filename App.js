import React from 'react';
import { Picker, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
   render() {
   this.state = {language: '', randomText: "something"}

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => generateTalk(itemValue)}>
          <Picker.Item label="random" value="random" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="another" value="another" />
        </Picker>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Text>{this.state.randomText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
