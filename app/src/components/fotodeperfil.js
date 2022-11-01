import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image} from "react-native";


export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#19110C', flex:1, flexDirection: 'row', marginTop:15, marginLeft: 15}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image 
          style={{height: 60, width: 60, borderRadius: 50}}
          source={require('../../assets/perfil.jpeg')} />
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 22, color:'#884B27'}}>
            Hello,
          </Text>
          <Text style={{fontSize: 25, color:'#BEB9B7'}}>
              João Y.
          </Text>
        </View>
        </View> 
      
      
    </SafeAreaView>

  )
}

const style = StyleSheet.create ({

})