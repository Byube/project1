/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{comments, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


//class 에서만 state 사용가능
class App extends Component {

  //변수에서 값을 가져다 사용하는것이 효율성이 매우 좋음
  state = {
    sampleText:'Hello World!!!!',
    sampleBoolean: false
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

  render() {
    return (
      <View style={style.backgroung}>
        <Text onPress={this.changeState}>
          {this.state.sampleText}
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  backgroung:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default App;
