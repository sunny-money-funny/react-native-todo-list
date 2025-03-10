import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export default function HomeScreen() {
  const [working, setWorking] = useState(true);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState({
    work: [],
    study: [],
  });

  // 앱이 시작될 때 AsyncStorage에서 데이터를 불러옴
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem("todos");
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos)); // 불러온 데이터를 객체로 변환
        }
      } catch (error) {
        console.error("Failed to load todos from AsyncStorage", error);
      }
    };

    loadTodos();
  }, []);

  // todos 상태가 변경될 때마다 AsyncStorage에 저장
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos)); // 데이터를 문자열로 저장
      } catch (error) {
        console.error("Failed to save todos to AsyncStorage", error);
      }
    };

    saveTodos();
  }, [todos]); // todos가 변경될 때마다 실행

  const work = () => {
    setWorking(true); // 'work' 모드로 변경
  };

  const study = () => {
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
        <TouchableOpacity onPress={study}>
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
          placeholder={working ? "Add a work todo" : "Add a study to do"}
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
