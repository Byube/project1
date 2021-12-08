import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Generator = (props) => {
    return(
        <View 
            style={styles.generator}
        >
            <Button 
                title="Add Number"
                //함수를 받아오면 뒤에 () 필수 입력
                onPress={()=>props.add()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   generator: {
       backgroundColor:'#D197CF',
       alignItems:"center",
       padding: 5,
       width: '100%'

   }
})

export default Generator;