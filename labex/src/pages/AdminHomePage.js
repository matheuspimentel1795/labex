import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import styled from 'styled-components'
import axios from 'axios'
import './ListTrip.css'

export const AdminHomePage = () =>{
    const [array,setArray]=useState([])
    const [idTrip,setIdTrip]=useState('')
    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips`)
        .then((res)=>{
            setArray(res.data.trips)    
        })
        .catch((err)=>{
        })
    },[idTrip])
    
    const excluirViagem = (idViagem) =>{
        const token = localStorage.getItem('token')
        const headers = {
            headers:{
                auth:token
            }
        }
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips/${idViagem}`,headers)
        .then(()=>{
            alert('Viagem deletada com sucesso')
            setIdTrip(idViagem)
        })
        .catch(()=>{
            alert('Não foi possível deletar a viagem')
            
        })
    }
    const history = useHistory()
    const telaDetalhes = (iden,name)=>{
        const nome = name
        const id = iden
        history.push(`/detalhesPage/${id}/${nome}`)
    }
    const voltarTelaInicial =()=>{
        history.push('/')
    }
    const telaLogIn = ()=>{
        history.push('/loginPage')
    }
    const telaCriarViagem = ()=>{
        history.push('/criarPage')
    }
    return(
        <div className='corpo-adm'>
            <div className='tamanho'>
            <img className='voltar' onClick={voltarTelaInicial} src='http://www.borjaimobiliaria.com.br/novo/seta_voltar.png' />
            <div className='separar-adm'>
            <h1>Painel Administrativo</h1>
            <div className='separa-botoes'>
            <button onClick={telaLogIn}>Log-Out</button>
            <button onClick={telaCriarViagem}>Criar Viagem</button>
            </div>
            </div>
            <h1 className='viagens-disp'>Viagens disponíveis</h1>
            {array.map((nome)=>{
        return (
            <div className='Container'  key={nome.id}>
                <h2 onClick={()=>telaDetalhes(nome.id,nome.name)}>{nome.name}</h2>
                <button onClick={()=>excluirViagem(nome.id)}>Excluir</button>
            </div>
           
        )
    })}
            
        </div>
        </div>
    )
}
