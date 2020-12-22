import * as React from 'react';
import { View, Image, StatusBar } from 'react-native'
import { Button, Text } from 'react-native-paper'

import logo from '../images/vivi-cosmeticos.png'

const Venda = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
      <Image source={logo} style={{ marginLeft: 60, resizeMode: "cover", justifyContent: "center", alignContent: "center"}}></Image>
      <StatusBar hidden={true}/>  
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: 'Serif', fontSize: 20, marginTop: 20, padding: 18}}>
        Administre suas vendas através das opções abaixo:
      </Text>

      <Text style={{textAlign: 'justify', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 10, padding: 20}}>
        Cadastre novas vendas para seus cliente através do botão "Nova Venda"
      </Text>
      <Button style={{marginLeft: 20, width: 190, marginTop: 5}} color="green" icon="account-plus" mode="contained" onPress={() => console.log('Pressed')}>
          Nova Venda
      </Button>      

      <Text style={{textAlign: 'justify', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 30, padding: 20}}>
        Confira suas vendas por período através do botão "Relatório de Vendas"
      </Text>
      <Button style={{marginLeft: 20, width: 250, marginTop: 5}} color="green" icon="account-search" mode="contained" onPress={() => console.log('Pressed')}>
          Relatório de Vendas
      </Button>            
      
    </View>    
  );
}

export default Venda