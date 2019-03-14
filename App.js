import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default class App extends React.Component {
  state = {
    text:"this is our message",
    todo:["3"]
  }
  addTodo = () => {
    const newTodo = this.state.text;
    const arr = this.state.todo
    arr.push(newTodo)
    this.setState({todo:arr,text:""})
  }
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
      <Text key={t}>{t}</Text>
    )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({text})}
          value = {this.state.text}
        />
        <Button
          title="Add todo" onPress={this.addTodo}
        />
        {this.renderTodos()}
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
  inputStyle:{
    height:50,
    borderWidth:1,
    width:'50%'
  }
});


