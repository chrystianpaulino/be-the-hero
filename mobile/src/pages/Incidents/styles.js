import { StyleSheet } from 'react-native';
// constants padroes em projetos
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1, // ocupar o tamanho inteiro
        paddingHorizontal: 24, // padding nas laterais
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row', // itens sempre em colunas abaixo, ao contrario da web, entao coloca row
        justifyContent: 'space-between',
        alignItems: 'center', // centralizar e botar o texto pra direita
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131A',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 14,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
     },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }

});