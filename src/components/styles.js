// styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
  },
  categoryButton: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    width: 100,
  },
  categoryButtonActive: {
    fontSize: 30,
    color: "#FF8989",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    width: 100,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: 300,
  },
  addButton: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 10,
  },
  todoItem: {
    backgroundColor: "#F8ED8C",
    fontSize: 15,
    padding: 20,
    borderRadius: 40,
    marginBottom: 10,
  },
});

export default styles;
