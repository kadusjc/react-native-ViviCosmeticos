import * as React from 'react';

import { Router, Scene } from 'react-native-router-flux'
import Home from './clientes/Home.js'
import Form from './clientes/Form.js'
import Search from './clientes/Search.js'

const Clientes = () => {
  return (

    <Router>
      <Scene key="root">
        <Scene key="customerHome" component={Home} title="Clientes" initial={true} />
        <Scene key="customerForm" component= {Form} title="Criar / Editar Cliente" />
        <Scene key="customerSearch" component= {Search} title="Pesquisar Cliente" />
      </Scene>
    </Router>
  );
}

export default Clientes