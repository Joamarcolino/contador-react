import './App.css';
import { useState } from "react"


export default function Contador() {
  const [numero, setNumero] = useState(0);
  const [limitBroken, setLimitBroken] = useState(0);
  const [maxNumero, setMaxNumero] = useState(100000);
  const [minNumero, setMinNumero] = useState(-100000);
  const [multiplier, setMultiplier] = useState(1);

  function add(baseValue) {
    const realValue = Math.round(baseValue * multiplier); // aplica o multiplicador e arredonda
    setNumero((prevNumero) => {
      const newNumero = prevNumero + realValue;
      if (newNumero > maxNumero || newNumero < minNumero) {
        setLimitBroken((prev) => prev + 1);
        setMaxNumero((prev) => parseFloat((prev * 1.2).toFixed(2)));
        setMinNumero((prev) => parseFloat((prev * 1.2).toFixed(2)));
        setMultiplier((prev) => parseFloat((prev * 1.1).toFixed(3))); // aumenta o multiplicador
        return 0;
      }
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
      <section  >
        <div id='showstats'>
          <h1 id='limitbreaker'>Limit breaks:<h2> {limitBroken}</h2></h1>
          <li className='stats'>Current Limit Range: <h3 id='minnumero'> {minNumero} </h3> to <h3 id='maxnumero'> {maxNumero} </h3> </li>
          <li className='stats'>Multiplier: <h3>x{multiplier.toFixed(2)}</h3></li>
        </div>
        <header className='title'>
          <h1 className={changeBrightnesscolor()}>Ｃｏｎｔａｄｏｒ</h1>
        </header>
        <main className='calc'>
          <p className={changeBrightnesscolor()}>{numero}</p>
        </main>
        <footer className='buttons'>
          <button className='menos1000' onClick={() => add(-1000)}>-1000</button>
          <button className='menos100' onClick={() => add(-100)}>-100</button>
          <button className='menos10' onClick={() => add(-10)}>-10</button>
          <button className='menos' onClick={() => add(-1)}>-1</button>
          <button id='zerar' className={changeBrightnesscolor()} onClick={() => setNumero(0)}>RESET</button>
          <button className='mais' onClick={() => add(1)}>+1</button>
          <button className='mais10' onClick={() => add(10)}>+10</button>
          <button className='mais100' onClick={() => add(100)}>+100</button>
          <button className='mais1000' onClick={() => add(1000)}>+1000</button>
        </footer>
      </section>
    </body>
  )
}