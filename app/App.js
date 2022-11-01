import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView} from "react-native";
import Perfil from './src/components/fotodeperfil'
import Button from './src/components/button-notification'
import Funçao from './src/components/função'
import Filmes1 from './src/components/Filmes1'
import filmesList from "./src/components/FilmesList"
import Filmes2 from './src/components/Filmes2'
import filmesList2 from "./src/components/FilmesList2"
import Filmes3 from './src/components/Filmes3'
import filmesList3 from "./src/components/FilmesList3"

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#19110C', flex:1}}>
      <ScrollView>

      <View style={{width: '100%',flexDirection: 'row'}}>
        <Perfil />
        <Button />
      </View>
      <View>
          <Funçao />
      </View>
      <View>
                <FlatList 
                   horizontal
                   data={filmesList}
                   renderItem={({ item: g}) => { return <Filmes1
                   source={g.source}
                   />}}
                   keyExtractor={item => item.id}

                />
      </View>
      <View style={{alignItems:'center', marginTop: 18}}>
        <Text style={{color: '#884B27', fontSize: 18}}>Episode 1</Text>
        <Text style={{color: 'white', fontSize: 25}}>Pow Pow</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 8, color: 'white'}}>Recent Watched</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 18, marginRight: 13, color: '#884B27',}}>See all</Text>
        </TouchableOpacity>
      </View>

      <View>
                <FlatList 
                   horizontal
                   data={filmesList2}
                   renderItem={({ item: g}) => { return <Filmes2
                   source={g.source}
                   />}}
                   keyExtractor={item => item.id}

                />
      </View>
      <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 10}}>
        <Text style={{fontSize: 20, marginLeft: 8, color: 'white'}}>My Favorites</Text>
       <TouchableOpacity>
        <Text style={{fontSize: 18, marginRight: 13, color: '#884B27',}}>See all</Text>
       </TouchableOpacity>
      </View>
      <View>
                <FlatList 
                   horizontal
                   data={filmesList3}
                   renderItem={({ item: g}) => { return <Filmes3
                   source={g.source}
                   />}}
                   keyExtractor={item => item.id}

                />
      </View>
    </ScrollView>
    </SafeAreaView>
   
  )
}

const style = StyleSheet.create ({

})