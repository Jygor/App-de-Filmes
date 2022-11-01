import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, Button} from "react-native";





export default function Categoria1({source, txt}) {

    return (
        <SafeAreaView>    
                <View style={{width: 252,height:144,marginLeft: 4, backgroundColor: "#944D32", justifyContent:'center', alignItems: 'center', borderRadius: 2, marginTop: 15}}>
                        <Image style={style.icon} resizeMode='contain' source={source} />
                </View>
          
        </SafeAreaView>

        
    );
}

const style = StyleSheet.create ({
    icon: {
        width: 250,
     },
        
})