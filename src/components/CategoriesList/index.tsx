import React from 'react';
import { FlatList } from 'react-native';

import { useAppSelector } from '@/store/hooks';

import { renderCategories } from './renderCategories';
import { styles } from './styles';

export const CategoriesList = () => {
  const categories = useAppSelector((state) => state.category.categories);

  return (
    <FlatList
      data={categories}
      renderItem={renderCategories(categories.length)}
      numColumns={3}
      columnWrapperStyle={styles.categoriesListWrapper}
    />
  );
};
