import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import { useRequestData } from '../hooks/useRequestData'
import './ListTrip.css'

export const ListTripsPage = ()=>{
    const history = useHistory()
    const voltarHome = () =>{
        history.goBack()
    }
    const inscricao = (iden,nome)=>{
        history.push( `/inscricao/${iden}/${nome}`)
        const id = iden
        
        
    }
   
    const [arrayViagens,isLoading,error]=useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips')
   
    const listaViagens = arrayViagens.map((trip)=>{
        return (
            <div className='lista-viagem' 
           key={trip.id}>
                <img className='astronauta' src='https://image.freepik.com/vetores-gratis/astronauta-bonito-montando-foguete-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-conceito-de-icone-de-tecnologia-cientifica_138676-2130.jpg'/>
                <h2>Nome: {trip.name}</h2>
                <h4>Descrição: {trip.description}</h4>
                <h4>Planeta: {trip.planet}</h4>
                <h4>Data da Viagem: {trip.date}</h4>
                <h4>Duração: {trip.durationInDays} dias</h4>
                <button className='botao' onClick={()=>inscricao(trip.id,trip.name)}>Inscrever neste!!</button>

            </div>
        )
    })
    return(
        <div className='body'>
            <div className='tamanho'>
            <img className='voltar' onClick={voltarHome} src='http://www.borjaimobiliaria.com.br/novo/seta_voltar.png' />
            <h1 className='labex'>Lista de Viagens</h1>
            <div className='listaViagem'>
            <div className='container'>
            {isLoading && <p>carregando...</p>}
            {!isLoading && arrayViagens.length>0 && listaViagens}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && arrayViagens.length===0 && <p>Não tem nenhuma viagem disponivel</p>}
            </div>
        </div>
        </div>
        </div>
    )
}