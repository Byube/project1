import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const Numlist = (props) => {
    return(
        props.num.map((item,idx)=>(
            <TouchableOpacity 
                style={styles.numList}
                key={idx}
                onPress={()=>props.delete(idx)}
            >
               <Text>
                   {item} , {idx}
               </Text>
            </TouchableOpacity>
        ))
        
    )
}

const styles = StyleSheet.create({
   numList: {
       backgroundColor:'#cecece',
       alignItems:"center",
       padding: 5,
       width: '100%',
       marginTop: 5

   }
})

export default Numlist;