import {Button, Text, TextInput, View} from 'react-native';
import CustomLabel from './src/components/CustomLabel';
import { useState } from 'react';

function App() {

  console.log('Hello');

  function click(value:any){
    console.log(value);
  }

  const[count, setCount] = useState(0);

  function changeCount(){
    setCount(count + 1);
  }

  return (
    <View style={{alignItems: 'center', flex:1, marginTop:35, borderWidth:1, borderColor:'red'}}>
      <CustomLabel>Hello Welcome</CustomLabel>
      <CustomText fSize={30} a={'React'} b={'Native'} c={'yellow'} />
    
    <View style={{flexDirection: 'row', alignItems:'center', borderWidth:1, borderColor:'red', justifyContent:'space-between', gap:20 }}>
      <Button title='Change Count' onPress={changeCount} />
      <Text style={{color:'white'}}>{count}</Text>
    </View>
      
      <TextInput style={{backgroundColor:'white', color:'black', width:300, marginTop:30, borderRadius:10, paddingLeft:20, paddingRight:20}} placeholder='user name' placeholderTextColor={'#5a5a5a'}/>
      <TextInput style={{backgroundColor:'white', color:'black', width:300, marginTop:20, borderRadius:10, paddingLeft:20, paddingRight:20}} placeholder='password' placeholderTextColor={'#5a5a5a'} secureTextEntry={true}/>
    </View>
  );
}

type CustomTextProps = {
  fSize?: number
  a: string  
  b: string
  c: string
}

function CustomText(props:CustomTextProps){
  return(
    <Text style={{fontSize:props.fSize, color:props.c, marginBottom:20, borderWidth:1, borderColor:'red'}}>{props.a} {props.b}</Text>
  ); 
}

export default App;
