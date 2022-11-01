import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";


export default function App() {
  return (
    <TouchableOpacity style={style.container}>
        <View style={style.botao}/>
    </TouchableOpacity>

  )
}

const style = StyleSheet.create ({
  container: {
    backgroundColor: '#19110C',
    marginTop: 22,
    marginRight: 15
  },
  botao:{
    backgroundColor: '#884B27', 
    height:52, 
    width:52, 
    borderRadius: 10
  }

})