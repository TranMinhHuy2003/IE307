//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState } from 'react';
import { Keyboard, View, Button, Alert, StyleSheet, FlatList, Text } from 'react-native';
import Logo from './Logo';
import ToggleSwitch from './ToggleSwitch';
import FeedbackInput from './FeedbackInput';
import FeedbackItem from './FeedbackItem';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  // Xử lý bật tắt chế độ tối
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Xử lý bật tắt thông báo
  const toggleNotification = () => setIsNotificationEnabled(!isNotificationEnabled);

  // Xử lý khi nhấn nút gửi phản hồi
  const handleSendFeedback = () => {
    if (feedback.trim() === '') {
      Keyboard.dismiss();
      return;
    }

    const newFeedback = {
      id: Date.now().toString(),
      content: feedback,
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    setFeedback('');

    Keyboard.dismiss();

    if (isNotificationEnabled) {
      Alert.alert('Feedback Sent', 'Your feedback has been sent successfully!');
    }
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Logo isDarkMode={isDarkMode} />

      <ToggleSwitch
        label="Dark Mode"
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        isDarkMode={isDarkMode}
      />

      <ToggleSwitch
        label="Enable Notifications"
        value={isNotificationEnabled}
        onValueChange={toggleNotification}
        isDarkMode={isDarkMode}
      />

      <FeedbackInput
        feedback={feedback}
        setFeedback={setFeedback}
        isDarkMode={isDarkMode}
      />

      <Button title="Send Feedback" onPress={handleSendFeedback} />

      <View style={styles.faqContainer}>
        <Text style={[styles.faqTitle, isDarkMode ? styles.darkText : styles.lightText]}>
          Frequently Asked Questions
        </Text>
        <FlatList
          data={feedbackList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FeedbackItem item={item} isDarkMode={isDarkMode} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  faqContainer: {
    marginTop: 20,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  darkBackground: {
    backgroundColor: '#333',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});
