import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input} />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    marginVertical: 20,
    marginHorizontal: 30
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 5,
    marginBottom: 15
  },
  label: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default CreateScreen;
