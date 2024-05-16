import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadTodos = createAsyncThunk('todo/loadTodos', async (_, { rejectWithValue }) => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
