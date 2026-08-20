import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import IcoHome from '../Media/Footer/a.png'
import IcoProductos from '../Media/Footer/b.png'
import IcoNosotros from '../Media/Footer/c.png'
import Colores from '../lib/Colores'

const Footer = ({ setPaginas }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => setPaginas('Home')}
            >
                <Image
                    source={IcoHome}
                    resizeMode='cover'
                    style={styles.imgIcono}
                />
                <Text style={styles.textoIcono}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.boton}
                onPress={() => setPaginas('Productos')}
            >
                <Image
                    source={IcoProductos}
                    resizeMode='cover'
                    style={styles.imgIcono}
                />
                <Text style={styles.textoIcono}>Productos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.boton}
                onPress={() => setPaginas('Nosotros')}
            >
                <Image
                    source={IcoNosotros}
                    resizeMode='cover'
                    style={styles.imgIcono}
                />
                <Text style={styles.textoIcono}>Nosotros</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colores.principal,
        paddingVertical: 8,
    },
    imgIcono: {
        width: 50,
        height: 50,
    },
    boton: {
        marginHorizontal: 15,
        marginBottom: 5,
        alignItems: 'center',
    },
    textoIcono: {
        color: Colores.blanco,
        fontSize: 12,
        marginTop: 2,
    },
})
