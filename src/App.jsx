import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './fragments/InformacionCalamaFragment'
import InformacionCalamaFragment from './fragments/InformacionCalamaFragment'
import ColorfavoritoFragment from './fragments/ColorFavoritoFragment'
function App() {
  //let platoFavorito = "Lasaña"
  const [platoFavorito, setPlatoFavorito] = useState("Lasaña")
  const [color, setColor] = useState('Perú')
  //const [count, setCount] = useState(0)
  //function handClick(){}
  const handClick = () => {
    setPlatoFavorito('Cazuela')
  }
  return (
    <>
    {2*2}<br />
    {platoFavorito}<br />
    <hr />
    <button className='btn btn-primary' type="button" onClick={handClick}>Presiona para cambiar Lasaña por Cazuela</button>
    <hr className='mb-4'/>
    <InformacionCalamaFragment />
    <ColorfavoritoFragment color={color} datos={"123"}/>
    </>
  )
}

export default App
