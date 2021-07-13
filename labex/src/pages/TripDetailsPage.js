import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useHistory,useParams } from 'react-router-dom'
import './ListTrip.css'
export const TripDetailsPage = () =>{
    const [array,setArray] = useState([])
    const [arrayAprovados,setArrayAprovados] = useState([])
    const [aprovado,setAprovado]=useState()
    const [idCandidato,setIdCandidato] = useState()
    const params=useParams()
    const nome = params.nome
    const id = params.id
    const token = localStorage.getItem('token')
    const headers = {
        headers:{
            auth: token
        }
    }
    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trip/${id}`,headers)
        .then((res)=>{
            setArray(res.data.trip.candidates)
        
            setArrayAprovados(res.data.trip.approved)
        })
    },[idCandidato])
    const aprovarCandidato = (candId,result) =>{ 
        const body ={
            approve:result
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips/${id}/candidates/${candId}/decide`,body,headers)
        .then((res)=>{
            setAprovado(result)
            setIdCandidato(candId)
        })
    }
  
    
    const history = useHistory()
  const volta = ()=>{
        history.goBack()
        
  }
 
    return(
        
        <div className='body'>  
        <div className='body2'>
            <img className='voltar' onClick={volta} src='http://www.borjaimobiliaria.com.br/novo/seta_voltar.png' />
            <h1>Dados dos Candidatos para {nome}</h1>
            {array.length>0 ?  array.map((a)=>{
                return (
                    <div className='container-candidatos'>
                         <img className='imagem-astronauta' src='https://img.freepik.com/fotos-gratis/astronauta-fofo-esperando-o-foguete_357749-857.jpg?size=338&ext=jpg'/>
                        <div className='separar-texto'>
                        <h4>Nome: {a.name}</h4>
                        <h4>Idade: {a.age}</h4>
                        <h4>País: {a.country}</h4>
                        <h4>Profissão: {a.profession}</h4>
                        <h4>Texto de Aplicação: {a.applicationText}</h4>
                        <button onClick={()=>aprovarCandidato(a.id,true)}>Aprovar este!</button>
                        </div>
                    </div>
                )
            }): <p className='paragrafo'>Sem candidatos para analisar até o momento!!</p>}
           
            <h1>Candidatos aprovados</h1>
            {arrayAprovados.length>0? arrayAprovados.map((a)=>{
                return (
                    <div className='container-candidatos'>
                        
                        <img className='imagem-astronauta' src='https://image.freepik.com/vetores-gratis/personagem-de-astronauta-feliz-com-design-plano_23-2147913354.jpg'/>
                        <div className='separar-texto'>
                        <h4>Nome: {a.name}</h4>
                        <h4>Idade: {a.age}</h4>
                        <h4>País: {a.country}</h4>
                        <h4>Profissão: {a.profession}</h4>
                        </div>
                    </div>
                )
            }): <p className='paragrafo'>Sem candidatos aprovados até o momento</p>}
        </div>
        </div> 
    )
}
