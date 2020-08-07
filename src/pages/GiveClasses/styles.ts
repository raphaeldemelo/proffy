import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40,
    },

    containerTitle:{
    },

    title: {
        marginTop: 150,
        color: '#fff',
        fontSize: 35,
        fontFamily: 'Archivo_700Bold',
    },

    description: {
        color: 'rgba(255,255,255, 0.5)',
        marginTop: 30,
        fontSize: 17,
        fontFamily: 'Archivo_400Regular',
    },

    containerButton:{
        marginTop: 130,
    },

    button: {
        backgroundColor: 'green',
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
    },

    buttonText:{
        color: "#fff",
        alignSelf: 'center',
        fontFamily: 'Archivo_700Bold',
    },

    content:{
        flex: 1,
        justifyContent: 'center',
    },

});

export default styles;