import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList, SectionList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { workouts, fruits_vegetables } from './data';

export default function Bai_2() {
  const [selectedWorkouts, setSelectedWorkouts] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  const toggleSelectedWorkouts = (id) => {
    setSelectedWorkouts((preSelected) => 
      preSelected.includes(id) ? preSelected.filter((item) => item !== id) : [...preSelected, id]
    );
  };

  const toggleSelectedItems = (name) => {
    setSelectedItems((preSelected) => 
      preSelected.includes(name) ? preSelected.filter((item) => item !== name) : [...preSelected, name]
    );
  };

  const renderFlatListItems = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.type}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          selectedWorkouts.includes(item.id) ? styles.selectedButton : styles.deselectedButton,
        ]}
        onPress={() => toggleSelectedWorkouts(item.id)}
      >
        <Text style={styles.buttonText}>
          {selectedWorkouts.includes(item.id) ? 'DESELECT' : 'SELECT'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderSectionListItems = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          selectedItems.includes(item) ? styles.selectedButton : styles.deselectedButton,
        ]}
        onPress={() => toggleSelectedItems(item)}
      >
        <Text style={styles.buttonText}>
          {selectedItems.includes(item) ? 'DESELECT' : 'SELECT'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const combinedSelectedItems = [
    ...selectedWorkouts.map((id) => workouts.find((workout) => workout.id === id).type),
    ...selectedItems
  ];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>FlatList - Workouts</Text>
        <ImageBackground source={require('../assets/images/workout_background.png')} resizeMode='cover' style={styles.image}>
          <FlatList
            data={workouts}
            renderItem={renderFlatListItems}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        </ImageBackground>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>SectionList - Fruits & Vegetables</Text>
        <ImageBackground source={require('../assets/images/vegetables_background.jpg')} resizeMode='cover' style={styles.image}>
          <SectionList
            sections={fruits_vegetables.map((section) => ({
              data: section.data,
              url: section.url,
            }))}
            renderItem={renderSectionListItems}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
                <Image source={{ uri: section.url }} style={styles.sectionImage} />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
          />
        </ImageBackground>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.selectedHeader}>Selected Items:</Text>
        <Text style={styles.selectedText}>
          {combinedSelectedItems.join(', ')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    marginHorizontal: 20
  },
  heading: {
    color: "blue",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 30
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: "#f2f2f2",
    margin: 10,
    borderRadius: 10
  },
  image: {
    justifyContent: 'center',
    width: "100%",
    height: 300
  },
  title: {
    fontSize: 18,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#ef5350',
  },
  deselectedButton: {
    backgroundColor: '#66bb6a',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 20
  },
  selectedHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedText: {
    fontSize: 16,
    marginVertical: 5,
  },
});