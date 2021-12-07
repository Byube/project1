/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{comments, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './header';

//class 에서만 state 사용가능
class App extends Component {

  //변수에서 값을 가져다 사용하는것이 효율성이 매우 좋음
  state = {
    headerText:'This is header !!!!',
    sampleBoolean: false,
    sampleNum:1,
    appName: 'My first Name'
  }

  inputText = () => (
    this.state.sampleBoolean ? 
    <Text>sampleBoolean is true</Text>
    :
    <Text>sampleBoolean is false</Text>
  )

  changeState = () => {
    if(!this.state.sampleBoolean){
      this.setState({
        sampleText: 'SampleBoolean is true',
        sampleBoolean: true
      })
    } else {
      this.setState({
        sampleText: 'SampleBoolean is false',
        sampleBoolean: false
      })
    }
  }

  onAdd = () => {
    //state 값은 쉽게 변경 할수 없음
    this.setState(prevState =>{
      return{
        sampleNum:prevState.sampleNum + 1
      }
    })
  }

  render() {
    return (
      <Header name={this.state.appName}/>
    )
  }
}


export default App;
