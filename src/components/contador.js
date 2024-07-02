import '../App.css';
import { useState, useEffect } from "react"


function Contador() {
  const [fundo, setFundo] = useState(null)
  const [vitoria, setVitoria] = useState(null)
  let [numero, setNumero] = useState(0)
  const [Brilho, setBrilho] = useState('')


  //código do muda cor de fundo de acordo com o valor positivo, negativo e neutro do estado da aplicação
  
function Fundo(){
   return(add)
}


  if (valornumero > 0){
    setFundo(true)
  } else if(valornumero < 0){
    setFundo(false)
  } else if (valornumero = numero){
    setFundo(null)
  } 


  if (Fundo(true)) {
    document.body.className ('positive')
  } else if(Fundo(false)) {
    document.body.className ('negative')
  } else if (Fundo(null)) {
    document.body.className ('neutral')
  } else {
    document.body.className = ''
  }
    


 // mudar o valor do numero no console.
  useEffect(() => {
    window.setNumeroGlobal = (value) => setNumero(value);
    return () => {
      delete window.setNumeroGlobal;
    };
  }, []);
  
  //muda valor / cheque de valor
  function add (value) {
    const valornumero = (numero + value)
    if (valornumero >= 1000000){
      setVitoria(false)
    } else if(valornumero >= -1000000){
      setVitoria(true)
    }
     
     setNumero(numero + value)
  } 

  return (
    <section>
      <header className= 'title'>
        <h1>Ｃｏｎｔａｄｏｒ</h1>
      </header>
      <main className= 'calc'>
        <p className= {Brilho}>{numero}</p>
      </main>
      <footer className='buttons'>
        <button className='menos1000'onClick={()=>add(-1000)}>-1000</button>
        <button className='menos100'onClick={()=>add(-100)}>-100</button>
        <button className='menos10'onClick={()=>add(-10)}>-10</button>
        <button className='menos' onClick={()=>add(-1)}>-1</button>
        <button className='zerar' onClick={()=> setNumero(0)}>RESET</button>
        <button className='mais' onClick={()=>add(1)}>+1</button>
        <button className='mais10' onClick={()=>add(10)}>+10</button>
        <button className='mais100' onClick={()=>add(100)}>+100</button>
        <button className='mais1000' onClick={()=>add(1000)}>+1000</button>
      </footer>
    </section>
  )
} 

export{Contador}