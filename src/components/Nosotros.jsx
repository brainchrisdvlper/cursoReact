import React,{useEffect,useState} from 'react'

const Nosotros = () => {
    console.log('Datos')

  const [equipo, setEquipo ] =useState([])

  useEffect (()=>{
    console.log('UseEffect')
    obtenerDatos()
  },[])

  const obtenerDatos = async () => {
    console.log('obt datos')
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    setEquipo(users) 
}

 

return(
        <div>
           <h1>Nosotros </h1> 
         {
            equipo.map( item =>(
                <li key={item.id}>{item.name}-{item.email}</li>
            ))
         }  
         </div>
    )
}

export default Nosotros
