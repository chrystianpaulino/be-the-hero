import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css'

import api from '../../services/api';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);

    const ongName   = localStorage.getItem('ongName');
    const ongId     = localStorage.getItem('ongId');

    const history   = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: { 
                Authorization: ongId,
            }
        }).then(response => {
            // gravar dados no Estado. sempre uma estado do componente para gravar info. dentro dele
            setIncidents(response.data);
        });
    }, [ongId]); // array com parametros para que se cada vez uma variavel mudar, executar

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(erro){
            alert('Erro ao deletar caso, por favor, tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="BeTheHero"/>
                <span>Bem Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'}).format(incident.value)}</p>
                        {/* passando pro onclick uma funcao e nao o retorno dela */}
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}