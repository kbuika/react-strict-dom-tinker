import { StyleSheet } from "react-native";
import { html } from "react-strict-dom";

export default function App() {
  return (
    <html.div style={styles.container}>
      <html.div style={styles.titleDiv}>
        <html.h1 style={styles.title}>Welcome Back!</html.h1>
        <html.p>Enter your credentials below to login.</html.p>
      </html.div>
      <html.div style={styles.inputDiv}>
        <html.input type="text" placeholder="Username" style={styles.input} />
        <html.input
          type="password"
          placeholder="Password"
          style={styles.input}
        />
        <html.button style={styles.button}>Login</html.button>
      </html.div>
      <html.p style={styles.infoText}>
        By clicking login, you agree to our{" "}
        <html.a href="#" style={styles.infoTextLink}>
          Terms of Service
        </html.a>{" "}
        and{" "}
        <html.a href="#" style={styles.infoTextLink}>
          Privacy Policy
        </html.a>
      </html.p>
    </html.div>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleDiv: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputDiv: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 15,
    margin: 6,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: 300,
    height: 20,
    margin: 6,
    padding: 10,
    borderColor: "blue",
    borderRadius: 5,
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
  },
  infoText: {
    marginTop: 20,
    color: "gray",
    width: 300,
  },
  infoTextLink: {
    color: "blue",
  },
});
