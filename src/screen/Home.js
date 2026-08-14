import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Tarjetas from '../Components/Tarjetas'
import Footer from '../Components/Footer'
import Productos from './Productos'

const Home = () => {
    const [Paginas, setPaginas] = useState('Home')
    return (
        <View style={styles.Container}>
            <Header />
            <ScrollView contentContainerStyle={styles.Container}>
                {Paginas == 'Home' && (
                    <Tarjetas />
                )}
                {Paginas == 'Productos' && (
                    <Productos />
                )}

                <Footer setPaginas={setPaginas} />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
})
