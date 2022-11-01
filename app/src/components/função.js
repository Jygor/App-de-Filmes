import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import Button from '../components/button-notification'

export default function App() {
  return (
    <View style={style.container}>
        <TouchableOpacity >
          <Text style={style.titlle}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.titlle}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.titlle}>Anime</Text>
          </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.titlle}>My List</Text>
          </TouchableOpacity>
    </View>

  )
}

const style = StyleSheet.create ({
  titlle: {
    fontSize: 18,
    margin: 14, 
    color: '#BEB9B7'
  },
  container: {
    flexDirection: 'row',
    marginTop: 18,
    
  }

})