import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colores from '../lib/Colores'

import Producto1 from '../Media/Productos/a.gif'
import Producto2 from '../Media/Productos/b.gif'
import Producto3 from '../Media/Productos/c.jpeg'

const productos = [
    { nombre: 'Auricular 01', descripcion: 'El mejor Auricular del Mercado. Sonido envolvente, excelente calidad y el mejor precio', precio: '$49.990', imagen: Producto1 },
    { nombre: 'Auricular 02', descripcion: 'Sonido de alta fidelidad con cancelación de ruido activa y batería de larga duración', precio: '$69.990', imagen: Producto2 },
    { nombre: 'Auricular 03', descripcion: 'Inalámbrico, liviano y cómodo. Ideal para el día a día y los viajes', precio: '$39.990', imagen: Producto3 },
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
    container: { flex: 1, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: Colores.fondo },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: Colores.oscuro },
    tarjeta: {
        width: '100%', height: 280, borderRadius: 10, flexDirection: 'row', padding: 10,
        elevation: 10, shadowColor: Colores.oscuro, shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3, shadowRadius: 5, marginBottom: 10, backgroundColor: Colores.blanco,
    },
    imgProducto: { width: '50%', height: '100%', borderRadius: 10 },
    info: { padding: 10, flex: 1 },
    nombre: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: Colores.oscuro },
    descripcion: { padding: 5, fontSize: 16, textAlign: 'left', marginBottom: 10, marginTop: 10, color: Colores.principal },
    precio: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 5, color: Colores.secundario },
    boton: { backgroundColor: Colores.oscuro, padding: 10, borderRadius: 15, marginTop: 10 },
    textoBoton: { color: Colores.blanco, textAlign: 'center' },
})
