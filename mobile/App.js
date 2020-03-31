// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

// IMPORTAR ROTAS
import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}




/**
 * App.js principal
 * Estruturas de Pastas
 * Fast Refresh
 * Elementos web:
 * <div> <span> <p> <h1>
 * No RN, tudo sao componentes pode utilizar div para tudo, pois não tem essas mesmas tags.
 * View pode ser substituida por section, div, footer...
 * Text é utilizada pra qualquer tipo de texto, nao precisa <h1> ou <p> por exemplo
 * Estilização não precisa colocar o id, e estilizar o id. Sempre precisa passar a tag style e recebe um objeto com o style
 * StyleSheet que tem o método create para fazer a stylização
 * Todos os elementos do RN, todos eles já tem display flex por padrão
 * Nas propriedades não tem iifm, ex: backgroundColor
 * Não existe herança de estilos.
 * 
 * Páginas src, Details e Pages
 * Routes.js, docs.expo.io, procura por routing. React Navigation
 * stack navigation pois é somente navegação por botoes
 */