import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Colores from '../lib/Colores'

// Función flecha
const ContactosScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Contacto</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>Dirección</Text>
                <Text style={styles.cardTexto}>Av. Alicia Moreau 1234, Buenos Aires, Argentina</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>Teléfono</Text>
                <TouchableOpacity onPress={() => Linking.openURL('tel:+541112345678')}>
                    <Text style={styles.cardLink}>+54 11 1234-5678</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>Email</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:info@gamenova.com')}>
                    <Text style={styles.cardLink}>info@gamenova.com</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>Horario</Text>
                <Text style={styles.cardTexto}>Lunes a Viernes: 9:00 - 18:00</Text>
                <Text style={styles.cardTexto}>Sábados: 10:00 - 14:00</Text>
            </View>
        </ScrollView>
    )
}

export default ContactosScreen

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: Colores.fondo },
    titulo: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 20, 
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
    cardTitulo: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 8, 
        color: Colores.secundario },
    cardTexto: { 
        fontSize: 16, 
        color: Colores.principal, 
        lineHeight: 22 },
    cardLink: { 
        fontSize: 16, 
        color: Colores.rosa, 
        textDecorationLine: 'underline', 
        lineHeight: 22 },
})
