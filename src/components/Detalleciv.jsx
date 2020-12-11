import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Detalleciv = () => {

  

    console.log(useParams)
    const {id} = useParams()
    console.log(id)
    
    const [campo,setCampo] = useState([])


const obtenerDatos = async ()=> {
    console.log('busca datos')
    const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
    const datos = await data.json()
    setCampo(datos)
}

 useEffect(() => {
     obtenerDatos()
   }, [])

    return (
        <div>
            <h1>datos de id {id}</h1>
            <p>{campo.name}</p>
            <hr/>
            <p>{campo.civilization_bonus}</p>
        </div>
    )
}

export default Detalleciv
