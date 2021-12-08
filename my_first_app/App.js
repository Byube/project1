/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{comments, Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './header';
import Generrator from './src/generator';
import Numlist from './src/numlist';
import Input from './src/input';

//class 에서만 state 사용가능
class App extends Component {

  //변수에서 값을 가져다 사용하는것이 효율성이 매우 좋음
  state = {
    // headerText:'This is header !!!!',
    // sampleBoolean: false,
    // sampleNum:1,
    appName: 'My first Name',
    random: [69,89]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100) + 1;

    //prevState 이전값을 의미 
    this.setState(prevState =>{
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }
  // inputText = () => (
  //   this.state.sampleBoolean ? 
  //   <Text>sampleBoolean is true</Text>
  //   :
  //   <Text>sampleBoolean is false</Text>
  // )

  // changeState = () => {
  //   if(!this.state.sampleBoolean){
  //     this.setState({
  //       sampleText: 'SampleBoolean is true',
  //       sampleBoolean: true
  //     })
  //   } else {
  //     this.setState({
  //       sampleText: 'SampleBoolean is false',
  //       sampleBoolean: false
  //     })
  //   }
  // }

  // onAdd = () => {
  //   //state 값은 쉽게 변경 할수 없음
  //   this.setState(prevState =>{
  //     return{
  //       sampleNum:prevState.sampleNum + 1
  //     }
  //   })
  // }

  onNumdelete = (position) => {
    const newArray = this.state.random.filter((num, idex) => {
      return position != idex;
    })
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View
        style={styles.mainView}
      >
        {/* <Header name={this.state.appName}/>

        <View>
          <Text
            style={styles.mainText}
          >
            Hello World
          </Text>
        </View>

        <Generrator
          add={this.onAddRandomNum}
        />
        <ScrollView
          style={{width: '100%'}}
          // onMomentumScrollBegin={()=>alert('begin')} // 스크롤 이벤트 발생하면 실행되는 이벤트 
          // onMomentumScrollEnd={()=>alert('begin')} // 스크롤 이벤트 끝나면 실행되는 이벤트 
          // onScroll={()=>alert('begin')} // 스크롤 이벤트 감지즉시 
          // onContentSizeChange={(width, height)=>alert(height)} // 스크롤 범위의 값이 변경될때
          // bounces={true} // 스크롤 범위의 값이 변경될때
          overScrollMode={'never'}
        >
          <Numlist 
            num={this.state.random}
            delete={this.onNumdelete}
          />
        </ScrollView> */}
        <Input/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainText:{
    alignItems:'center',
  },
  mainView:{
    flex: 1,
    backgroundColor: 'white',
    padding: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  }
})


export default App;
