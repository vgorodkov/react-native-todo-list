import { Image, Pressable } from 'react-native';
import { styles } from './styles';

export const TaskAddCategoryCard = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable style={styles.addTaskCategory} onPress={onPress}>
      <Image style={styles.addTaskCategoryImg} source={require('@/assets/icons/plus.png')} />
    </Pressable>
  );
};
