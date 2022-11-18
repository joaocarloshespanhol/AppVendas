import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View,} from 'react-native';
import { Button, Icon, Input, Image } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style ={{width:180, height:180}} source={require('../assets/telainicio2.png')} />
      <Input
        placeholder="Usuario"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={value => setUser (value)} />

      <Input
        placeholder="Senha"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        onChangeText={value => setPassword (value)}
        secureTextEntry={true} />
      
      <Button
      icon={
        <Icon
        name="check"
        size={15}
        color="#DCDCDC" />
      }
      
      title="Entrar"
      style={styles.botaoEntrar} onPress={() => entrar()} />
    </View>
  );
}