import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const InputSymptoms = ({ navigation }) => {
  const [symptoms, setSymptoms] = useState('');

  const handleNext = () => {
    if (!symptoms) {
      alert("User input is required");
      return;
    }
    axios.post('http://localhost:3000/storeInput', {
        input: symptoms
    })
    .then(response => {
        // Handle the response (e.g., confirmation message)
        alert(response.data.message || 'Input stored successfully!');
        // Navigate after successful API call
        navigation.navigate('MedicationRecommendations', {
          symptoms
        });
    })
    .catch(error => {
        // Handle the error (e.g., show error message to the user)
        alert(error.response?.data || 'An error occurred.');
    });
  };
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>What symptoms do you have, tell us how you're feeling today?</Text>
      <TextInput 
        value={symptoms}
        onChangeText={setSymptoms}  // This updates the symptoms state when user types
        placeholder="E.g., I have a cough, fever..."
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

export default InputSymptoms;
