import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import IcoHome from '../Media/Footer/a.png'
import IcoProductos from '../Media/Footer/b.png'
import IcoNosotros from '../Media/Footer/c.png'

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
                <Text>Home</Text>
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
                <Text>Productos</Text>
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
                <Text>Nosotros</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imgIcono: {
        width: 65,
        height: 65,
    },
    boton: {
        marginLeft: 10,
        marginBottom: 10,
    },
})
