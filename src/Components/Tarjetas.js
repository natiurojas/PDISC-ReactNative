import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Colores from '../lib/Colores'

import Producto1 from '../Media/Productos/a.jpg'

export default class Tarjetas extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Tarjetas}>
                    <Image
                        source={Producto1}
                        resizeMode='cover'
                        style={styles.imgProducto}
                    />
                    <View style={styles.info}>
                        <Text style={styles.Nombre}>Auricular 01</Text>
                        <Text style={styles.infoDes}>El mejor Auricular del Mercado. Sonido envolvente, excelente calidad y el mejor precio</Text>
                        <TouchableOpacity style={styles.boton}>
                            <Text style={styles.titulo}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    Tarjetas: {
        width: '98%',
        height: 280,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        elevation: 10,
        shadowColor: Colores.oscuro,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 10,
        backgroundColor: Colores.blanco,
    },
    imgProducto: {
        width: '50%',
        height: '100%',
        borderRadius: 10,
    },
    info: {
        padding: 10,
        flex: 1,
    },
    Nombre: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colores.oscuro,
    },
    infoDes: {
        padding: 5,
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 10,
        marginTop: 10,
        color: Colores.principal,
    },
    boton: {
        backgroundColor: Colores.oscuro,
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
    },
    titulo: {
        color: Colores.blanco,
        textAlign: 'center',
    },
})
