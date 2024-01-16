import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import FeedScreen from "./src/screens/FeedScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";

export default function App() {
 
  return (
    <View style={styles.container}>
         <StatusBar style="auto" />
      {/* Post component */}
      {/* <FeedScreen /> */}
      <CreatePostScreen/>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
