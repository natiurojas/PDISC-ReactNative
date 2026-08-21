import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Colores from '../lib/Colores'
import Producto1 from '../Media/Productos/a.gif'
import Producto2 from '../Media/Productos/b.gif'
import Producto3 from '../Media/Productos/c.jpeg'
import Logo from '../Media/Logo/Logo.png'

const ultimos3 = [
    { nombre: 'Kirby Arride (2003)', descripcion: 'Es un juego de carreras protagonizado por Kirby, desarrollado por HAL Laboratory y publicado por Nintendo favicon para Nintendo GameCube. Salió en Japón el 11 de julio de 2003 y después en el resto del mundo.', precio: '$49.990', imagen: Producto1 },
    { nombre: 'Sonic 2', descripcion: 'Juego de plataformas desarrollado por Sega. Es la secuela directa de Sonic the Hedgehog y presenta nuevos niveles y personajes.', precio: '$59.990', imagen: Producto2 },
    { nombre: 'Resident Evil 3', descripcion: 'Juego de survival horror desarrollado por Capcom. Es la secuela de Resident Evil 2 y presenta una narrativa más oscura y una jugabilidad mejorada.', precio: '$29.990', imagen: Producto3 },
]

const MAPA_HTML = `
<!DOCTYPE html>
<html>
<head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0">
  <iframe
    width="100%" height="100%" frameborder="0" style="border:0;width:100%;height:100%"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-58.39,-34.62,-58.35,-34.60&layer=mapnik&marker=-34.61,-58.37"
    allowfullscreen>
  </iframe>
</body>
</html>
`

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.contenido}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} resizeMode='contain' style={styles.logo} />
                    <Text style={styles.titulo}>GameNova</Text>
                    <Text style={styles.eslogan}>Nivelá tu colección</Text>
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.subtitulo}>Ubicación</Text>
                    <View style={styles.mapa}>
                        <WebView source={{ html: MAPA_HTML }} style={styles.webmap} />
                    </View>
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.subtitulo}>Últimos Productos</Text>
                    {ultimos3.map((producto, index) => (
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
                </View>
            </ScrollView>
            <Footer setPaginas={(p) => navigation.navigate(p)} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colores.fondo },
    contenido: { paddingHorizontal: 10, paddingBottom: 20 },
    logoContainer: { alignItems: 'center', paddingVertical: 20 },
    logo: { width: 120, height: 120, borderRadius: 60 },
    titulo: { fontSize: 24, fontWeight: 'bold', marginTop: 10, color: Colores.oscuro },
    eslogan: { fontSize: 14, color: Colores.secundario, marginTop: 5 },
    seccion: { marginBottom: 15 },
    subtitulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: Colores.oscuro },
    mapa: { width: '100%', height: 250, borderRadius: 10, overflow: 'hidden' },
    webmap: { flex: 1 },
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
