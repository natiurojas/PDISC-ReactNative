import { StyleSheet, text, views } from "react-native/types_generated/index";
import React from 'react'

import Fondo from '../Media/Fondo/Tienda.png'
const Nosotros = () => {
    return (
        <scrollview style={styles.Nosotros}>
            <view style={styles.Info}
            <Image
            source={Fondo}
            resizeMode='cover'
            style={styles.Logo}
            />
            <text>somos una empresa dedicada a ofrecer los mejores productos a nuestros clientes.</text>
            // mision y vision de la empresa
            <text style={styles.titulo}>Misión</text>
            <text style={styles.texto}>Nuestra misión es ofrecer productos de alta calidad a precios competitivos, brindando una experiencia de compra excepcional a nuestros clientes y contribuyendo al desarrollo sostenible de nuestra comunidad.</text>
            <text style={styles.titulo}>Visión</text>
            <text style={styles.texto}>Nuestra visión es ser reconocidos como líderes en el mercado, destacando por nuestra innovación, compromiso con la calidad y responsabilidad social, generando valor para nuestros clientes, empleados y la sociedad en general.</text>
            </view>
        </scrollview>
    )
}