// Importamos componentes básicos de React Native para crear la interfaz.
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'

// Importamos React para poder crear el componente de la pantalla.
import React from 'react'

// Importamos WebView para mostrar contenido web dentro de la aplicación.
// En este código está importado, aunque finalmente se utiliza un <iframe>.
import { WebView } from 'react-native-webview'

// Importamos los componentes Header y Footer creados previamente.
import Header from '../Components/Header'
import Footer from '../Components/Footer'

// Importamos los colores personalizados de GameNova.
import Colores from '../lib/Colores'

// Importamos las imágenes de los productos.
import Producto1 from '../Media/Productos/a.gif'
import Producto2 from '../Media/Productos/b.gif'
import Producto3 from '../Media/Productos/c.jpeg'

// Importamos el logo de GameNova.
import Logo from '../Media/Logo/Logo.png'


// Creamos un arreglo que contiene los 3 productos que se mostrarán
// en la sección "Últimos Productos".
const ultimos3 = [

    // Primer producto.
    {
        nombre: 'Kirby Arride (2003)',

        // Descripción que aparecerá en la tarjeta del producto.
        descripcion: 'Es un juego de carreras protagonizado por Kirby, desarrollado por HAL Laboratory y publicado por Nintendo favicon para Nintendo GameCube. Salió en Japón el 11 de julio de 2003 y después en el resto del mundo.',

        // Precio del producto.
        precio: '$49.990',

        // Imagen asociada al producto.
        imagen: Producto1
    },

    // Segundo producto.
    {
        nombre: 'Sonic 2',
        descripcion: 'Juego de plataformas desarrollado por Sega. Es la secuela directa de Sonic the Hedgehog y presenta nuevos niveles y personajes.',
        precio: '$59.990',
        imagen: Producto2
    },

    // Tercer producto.
    {
        nombre: 'Resident Evil 3',
        descripcion: 'Juego de survival horror desarrollado por Capcom. Es la secuela de Resident Evil 2 y presenta una narrativa más oscura y una jugabilidad mejorada.',
        precio: '$29.990',
        imagen: Producto3
    },
]


// Creamos una variable que contiene código HTML.
// Este código se utiliza para mostrar un mapa de OpenStreetMap.
const MAPA_HTML = `
<!DOCTYPE html>
<html>
<head>
    // Configuramos el tamaño de la página para adaptarse al dispositivo.
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0">

    // Insertamos un mapa mediante un iframe.
    <iframe
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0;width:100%;height:100%"

        // URL del mapa de OpenStreetMap.
        // bbox determina el área visible y marker indica la ubicación.
        src="https://www.openstreetmap.org/export/embed.html?bbox=-58.39,-34.62,-58.35,-34.60&layer=mapnik&marker=-34.61,-58.37"

        allowfullscreen>
    </iframe>

</body>
</html>
`


// Creamos el componente principal de la pantalla de inicio.
// navigation permite cambiar entre las diferentes pantallas de la aplicación.
const HomeScreen = ({ navigation }) => {

    // Retornamos la interfaz visual de la pantalla.
    return (

        // View principal que contiene toda la pantalla.
        <View style={styles.container}>

            // Mostramos el encabezado de la aplicación.
            <Header />


            // ScrollView permite desplazarse verticalmente por toda la pantalla.
            <ScrollView contentContainerStyle={styles.contenido}>

                // Contenedor del logo, nombre y eslogan.
                <View style={styles.logoContainer}>

                    // Mostramos el logo de GameNova.
                    <Image
                        source={Logo}
                        resizeMode='contain'
                        style={styles.logo}
                    />

                    // Nombre de la tienda.
                    <Text style={styles.titulo}>GameNova</Text>

                    // Eslogan de la tienda.
                    <Text style={styles.eslogan}>Nivelá tu colección</Text>

                </View>


                // Sección donde se muestra la ubicación.
                <View style={styles.seccion}>

                    // Título de la sección.
                    <Text style={styles.subtitulo}>Ubicación</Text>

                    // Contenedor del mapa.
                    <View style={styles.mapa}>

                        // Insertamos un iframe con OpenStreetMap.
                        // Muestra la ubicación de la tienda.
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-58.39,-34.62,-58.35,-34.60&layer=mapnik&marker=-34.61,-58.37"

                            // El mapa ocupa todo el espacio disponible.
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 0
                            }}
                        />

                    </View>
                </View>


                // Sección donde aparecen los últimos productos.
                <View style={styles.seccion}>

                    // Título de la sección.
                    <Text style={styles.subtitulo}>Últimos Productos</Text>


                    // Recorremos el arreglo ultimos3 utilizando map().
                    // Por cada producto se crea una tarjeta.
                    {ultimos3.map((producto, index) => (

                        // Contenedor de cada tarjeta.
                        // key permite identificar cada elemento de la lista.
                        <View key={index} style={styles.tarjeta}>

                            // Mostramos la imagen correspondiente al producto.
                            <Image
                                source={producto.imagen}
                                resizeMode='cover'
                                style={styles.imgProducto}
                            />


                            // Contenedor de la información del producto.
                            <View style={styles.info}>

                                // Mostramos el nombre del producto.
                                <Text style={styles.nombre}>
                                    {producto.nombre}
                                </Text>

                                // Mostramos la descripción.
                                <Text style={styles.descripcion}>
                                    {producto.descripcion}
                                </Text>

                                // Mostramos el precio.
                                <Text style={styles.precio}>
                                    {producto.precio}
                                </Text>


                                // Botón que permite agregar el producto al carrito.
                                <TouchableOpacity style={styles.boton}>

                                    // Texto que aparece dentro del botón.
                                    <Text style={styles.textoBoton}>
                                        Agregar al Carrito
                                    </Text>

                                </TouchableOpacity>

                            </View>
                        </View>
                    ))}

                </View>

            </ScrollView>


            // Mostramos el pie de página.
            // setPaginas recibe una página y utiliza navigation.navigate()
            // para cambiar a esa pantalla.
            <Footer
                setPaginas={(p) => navigation.navigate(p)}
            />

        </View>
    )
}


// Exportamos HomeScreen para poder utilizarlo en el sistema de navegación.
export default HomeScreen



// Creamos todos los estilos utilizados por los componentes de la pantalla.
const styles = StyleSheet.create({

    // Estilo del contenedor principal.
    container: {
        // flex: 1 hace que ocupe toda la pantalla.
        flex: 1,

        // Establece el color de fondo utilizando nuestra paleta.
        backgroundColor: Colores.fondo
    },


    // Estilo del contenido del ScrollView.
    contenido: {
        // Espacio horizontal interno.
        paddingHorizontal: 10,

        // Espacio inferior.
        paddingBottom: 20
    },


    // Contenedor del logo.
    logoContainer: {
        // Centra los elementos horizontalmente.
        alignItems: 'center',

        // Espacio vertical.
        paddingVertical: 20
    },


    // Estilo de la imagen del logo.
    logo: {
        // Ancho del logo.
        width: 120,

        // Alto del logo.
        height: 120,

        // Hace que los bordes sean redondeados.
        borderRadius: 60
    },


    // Estilo del nombre GameNova.
    titulo: {
        // Tamaño del texto.
        fontSize: 24,

        // Texto en negrita.
        fontWeight: 'bold',

        // Separación superior.
        marginTop: 10,

        // Color principal del texto.
        color: Colores.oscuro
    },


    // Estilo del eslogan.
    eslogan: {
        // Tamaño del texto.
        fontSize: 14,

        // Color secundario.
        color: Colores.secundario,

        // Separación superior.
        marginTop: 5
    },


    // Estilo general de las secciones.
    seccion: {
        // Separación inferior entre secciones.
        marginBottom: 15
    },


    // Estilo de los subtítulos.
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colores.oscuro
    },


    // Contenedor donde se encuentra el mapa.
    mapa: {
        // Ocupa todo el ancho disponible.
        width: '100%',

        // Altura del mapa.
        height: 250,

        // Bordes redondeados.
        borderRadius: 10,

        // Evita que el contenido del mapa sobresalga de los bordes.
        overflow: 'hidden'
    },


    // Estilo preparado para un WebView.
    // En este código no se está utilizando.
    webmap: {
        flex: 1
    },


    // Estilo de las tarjetas de productos.
    tarjeta: {

        // La tarjeta ocupa todo el ancho.
        width: '100%',

        // Altura de cada tarjeta.
        height: 280,

        // Bordes redondeados.
        borderRadius: 10,

        // Coloca la imagen y la información una al lado de la otra.
        flexDirection: 'row',

        // Espacio interno.
        padding: 10,

        // Elevación para crear sombra en Android.
        elevation: 10,

        // Color de la sombra.
        shadowColor: Colores.oscuro,

        // Desplazamiento de la sombra.
        shadowOffset: {
            width: 2,
            height: 2
        },

        // Transparencia de la sombra.
        shadowOpacity: 0.3,

        // Difuminado de la sombra.
        shadowRadius: 5,

        // Separación entre tarjetas.
        marginBottom: 10,

        // Color de fondo de la tarjeta.
        backgroundColor: Colores.blanco,
    },


    // Estilo de la imagen del producto.
    imgProducto: {
        // Ocupa la mitad del ancho de la tarjeta.
        width: '50%',

        // Ocupa toda la altura de la tarjeta.
        height: '100%',

        // Bordes redondeados.
        borderRadius: 10
    },


    // Contenedor de la información del producto.
    info: {
        // Espacio interno.
        padding: 10,

        // Ocupa el espacio restante de la tarjeta.
        flex: 1
    },


    // Nombre del producto.
    nombre: {
        fontSize: 20,
        fontWeight: 'bold',

        // Centra el nombre.
        textAlign: 'center',

        color: Colores.oscuro
    },


    // Descripción del producto.
    descripcion: {
        padding: 5,
        fontSize: 16,

        // Alinea la descripción a la izquierda.
        textAlign: 'left',

        marginBottom: 10,
        marginTop: 10,

        color: Colores.principal
    },


    // Precio del producto.
    precio: {
        fontSize: 18,
        fontWeight: 'bold',

        // Centra el precio.
        textAlign: 'center',

        marginBottom: 5,

        color: Colores.secundario
    },


    // Estilo del botón.
    boton: {
        // Color de fondo del botón.
        backgroundColor: Colores.oscuro,

        // Espacio interno.
        padding: 10,

        // Bordes redondeados.
        borderRadius: 15,

        // Separación superior.
        marginTop: 10
    },


    // Texto del botón.
    textoBoton: {
        // Color blanco para que contraste con el fondo.
        color: Colores.blanco,

        // Centra el texto.
        textAlign: 'center'
    },

})