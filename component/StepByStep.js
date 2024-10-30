import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';

import { copilot, walkthroughable, CopilotStep } from 'react-native-copilot';

const StepByStep = (props) => {
  const [secondStepActive, setSecondStepActive] = useState(true);

  useEffect(() => {
    props.copilotEvents.on('stepChange', handleStepChange);
    props.start();
  }, []);

  // useEffect(() => {
  //   props.copilotEvents.on('stepChange', handleStepChange);
  //   props.start();
  // }, [secondStepActive]);

  const handleStepChange = (step) => {
    console.log(`Current step is: ${step.name}`);
  };

  const WalkthroughableText = walkthroughable(Text);
  const WalkthroughableImage = walkthroughable(Image);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CopilotStep
          text="This is the heading with some style"
          order={1}
          name="firstUniqueKey">
          <WalkthroughableText style={styles.title}>
            Example of App Introduction Tour in React Native
          </WalkthroughableText>
        </CopilotStep>
        <CopilotStep 
          text="This is an image"
          order={3}
          name="thirdUniqueKey">
          <WalkthroughableImage
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
            }}
            style={styles.profilePhoto}
          />
        </CopilotStep>
        <View style={styles.activeSwitchContainer}>
          <CopilotStep
            active={secondStepActive}
            text="This is simple text without style"
            order={2}
            name="SecondUniqueKey">
            <WalkthroughableText>
              Default text without style which can be skipped
              after disabling the switch
            </WalkthroughableText>
          </CopilotStep>
          <View style={{ flexGrow: 1 }} />
          <Switch
            onValueChange={(secondStepActive) =>
              setSecondStepActive(secondStepActive)
            }
            value={secondStepActive}
          />
        </View>
        <View style={styles.middleView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.start()}>
            <Text style={styles.buttonText}>
              START APP INTRODUCTION TOUR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default copilot({
  animated: true,
  overlay: 'svg',
})(StepByStep);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  activeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});
