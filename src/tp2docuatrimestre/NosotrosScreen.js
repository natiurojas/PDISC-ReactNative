import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Colores from '../lib/Colores'

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

            <View style={styles.card}>
                <Text style={styles.subtitulo}>Misión</Text>
                <Text style={styles.texto}>
                    Nuestra misión es ofrecer productos de alta calidad a precios competitivos, brindando una experiencia
                    de compra excepcional a nuestros clientes y contribuyendo al desarrollo sostenible de nuestra comunidad.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitulo}>Visión</Text>
                <Text style={styles.texto}>
                    Nuestra visión es ser reconocidos como líderes en el mercado, destacando por nuestra innovación,
                    compromiso con la calidad y responsabilidad social, generando valor para nuestros clientes,
                    empleados y la sociedad en general.
                </Text>
            </View>
        </ScrollView>
    )
}

export default NosotrosScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: Colores.fondo },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: Colores.oscuro },
    card: {
        backgroundColor: Colores.blanco, padding: 15, borderRadius: 10, marginBottom: 15,
        elevation: 5, shadowColor: Colores.oscuro, shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2, shadowRadius: 4,
    },
    subtitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: 8, color: Colores.secundario },
    texto: { fontSize: 16, lineHeight: 24, marginBottom: 10, textAlign: 'justify', color: Colores.principal },
})
