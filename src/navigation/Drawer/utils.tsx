import { Image, StyleSheet } from 'react-native';

export const renderDrawerIcon = (routeName: string) => {
  const iconsByRouteName: Record<string, number> = {
    ['DailyTasks']: require('@/assets/icons/daily_tasks.png'),
    ['ImportantTasks']: require('@/assets/icons/important_tasks.png'),
    ['DoneTasks']: require('@/assets/icons/done_tasks.png'),
  };

  return <Image style={styles.drawerIcon} source={iconsByRouteName[routeName]} />;
};

const styles = StyleSheet.create({
  drawerIcon: {
    width: 20,
    height: 20,
  },
});
