import {View , Text , StyleSheet, TextInput, Pressable , 
} from 'react-native';
import { useState } from 'react';
export default function SoSo(){
    const [soDuDoan , setSoDuDoan] = useState(-1);
    const [ketqua , setKetqua] = useState('ket qua hien o day!!!');
    const resulf =()=>{
        let so = Math.floor(Math.random()*3)+1;
        console.log(so);
        if(soDuDoan == so){
            setKetqua("Xin chuc mung ban da chung so:" + soDuDoan);

        }else{
            setKetqua("Ban da chon sai so:" + soDuDoan);
        }

    }
    return(
      
        <View style={styles.container}>
            <Text style={styles.title}>So Xo De!!!</Text>
            <Text style={styles.text}>Nhap 1 so tu 1 den 100</Text>
            <TextInput onChangeText={newText => setSoDuDoan(newText)} style={styles.inputText} placeholder="Nhap so du doan"/>
            <Pressable  onPress={resulf} style={styles.click}>
                <Text>Du Doan</Text>
            </Pressable>
            <Text style={{color:"green" , fontSize:20 , marginTop:30}}>{ketqua}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize:40,
        marginTop:20,
        textAlign:"center",
        color:"blue"
    },
    text:{
      fontSize:15,
      color:"green",
      textAlign:"center"
    },
    inputText:{
        height:40,
        borderWidth:1,
        padding:10,
        marginTop:20,
        width:300,
    },
    click:{
        borderWidth:2,
        borderColor:"green",
        marginTop:20,
        padding:10,
        width:100,
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"red",
    }
})
