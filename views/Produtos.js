import * as React from 'react';

import { Router, Scene } from 'react-native-router-flux'
import Home from './produtos/Home.js'
import Form from './produtos/Form.js'
import Search from './produtos/Search.js'

const Produtos = () => {
  return (

    <Router>
      <Scene key="root">
        <Scene key="productsHome" component={Home} title="Produtos" initial={true} />
        <Scene key="productForm" component= {Form} title="Criar / Editar Produtos" />
        <Scene key="productsSearch" component= {Search} title="Pesquisar Produtos" />
      </Scene>
    </Router>
  );
}

export default Produtos