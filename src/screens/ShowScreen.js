import React, { useContext } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ navigation, props }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={ () =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
        style={styles.headerButton}
      >
        <FontAwesome name="pencil" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    marginVertical: 20,
    marginHorizontal: 30
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  content: {
    fontSize: 18,
    marginBottom: 15
  },
  headerButton: {
    marginRight: 20
  },
  icon: {
    fontSize: 24
  }
});

export default ShowScreen;
