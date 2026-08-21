import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import Logo from '../Media/Logo/User.png'
import Colores from '../lib/Colores'

const Header = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.encabezado}>
                <Image
                    source={Logo}
                    resizeMode='cover'
                    style={styles.logo}
                />
                <View style={styles.menu}>
                    <Text style={styles.Titulo}>GameNova</Text>
                    <Text style={styles.Eslogan}>Nivelá tu colección</Text>
                </View>
                <View style={styles.responsive}>
                    <Text style={styles.icono}>≡</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Container: {
        paddingVertical: 15,
    },
    encabezado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: Colores.principal,
        elevation: 10,
        shadowColor: Colores.oscuro,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    logo: {
        width: 50,
        height: 50,
    },
    menu: {
        marginLeft: -30,
    },
    Titulo: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colores.blanco,
    },
    Eslogan: {
        fontSize: 12,
        color: Colores.fondo,
    },
    icono: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
        color: Colores.blanco,
    },
})
