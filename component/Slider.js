import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Dữ liệu cho các slide
const slides = [
  {
    key: '1',
    title: 'Chào mừng',
    text: 'Đây là ứng dụng tuyệt vời của bạn',
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Hướng dẫn sử dụng',
    text: 'Dễ dàng sử dụng và thân thiện',
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Bắt đầu ngay',
    text: 'Sẵn sàng để trải nghiệm',
    backgroundColor: '#22bcb5',
  },
];

// Màn hình slider
const IntroSlider = ({ navigation }) => {
  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // Khi slider hoàn tất, chuyển sang màn hình chính
    navigation.replace('MainScreen');
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>Tiếp</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>Xong</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>Bỏ qua</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      showSkipButton={true}
      onSkip={() => navigation.replace('MainScreen')}
    />
  );
};

// Màn hình chính sau khi hoàn tất slider
const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.mainText}>Hi, have a good day.</Text>
    </View>
  );
};

const Slider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroSlider">
        <Stack.Screen
          name="IntroSlider"
          component={IntroSlider}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Slider;