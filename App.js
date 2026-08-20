import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/tp2docuatrimestre/HomeScreen'
import NosotrosScreen from './src/tp2docuatrimestre/NosotrosScreen'
import ProductosScreen from './src/tp2docuatrimestre/ProductosScreen'
import ContactosScreen from './src/tp2docuatrimestre/ContactosScreen'

import Logo from './src/Media/Logo/Logo.png'
import Fondo from './src/Media/Fondo/Fondo.gif'

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
    return (
        <View style={styles.drawer}>
            <View style={styles.drawerHeader}>
                <Image source={Logo} style={styles.drawerLogo} resizeMode='contain' />
                <Text style={styles.drawerTitulo}>TecnoAir</Text>
            </View>
            <View style={styles.drawerItems}>
                <DrawerItem
                    label="Home"
                    active={props.state.index === 0}
                    onPress={() => props.navigation.navigate('Home')}
                />
                <DrawerItem
                    label="Nosotros"
                    active={props.state.index === 1}
                    onPress={() => props.navigation.navigate('Nosotros')}
                />
                <DrawerItem
                    label="Productos"
                    active={props.state.index === 2}
                    onPress={() => props.navigation.navigate('Productos')}
                />
                <DrawerItem
                    label="Contactos"
                    active={props.state.index === 3}
                    onPress={() => props.navigation.navigate('Contactos')}
                />
            </View>
        </View>
    );
}

function DrawerItem({ label, active, onPress }) {
    return (
        <Text
            onPress={onPress}
            style={[styles.drawerItem, active && styles.drawerItemActive]}
        >
            {label}
        </Text>
    );
}

export default function App() {
    const [Pagina, setPagina] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setPagina('Home')
        }, 6000)
        return () => clearTimeout(timer)
    }, [])

    if (Pagina !== 'Home') {
        return (
            <View style={styles.container}>
                <ImageBackground source={Fondo} resizeMode='cover' style={styles.imgFondo} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
                screenOptions={{
                    headerStyle: { backgroundColor: '#fff', elevation: 5 },
                    headerTintColor: '#000',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'TecnoAir - Inicio' }} />
                <Drawer.Screen name="Nosotros" component={NosotrosScreen} options={{ title: 'Nosotros' }} />
                <Drawer.Screen name="Productos" component={ProductosScreen} options={{ title: 'Productos' }} />
                <Drawer.Screen name="Contactos" component={ContactosScreen} options={{ title: 'Contactos' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgFondo: {
        width: '100%',
        height: '100%',
    },
    drawer: {
        flex: 1,
    },
    drawerHeader: {
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    drawerLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    drawerTitulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    drawerItems: {
        paddingTop: 10,
    },
    drawerItem: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    drawerItemActive: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
    },
});
