import React, { useState } from 'react';
import { View } from 'react-native';

import { CategoryColor } from '@/components/CategoryColor';
import { Button, Input, Text } from '@/components/UI';
import { Modal } from '@/components/UI/Modal';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppDispatch } from '@/store/hooks';
import { addCategory } from '@/store/slices/categorySlice';

import { avaibleColors, CATEGORY_TITLE_LIMIT } from './constants';
import { styles } from './styles';
import { AddCategoryModalScreenProps } from './types';

export const AddCategoryModal = ({ navigation }: AddCategoryModalScreenProps) => {
  const dispatch = useAppDispatch();

  const [categoryTitle, setCategoryTitle] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const isInputValid = !!selectedColor && categoryTitle.length > 0;

  const closeModal = () => {
    navigation.goBack();
  };

  const onAddCategoryBtnPress = () => {
    if (selectedColor) {
      const newCategory = {
        title: categoryTitle,
        backgroundColor: selectedColor,
        img: require('@/assets/icons/school.png'),
      };
      dispatch(addCategory(newCategory));
      closeModal();
    }
  };

  return (
    <Modal onBackdropPress={closeModal} style={styles.modalContainer}>
      <Input
        testID="Main.CategoryInput"
        value={categoryTitle}
        onChangeText={setCategoryTitle}
        maxLength={CATEGORY_TITLE_LIMIT}
        placeholder="Write category name"
        label="Category name"
      />
      <Text color={colors.primaryText} variant={TextVariant.LABEL_LARGE}>
        Avaible colors:
      </Text>
      <View style={styles.avaibleColorsContainer}>
        {avaibleColors.map((color, index) => (
          <CategoryColor
            index={index}
            selectColor={setSelectedColor}
            isSelected={color === selectedColor}
            key={color}
            color={color}
          />
        ))}
      </View>
      <View style={styles.footerBtnContainer}>
        <Button variant="text" onPress={closeModal}>
          Close
        </Button>
        <Button
          testID="Main.CategoryAddBtn"
          variant="text"
          disabled={!isInputValid}
          onPress={onAddCategoryBtnPress}
        >
          Add
        </Button>
      </View>
    </Modal>
  );
};
