import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Colores from '../lib/Colores'

const NosotrosScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Sobre Nosotros</Text>
            <Text style={styles.texto}>
                GameNova es una tienda dedicada a la venta de videojuegos, consolas y accesorios de gaming de alta calidad. Nuestro objetivo es ofrecer a nuestros clientes la mejor experiencia gamer, con productos innovadores, variedad de opciones y precios accesibles.
            </Text>
            <Text style={styles.texto}>
                Contamos con una amplia variedad de videojuegos, consolas, controles y accesorios gaming. Trabajamos con productos de las mejores marcas para garantizar calidad, innovación y una excelente experiencia para todos nuestros clientes.
            </Text>

            <View style={styles.card}>
                <Text style={styles.subtitulo}>Misión</Text>
                <Text style={styles.texto}>
                    Nuestra misión es ofrecer videojuegos, consolas y accesorios gaming de alta calidad a precios competitivos, brindando una experiencia de compra excepcional a nuestros clientes y creando una comunidad gamer donde la diversión, la innovación y la tecnología sean protagonistas.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitulo}>Visión</Text>
                <Text style={styles.texto}>
                    Nuestra visión es ser reconocidos como una de las principales tiendas gaming del mercado, destacándonos por nuestra innovación, variedad de productos y compromiso con la calidad, brindando una experiencia única y generando valor para nuestros clientes y la comunidad gamer.
                </Text>
            </View>
        </ScrollView>
    )
}

export default NosotrosScreen

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: Colores.fondo },
    titulo: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 15, 
        textAlign: 'center', 
        color: Colores.oscuro },
    card: {
        backgroundColor: Colores.blanco, 
        padding: 15, 
        borderRadius: 10, 
        marginBottom: 15,
        elevation: 5, 
        shadowColor: Colores.oscuro, 
        shadowOffset: { 
            width: 2, 
            height: 2 },
        shadowOpacity: 0.2, 
        shadowRadius: 4,
    },
    subtitulo: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 10, 
        marginBottom: 8, 
        color: Colores.secundario },
    texto: { 
        fontSize: 16, 
        lineHeight: 24, 
        marginBottom: 10, 
        textAlign: 'justify', 
        color: Colores.principal },
})
