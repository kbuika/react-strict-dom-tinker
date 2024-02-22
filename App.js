import { StyleSheet } from "react-native";
import { html } from "react-strict-dom";

export default function App() {
  return (
    <html.div style={styles.container}>
      <html.h1>Hello you!</html.h1>
      {/* <StatusBar style="auto" /> */}
    </html.div>
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
