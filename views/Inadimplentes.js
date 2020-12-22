import * as React from 'react';
import { View, Image, StatusBar } from 'react-native'
import { Button, Text } from 'react-native-paper'

import logo from '../images/vivi-cosmeticos.png'

const Inadimplentes = () => {   
  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
      <Image source={logo} style={{ marginLeft: 60, resizeMode: "cover", justifyContent: "center", alignContent: "center"}}></Image>
      <StatusBar hidden={true}/>  
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: 'Serif', fontSize: 20, marginTop: 20, padding: 18}}>
        Administre seus clientes inadimplentes através das opções abaixo:
      </Text>

      <Text style={{textAlign: 'left', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 10, padding: 20}}>
        Cadastre novos inadimplentes através do botão "Adicionar Inadimplente"
      </Text>
      <Button style={{marginLeft: 20, width: 280, marginTop: 5}} color="black" icon="skull" mode="contained" onPress={() => console.log('Pressed')}>
        Adicionar Inadimplente
      </Button>      

      <Text style={{textAlign: 'left', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 30, padding: 20}}>
        Pesquisa, edite ou exclua inadimplentes através da opção "Pesquisar Inadimplentes" 
      </Text>
      <Button style={{marginLeft: 20, width: 280, marginTop: 5}} color="black" icon="skull-outline" mode="contained" onPress={() => console.log('Pressed')}>
          Pesquisar Inadimplentes
      </Button>            
      
    </View>    
  );
}

export default Inadimplentes