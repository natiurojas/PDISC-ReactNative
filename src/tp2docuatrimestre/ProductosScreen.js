import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Producto1 from '../Media/Productos/a.jpg'
import Producto2 from '../Media/Productos/b.png'
import Producto3 from '../Media/Productos/c.png'
import Producto4 from '../Media/Productos/d.png'
import Producto5 from '../Media/Productos/e.png'

const productos = [
    { nombre: 'Auricular 01', descripcion: 'El mejor Auricular del Mercado. Sonido envolvente, excelente calidad y el mejor precio', precio: '$49.990', imagen: Producto1 },
    { nombre: 'Auricular 02', descripcion: 'Sonido de alta fidelidad con cancelación de ruido activa y batería de larga duración', precio: '$69.990', imagen: Producto2 },
    { nombre: 'Auricular 03', descripcion: 'Inalámbrico, liviano y cómodo. Ideal para el día a día y los viajes', precio: '$39.990', imagen: Producto3 },
    { nombre: 'Auricular 04', descripcion: 'Graves potentes y agudos claros. Diseño moderno con materiales premium', precio: '$59.990', imagen: Producto4 },
    { nombre: 'Auricular 05', descripcion: 'Máxima portabilidad con estuche de carga incluido y conectividad Bluetooth 5.3', precio: '$29.990', imagen: Producto5 },
]

const ProductosScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Nuestros Productos</Text>
            {productos.map((producto, index) => (
                <View key={index} style={styles.tarjeta}>
                    <Image source={producto.imagen} resizeMode='cover' style={styles.imgProducto} />
                    <View style={styles.info}>
                        <Text style={styles.nombre}>{producto.nombre}</Text>
                        <Text style={styles.descripcion}>{producto.descripcion}</Text>
                        <Text style={styles.precio}>{producto.precio}</Text>
                        <TouchableOpacity style={styles.boton}>
                            <Text style={styles.textoBoton}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

export default ProductosScreen

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 10, paddingVertical: 10 },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
    tarjeta: {
        width: '100%', height: 280, borderRadius: 10, flexDirection: 'row', padding: 10,
        elevation: 10, shadowColor: '#000', shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5, shadowRadius: 5, marginBottom: 10, backgroundColor: '#fff',
    },
    imgProducto: { width: '50%', height: '100%', borderRadius: 10 },
    info: { padding: 10, flex: 1 },
    nombre: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
    descripcion: { padding: 5, fontSize: 16, textAlign: 'left', marginBottom: 10, marginTop: 10 },
    precio: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
    boton: { backgroundColor: '#000', padding: 10, borderRadius: 15, marginTop: 10 },
    textoBoton: { color: '#fff', textAlign: 'center' },
})
