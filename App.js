import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import ClientesRoute from './views/Clientes' 
import InadimplentesRoute from './views/Inadimplentes' 
import VendasRoute from './views/Vendas' 
import CobrancaRoute from './views/Cobranca' 

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'cliente', title: 'Clientes', icon: 'account-edit', color: '#3F51B5'},
    { key: 'inadimplentes', title: 'Inadimplentes', icon: 'skull-crossbones', color: '#000000' },
    { key: 'venda', title: 'Vender', icon: 'sale', color: '#228B22' },
    { key: 'cobranca', title: 'Gerar Cobrança', icon: 'cash', color: '#607D8B' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    cliente: ClientesRoute,
    inadimplentes: InadimplentesRoute,
    venda: VendasRoute,
    cobranca: CobrancaRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;