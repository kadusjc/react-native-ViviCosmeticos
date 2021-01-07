import * as React from 'react';

import { Icon } from 'react-native-elements'

import { StyleSheet, View, Navigator} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import CustomerHome from './views/clientes/Home.js'
import CustomerForm from './views/clientes/Form.js'
import CustomerSearch from './views/clientes/Search.js'

import ProductsHome from './views/produtos/Home.js'
import ProductsForm from './views/produtos/Form.js'
import ProductsSearch from './views/produtos/Search.js'

const App = () => {

const iconCustomer = () => (
  <View>
    <Icon color='#3F51B5' name='account-circle' size={28} />
  </View>
)
const iconProduct = () => (
  <View>
    <Icon color='#D445D9' name='card-giftcard' size={28} />
  </View>  
)
  /*const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'cliente', title: 'Clientes', icon: 'account-edit', color: '#3F51B5'},
    { key: 'produtos', title: 'Produtos', icon: 'gift', color: '#D445D9' },
    { key: 'inadimplentes', title: 'Inadimplentes', icon: 'skull-crossbones', color: '#000000' },
    { key: 'venda', title: 'Vender', icon: 'sale', color: '#228B22' },
    { key: 'cobranca', title: 'Gerar Cobrança', icon: 'cash', color: '#607D8B' },
  ]);*/
  
  return (
    <Router>  
      <Scene key='root' hideNavBar >
        <Scene key='tabBar' tabs={true} tabBarPosition="bottom">
          <Scene key='clientes' icon={iconCustomer} titleStyle={styles.customerTitleStyle} navigationBarStyle={styles.customerNavbar} title='Clientes' color='#3F51B5'>
            <Scene key="customerHome" component={CustomerHome} title="Clientes" initial={true} />
            <Scene key="customerForm" component= {CustomerForm} title="Criar / Editar Cliente"/>
            <Scene key="customerSearch" component={CustomerSearch} title="Pesquisar Cliente"/>
          </Scene>
          <Scene key='produtos' icon={iconProduct} titleStyle={styles.productsTitleStyle} navigationBarStyle={styles.productsNavBar} title='Produtos' color='#D445D9'>
            <Scene key="productsHome" component={ProductsHome} initial={true}/>
            <Scene key="productForm" component= {ProductsForm} title="Criar / Editar Produtos"/>
            <Scene key="productsSearch" component={ProductsSearch} title="Pesquisar Produtos"/>
          </Scene>
        </Scene> 
    </Scene>  
  </Router>
  );
};


const styles = StyleSheet.create({
  customerNavbar: {
    backgroundColor: 'blue'
  },
  customerTitleStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  productsNavBar: {
    backgroundColor: 'pink'
  },
  productsTitleStyle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  
})

export default App;