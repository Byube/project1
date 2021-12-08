import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,TouchableWithoutFeedback } from "react-native";

const Header = (props) => (
    <TouchableOpacity
        style={styles.header}
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

const styles = StyleSheet.create({
    header: {
        backgroundColor:'pink',
        alignItems:'center',
        padding:5,
        width:'100%'
    }
})

export default Header;