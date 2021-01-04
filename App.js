import * as React from 'react';

import { Icon } from 'react-native-elements'

import { Router, Scene } from 'react-native-router-flux'
import CustomerHome from './views/clientes/Home.js'
import CustomerForm from './views/clientes/Form.js'
import CustomerSearch from './views/clientes/Search.js'

import ProductsHome from './views/produtos/Home.js'
import ProductsForm from './views/produtos/Form.js'
import ProductsSearch from './views/produtos/Search.js'

const App = () => {

const iconCustomer = () => (
  <Icon color='#3F51B5' name='account-edit' size={25} />
)
const iconProduct = () => (
  <Icon color='#D445D9' name='gift' size={25} />
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
      <Scene key='root' hideNavBar>
        <Scene key='tabBar' tabs={true} tabBarPosition="bottom">
          <Scene key='cliente' icon={iconCustomer} title='Clientes' color='#3F51B5'>
            <Scene key="customerHome" component={CustomerHome} title="Clientes" initial={true} />
            <Scene key="customerForm" component= {CustomerForm} title="Criar / Editar Cliente"/>
            <Scene key="customerSearch" component={CustomerSearch} title="Pesquisar Cliente"/>
          </Scene>
          <Scene key='produtos' icon={iconProduct} title='Produtos' color='#D445D9'>
            <Scene key="productsHome" component={ProductsHome} title="Produtos" initial={true}/>
            <Scene key="productForm" component= {ProductsForm} title="Criar / Editar Produtos"/>
            <Scene key="productsSearch" component={ProductsSearch} title="Pesquisar Produtos"/>
          </Scene>
        </Scene> 
    </Scene>  
  </Router>
  );
};

export default App;