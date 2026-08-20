import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const NosotrosScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Sobre Nosotros</Text>
            <Text style={styles.texto}>
                TecnoAir es una empresa dedicada a la venta de auriculares y accesorios de audio de alta calidad.
                Nuestro objetivo es ofrecer a nuestros clientes la mejor experiencia sonora con productos innovadores
                y a los mejores precios del mercado.
            </Text>
            <Text style={styles.texto}>
                Contamos con una amplia variedad de auriculares inalámbricos, con cancelación de ruido,
                deportivos y profesionales. Trabajamos con las mejores marcas para garantizar la satisfacción
                de nuestros clientes.
            </Text>
            <Text style={styles.subtitulo}>Nuestra Misión</Text>
            <Text style={styles.texto}>
                brindar soluciones de audio accesibles y de alta calidad para todos los amantes de la música.
            </Text>
            <Text style={styles.subtitulo}>Nuestra Visión</Text>
            <Text style={styles.texto}>
                Ser la tienda líder en auriculares y accesorios de audio en la región.
            </Text>
        </ScrollView>
    )
}

export default NosotrosScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
    subtitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 8 },
    texto: { fontSize: 16, lineHeight: 24, marginBottom: 10, textAlign: 'justify' },
})
