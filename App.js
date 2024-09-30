// Example of Animation Splash Screen with Zoom Effect
// https://aboutreact.com/animation-splash-screen-with-zoom-effect/

// Import React
import React, {useEffect} from 'react';
// Import required components
import {View, Text, StyleSheet, Image, Animated} from 'react-native';

const App = () => {
  const width = new Animated.Value(0);
  const height = new Animated.Value(600);
  const SITE_BANNER_VERTICAL_IMAGE =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/site_banner_vertical.png';
  const SAMPLE_APP_LOGO =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png';

  useEffect(() => {
    Animated.timing(
      width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 650, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
    Animated.timing(
      height, // The animated value to drive
      {
        toValue: 750, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: SITE_BANNER_VERTICAL_IMAGE}}
        style={{
          width: width,
          height: height,
          position: 'absolute',
        }}
      />
      <View style={styles.logoContainer}>
        <Image source={{uri: SAMPLE_APP_LOGO}} style={styles.logo} />
        <Text style={styles.textStyle}>
          Example of Animation Splash Screen with Zoom Effect
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#2F7ECC',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 48,
    backgroundColor: 'rgba(11, 56, 82, 0.3)',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});