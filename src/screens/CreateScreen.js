import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = () => {
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
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    margin: 20
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    marginBottom: 15
  },
  label: {
    fontSize: 20,
    marginBottom: 4
  }
});

export default CreateScreen;
