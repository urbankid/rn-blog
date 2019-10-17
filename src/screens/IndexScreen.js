import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => deleteBlogPost(item.id)}
                  style={styles.deleteButton}
                >
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.setParams({ title: "urbankid" });
          navigation.navigate("Create");
        }}
        style={styles.headerButton}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  deleteButton: {
    marginRight: -7
  },
  headerButton: {
    marginRight: 20
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
