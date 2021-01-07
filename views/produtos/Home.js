import * as React from 'react';
import { View, Image, StatusBar } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'
import logo from '../../images/vivi-cosmeticos.png'

const Home = () => {
    const goToForm = () => {
        Actions.productForm()
    }

    const goToSearch = () => {
        Actions.productsSearch()
    }

    return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
        <Image source={logo} style={{ marginLeft: 60, resizeMode: "cover", justifyContent: "center", alignContent: "center"}}></Image>
        <StatusBar hidden={true}/>  
        <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: 'Serif', fontSize: 20, marginTop: 10, padding: 18}}>
            Administre seus produtos através das opções abaixo:
        </Text>

        <Text style={{textAlign: 'left', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 10, padding: 20}}>
            Cadastre novos produtos através do botão "Adicionar Produtos"
        </Text>
        <Button style={{marginLeft: 20, width: 250, marginTop: 5, color: 'white'}} color="pink" icon="account-plus" mode="contained" onPress={() => goToForm()}>
            Adicionar Produtos
        </Button>      

        <Text style={{textAlign: 'left', color: 'black', fontWeight: 'normal', fontFamily: 'Serif', fontSize: 18, marginTop: 20, padding: 20}}>
            Pesquisa, edite ou exclua produtos através da opção "Pesquisar Produtos" 
        </Text>
        <Button style={{marginLeft: 20, width: 250, marginTop: 5}} color="pink" icon="account-search" mode="contained" onPress={() => goToSearch()}>
            Pesquisar Produtos
        </Button>            
        
    </View>    
    )
}
export default Home