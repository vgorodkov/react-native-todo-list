import { Image, TextInput, View } from 'react-native';
import { styles } from './styles';

export const SearchBar = () => {
  return (
    <View style={styles.inputContainer}>
      <Image source={require('@assets/icons/search.png')} style={styles.searchIcon} />
      <TextInput style={styles.input} placeholder="Search tasks" />
    </View>
  );
};
