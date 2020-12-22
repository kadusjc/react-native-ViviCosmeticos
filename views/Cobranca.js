import * as React from 'react';
import { View, Image, StatusBar } from 'react-native'
import { Button, Text } from 'react-native-paper'

import logo from '../images/vivi-cosmeticos.png'

const Cobranca = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
      <Image source={logo} style={{ marginLeft: 60, resizeMode: "cover", justifyContent: "center", alignContent: "center"}}></Image>
      <StatusBar hidden={true}/>  
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: 'Serif', fontSize: 20, marginTop: 20, padding: 18}}>
        Gere e envie links de cobrança de sua conta do Mercado Pago aos seus clientes
      </Text>
      <Button style={{marginLeft: 20, width: 190, marginTop: 5, backgroundColor: '#607D8B'}} icon="credit-card-plus" mode="contained" onPress={() => console.log('Pressed')}>
          Gerar Cobrança
      </Button>      
      
    </View>    
  );
}

export default Cobranca;