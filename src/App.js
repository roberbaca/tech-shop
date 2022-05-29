import './App.css';
import Router from './Router/Router';

/*
BEM: Bloque, elemento, modificador.
Los bloques más comunes header, sidebar, aside, main, footer, article, section, ul, ol, div
Los elementos son a partir de un bloque más dos guiones bajos y el nombre de elemento bloque__elemento
Los modificadores son a partir de un bloque o elemento más dos guiones medios y el nombre del modificador bloque—modificador o bloque__elemento–modificador.
Una buena práctica es que los modificadores nunca se añadan a la etiqueta HTML sin la clase de bloque o elemento que los precede bloque bloque—modificador es correcto y por el contrario usar solo bloque—modificador no lo es.
Usar siempre nombres descriptivos o relacionados en función del bloque, elemento o modificación.
*/

function App() {
  return (
    <div className="App">
       <Router/>
    </div>
  );
}

export default App;
