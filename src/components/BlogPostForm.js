import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input} />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    id: '',
    title: ''
  }
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

export default BlogPostForm;
