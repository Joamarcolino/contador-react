import logo from './logo.svg';
import './App.css';
import { useState } from "react"


export default function App() {
  const [numero , setNumero] = useState(0)

function Mais(){
  setNumero(numero + 1)

}
function Menos(){
  setNumero(numero - 1)
} 

  return (<section>
    <h1>Contador</h1>
    <p>{numero}</p>
    <button onClick={Mais}>Adicionar</button>
    <button onClick={Menos}>Diminuir</button>
  </section>
  );
}
