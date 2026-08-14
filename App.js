import { StyleSheet, View, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';

import Home from './src/screen/Home.js'

import Fondo from './src/Media/Fondo/Fondo.gif'

export default function App() {
  const [Pagina, setPagina] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setPagina('Home')
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  if (Pagina == 'Home') {
    return <Home />
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Fondo}
        resizeMode='cover'
        style={styles.imgFondo}
      />
    </View>
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
});
