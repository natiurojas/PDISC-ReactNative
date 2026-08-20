import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const ContactosScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Contacto</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>Dirección</Text>
                <Text style={styles.cardTexto}>Av. Corrientes 1234, Buenos Aires, Argentina</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>Teléfono</Text>
                <TouchableOpacity onPress={() => Linking.openURL('tel:+541112345678')}>
                    <Text style={styles.cardLink}>+54 11 1234-5678</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitulo}>Email</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:info@tecnoair.com')}>
                    <Text style={styles.cardLink}>info@tecnoair.com</Text>
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
    container: { flex: 1, padding: 20 },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    card: {
        backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15,
        elevation: 5, shadowColor: '#000', shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3, shadowRadius: 4,
    },
    cardTitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
    cardTexto: { fontSize: 16, color: '#333', lineHeight: 22 },
    cardLink: { fontSize: 16, color: '#1a73e8', textDecorationLine: 'underline', lineHeight: 22 },
})
