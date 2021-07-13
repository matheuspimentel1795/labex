import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import './ListTrip.css'

export const HomePage = ()=>{
    const history=useHistory()
    const irTelaViagens=()=>{
        history.push("/listTrips")
    }
    const irTelaAdm=()=>{
        history.push('/loginPage')
    }
    return(
        <div>
        <div className='Body'>   
           <h1 className='labex'>Labex</h1>
           <div className='Separar'>
           <div className='ImagemBotao'>
               <img className='Imagem' src='https://thumbs.dreamstime.com/b/globo-da-terra-com-plano-no-estilo-liso-voo-vetor-ilustra-o-do-146334307.jpg'/>
               <button className='botao' onClick={irTelaViagens}>Sou um viajante</button>
           </div>
           <div className='ImagemBotao'>
               <img className='Imagem' src='https://s1.static.brasilescola.uol.com.br/be/vestibular/notebook-ferramenta-trabalho-varios-profissionais-599844f1a665d.jpg' />
               <button className='botao' onClick={irTelaAdm}>Área administrativa</button>
           </div>
           </div>
        </div>
        
        </div>
    )
}