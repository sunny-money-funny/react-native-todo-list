import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

export default function HomeScreen() {
  const [working, setWorking] = useState(true);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState({
    work: [],
    study: [],
  });

  const work = () => {
    setWorking(true); // 'work' 모드로 변경
  };

  const travel = () => {
    setWorking(false); // 'study' 모드로 변경
  };

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos((prevTodos) => ({
        ...prevTodos,
        [working ? "work" : "study"]: [
          ...prevTodos[working ? "work" : "study"],
          todo,
        ],
      }));
      setTodo(""); // 할 일 추가 후 입력란 비우기
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={work}>
          <Text
            style={[
              styles.categoryButton,
              working ? styles.categoryButtonActive : null,
            ]}
          >
            WORK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={[
              styles.categoryButton,
              !working ? styles.categoryButtonActive : null,
            ]}
          >
            STUDY
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={working ? "Add a work todo" : "Add a study todo"}
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity onPress={addTodo}>
          <Text style={styles.addButton}>➕</Text>
        </TouchableOpacity>
      </View>

      <Text>{"\n"}</Text>
      <ScrollView>
        {todos[working ? "work" : "study"].map((item, index) => (
          <Text key={index} style={styles.todoItem}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
