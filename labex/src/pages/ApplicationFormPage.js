import axios from 'axios'
import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import './ListTrip.css'
export const AplicationFormPage=()=>{
    
    const { form, onChange, cleanFields } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: '',
    country: ''
    })
    const params = useParams()
   
    const iden = params.id
    const nome = params.nome
    const history = useHistory()
    const voltar=()=>{
        history.goBack()
    }
    const aplicarParaViagem = (event)=>{
        event.preventDefault();
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-pimentel-molina/trips/${iden}/apply`
        axios.post(url,form)
        .then((res)=>{
            alert('Inscrição confirmada com sucesso!!')
            history.push("/")
            cleanFields()
        })
        }
       
       
    
    return(
        <div className='bodyy'>
            <img className='voltar'  onClick={voltar} src='http://www.borjaimobiliaria.com.br/novo/seta_voltar.png' />
            
            <div className='dividir-inputs'>
             
            <h1>Hora de fazer sua inscricao para {nome}</h1>
            <form onSubmit={aplicarParaViagem}>
                <input required pattern={'^.{3,}'} title='Mínimo de 3 letras' name={'name'} value={form.name} onChange={onChange} placeholder='Nome'/>
                <input required min='18' name={'age'} type='number' value={form.age} onChange={onChange} placeholder='Idade'/>
                <input helperText="Explique por que você é uma boa pessoa candidata"  required pattern={'^.{30,}'} title='Mínimo de 30 caracteres'  name={'applicationText'}  value={form.applicationText} onChange={onChange} placeholder='Texto para aplicação'/>
                <input required pattern={'^.{5,}'} title='Mínimo de 5 caracteres'  name={'profession'}  value={form.profession} onChange={onChange} placeholder='Profissão'/>
                <input required   name={'country'} value={form.country} onChange={onChange} placeholder='País'/>
                <button className='botao-aplicar'>Aplicar</button>
            </form>

        </div>
        </div>
    )
}
