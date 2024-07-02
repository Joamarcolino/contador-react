import '../App.css';
import { useState, useEffect } from "react"


function Contador() {
  let [numero, setNumero] = useState(0)
  const [Brilho, setBrilho] = useState('')

  // dar brilho quando chegar ao 1 milhão positivo e negativo respectivamente.
 useEffect(()=>{
    if (numero > 999999){
        setBrilho('positivebright')
    } else if (numero > 999999){
        setBrilho('negativebright')
    } else {
        setBrilho('')
    }
   } , [numero])

   useEffect(()=>{
    if (numero > 999999 || numero > 999999){
        const tempo = (setTimeout(() => {
            setNumero(0)
        }, 1000)) //espera 2 minutos antes de resetar o numero
        return () => clearTimeout(tempo)
    }
   } , [numero])
   

  //código do muda cor de fundo de acordo com o valor positivo, negativo e neutro do estado da aplicação
  useEffect(() => {
    if (numero > 0) {
      document.body.className = 'positive';
    } else if (numero < 0) {
      document.body.className = 'negative';
    } else {
      document.body.className = 'neutral';
    }
  }, [numero]);


 // mudar o valor do numero no console.
  useEffect(() => {
    window.setNumeroGlobal = (value) => setNumero(value);
    return () => {
      delete window.setNumeroGlobal;
    };
  }, []);
  
  //muda valor
  function add(value) {
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