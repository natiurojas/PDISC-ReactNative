import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Tienda from '../Media/Fondo/Tienda.png'
import Producto1 from '../Media/Productos/a.jpg'
import Producto2 from '../Media/Productos/b.png'
import Producto3 from '../Media/Productos/c.png'
import Producto4 from '../Media/Productos/d.png'
import Producto5 from '../Media/Productos/e.png'

const productos = [
    {
        nombre: 'Auricular 01',
        descripcion: 'El mejor Auricular del Mercado. Sonido envolvente, excelente calidad y el mejor precio',
        precio: '$49.990',
        imagen: Producto1,
    },
    {
        nombre: 'Auricular 02',
        descripcion: 'Sonido de alta fidelidad con cancelación de ruido activa y batería de larga duración',
        precio: '$69.990',
        imagen: Producto2,
    },
    {
        nombre: 'Auricular 03',
        descripcion: 'Inalámbrico, liviano y cómodo. Ideal para el día a día y los viajes',
        precio: '$39.990',
        imagen: Producto3,
    },
    {
        nombre: 'Auricular 04',
        descripcion: 'Graves potentes y agudos claros. Diseño moderno con materiales premium',
        precio: '$59.990',
        imagen: Producto4,
    },
    {
        nombre: 'Auricular 05',
        descripcion: 'Máxima portabilidad con estuche de carga incluido y conectividad Bluetooth 5.3',
        precio: '$29.990',
        imagen: Producto5,
    },
]

const Productos = () => {
    return (
        <ScrollView contentContainerStyle={styles.Container}>
            <View style={styles.banner}>
                <Image
                    source={Tienda}
                    resizeMode='cover'
                    style={styles.imgTienda}
                />
                <Text style={styles.tituloBanner}>Nuestros Productos</Text>
            </View>

            {productos.map((producto, index) => (
                <View key={index} style={styles.Tarjetas}>
                    <Image
                        source={producto.imagen}
                        resizeMode='cover'
                        style={styles.imgProducto}
                    />
                    <View style={styles.info}>
                        <Text style={styles.Nombre}>{producto.nombre}</Text>
                        <Text style={styles.infoDes}>{producto.descripcion}</Text>
                        <Text style={styles.precio}>{producto.precio}</Text>
                        <TouchableOpacity style={styles.boton}>
                            <Text style={styles.titulo}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

export default Productos

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    banner: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    imgTienda: {
        width: '100%',
        height: '100%',
    },
    tituloBanner: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    Tarjetas: {
        width: '98%',
        height: 280,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginBottom: 10,
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
    },
    infoDes: {
        padding: 5,
        fontSize: 16,
        textAlign: 'left',
        marginBottom: 10,
        marginTop: 10,
    },
    precio: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 5,
    },
    boton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
    },
    titulo: {
        color: '#fff',
        textAlign: 'center',
    },
})
