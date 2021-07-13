import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import './ListTrip.css'
export const CreateTripPage = () => {
    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: 0
    })
    const criarViagem = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token')
        const headers = {
            headers: {
                auth: token
            }
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips', form, headers)
            .then(() => {
                alert('Viagem criada com sucesso')
                history.push('/admPage')
                cleanFields()
            })
            .catch(()=>{
                alert('erro ao concretizar a ação')
            })
    }
    const history = useHistory()
    const volta = () => {
        history.goBack()
    }
    return (
        <div className='body-create'>
            <img className='voltar' onClick={volta} src='http://www.borjaimobiliaria.com.br/novo/seta_voltar.png' />
            <div className='alinhar'>
            <h1>Criar viagens</h1>
            <form onSubmit={criarViagem}>
                <input required pattern={"^.{5,}"} title='Mínimo de 5 letras' placeholder='Nome' name={'name'} value={form.name} onChange={onChange} />
                <select required name={'planet'} value={form.planet} onChange={onChange}>
                    <option>Escolha um planeta</option>
                    <option value='mercúrio'>Mercúrio</option>
                    <option value='venus'>Vênus</option>
                    <option value='terra'>Terra</option>
                    <option value='marte'>Marte</option>
                    <option value='jupiter'>Jupiter</option>
                </select>
                <input required pattern='^.{30,}' title='Mínimo de 30 letras' name={'description'} placeholder='Descrição' value={form.description} onChange={onChange} />
                <input required min='10/07/2021' name={'date'} type='date' value={form.date} onChange={onChange} />
                <input required type='number' name={'durationInDays'} placeholder='Duração em dias' value={form.durationInDays} onChange={onChange} />
                <button>Criar</button>
            </form>
            </div>
        </div>
    )
}
