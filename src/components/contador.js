import '../App.css';
import { useState } from "react"


export default function Contador() {

  let [numero, setNumero] = useState(0)

  //numero maximo e minimo 
  const maxNumero = 100000
  const minNumero = -100000
  
 //limitador do contador de 100.000 e -100000
  function add(value) {
    setNumero((prevNumero) => {
      const newNumero = prevNumero + value;
      if (newNumero > maxNumero) return maxNumero
      if (newNumero < minNumero) return minNumero 
      return newNumero;
    });
  }
 
  //cor negativa e positiva do body de acordo com o valor do numero.
  function getBodyClass() {
    if (numero < 0) return 'negative'
    if (numero > 0) return 'positive'
    return 'neutral'

  //cor negativa brilhante e positiva brilhante do <p>P</p> e <h1>H1</h1> de acordo com o valor do numero
  }
  function changeBrightnesscolor() {
    if (numero > 0) return 'positivebright'
    if (numero < 0) return 'negativebright'
    return ''
  }

  // conteudo HTML
  return (
    <body className={getBodyClass()}>
      <section >
        <header className= 'title'>
          <h1 className={changeBrightnesscolor()}>Ｃｏｎｔａｄｏｒ</h1>
        </header>
        <main className= 'calc'>
          <p className={changeBrightnesscolor()}>{numero}</p>
        </main>
        <footer className='buttons'>
          <button  className='menos1000'onClick={()=>add(-1000)}>-1000</button>
          <button  className='menos100'onClick={()=>add(-100)}>-100</button>
          <button  className='menos10'onClick={()=>add(-10)}>-10</button>
          <button  className='menos' onClick={()=>add(-1)}>-1</button>
          <button id='zerar' className={changeBrightnesscolor()} onClick={()=> setNumero(0)}>RESET</button>
          <button  className='mais' onClick={()=>add(1)}>+1</button>
          <button  className='mais10' onClick={()=>add(10)}>+10</button>
          <button  className='mais100' onClick={()=>add(100)}>+100</button>
          <button  className='mais1000' onClick={()=>add(1000)}>+1000</button>
        </footer>
      </section>
    </body>
 )
}