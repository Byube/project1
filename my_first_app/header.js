import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,TouchableWithoutFeedback } from "react-native";

const Header = (props) => (
    <TouchableOpacity
        style={style.headers}
        // onPress={()=>alert('hello jeffkim')}
        onLongPress={()=>alert('hello jeffkim')}
    >
        <View>
            <Text>
                {props.name}
            </Text>
        </View>
    </TouchableOpacity>
)

const style = StyleSheet.create({
    headers: {
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        width:'100%'
    }
});

export default Header;