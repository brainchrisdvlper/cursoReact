import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const Civilizations = () => {

    const [pueblo,setPueblo] = useState([])

    
    useEffect (()=> {
        console.log('cargando')
        obtenerDatos()
    },[])



    const obtenerDatos = async ()=>{
        console.log('cargadatos')
        const data= await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const datos = await data.json()
        setPueblo(datos.civilizations)
    }


    return (
        <div>
            <h1>Civilizaciones</h1>
            <ul>
                {
                pueblo.map( item => (
                 <li key={item.id}>
                    <Link to={`/civilizaciones/${item.id}`}>
                    {item.name} -- {item.expansion}                    
                    </Link> 
                 </li>           
                 
                ))
               }
            </ul>
        </div>
    )
}

export default Civilizations
