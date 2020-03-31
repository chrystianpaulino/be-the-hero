import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api';

export default function Incidents() {

    const [incidents, setIncidents] = useState([]); // como vai preencher c/ array, preenche com um vazio
    const [total, setTotal]         = useState(0);
    const [page, setPage]           = useState(1); // para navegaçao infinita, controlar o numero da pagina que estou
    const [loading, setLoading]     = useState(false); // para armazenar quando esta buscando dados novos, para evitar que busque novamente. Carregar 1pag por vez

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident }); // os argumentos pra pagina que ta navegando
    }

    async function loadIncidents(){

        if(loading){ // para evitar duas requisiçoes ao mesmo tempo
            return;
        }

        if(total > 0 && incidents.length === total){ // caso ja tenha carregado tudo
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: {page}
        });

        // colocar os dados da response dentro de um estado: useState
        setIncidents([...incidents, ...response.data]); // anexar 2 vetores dentro de um unico vetor, para colocar as novas abaixo
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    // useEffect sempre quando iniciar ou as variaveis [] mudarem
    useEffect(() => {
        loadIncidents();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                // funcao chamada qnd chega no final da pagina
                onEndReached={loadIncidents}
                // fala quantos % do final da lista o usuario precisa estar para carregar de 0-1
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>
                            ONG:
                        </Text>
                        <Text style={styles.incidentValue}>
                            {incident.name}
                        </Text>

                        <Text style={styles.incidentProperty}>
                            {incident.title}:
                        </Text>
                        <Text style={styles.incidentValue}>
                            {incident.description}
                        </Text>

                        <Text style={styles.incidentProperty}>
                            VALOR:
                        </Text>
                        {/* erro no intl */}
                        <Text style={styles.incidentValue}>
                            R$ {incident.value},00
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            // dessa maneira so chama qnd clicar, se deixar so a funçao, chama quando mostra em tela
                            onPress={() => navigateToDetail(incident)}  
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    
                    </View>
                )}
            />

        </View>
 
    );


}