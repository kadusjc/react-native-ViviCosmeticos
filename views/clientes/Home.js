import * as React from 'react';
import { View, Image, StatusBar } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'
import logo from '../../images/vivi-cosmeticos.png'

const Home = () => {
    const goToForm = () => {
        Actions.customerForm()
    }

    const goToSearch = () => {
        Actions.customerSearch()
    }

    return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
        <Image source={logo} style={{ marginLeft: 60, resizeMode: "cover", justifyContent: "center", alignContent: "center"}}></Image>
        <StatusBar hidden={true}/>  
        <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: 'Serif', fontSize: 20, marginTop: 10, padding: 18}}>
            Administre seus clientes através das opções abaixo:
        </Text>

        <Text style={{textAlign: 'left', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 10, padding: 20}}>
            Cadastre novos cliente através do botão "Adicionar Cliente"
        </Text>
        <Button style={{marginLeft: 20, width: 200, marginTop: 5}} color="blue" icon="account-plus" mode="contained" onPress={() => goToForm()}>
            Adicionar Cliente
        </Button>      

        <Text style={{textAlign: 'left', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 20, padding: 20}}>
            Pesquisa, edite ou exclua clientes através da opção "Pesquisar Clientes" 
        </Text>
        <Button style={{marginLeft: 20, width: 200, marginTop: 5}} color="blue" icon="account-search" mode="contained" onPress={() => goToSearch()}>
            Pesquisar Cliente
        </Button>            
        
    </View>    
    )
}
export default Home