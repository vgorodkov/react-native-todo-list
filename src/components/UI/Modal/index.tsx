import { ReactNode } from 'react';
import { Modal as RNModal, Pressable, View } from 'react-native';

import { styles } from './styles';

export const Modal = ({
  isModalVisible,
  closeModal,
  children,
}: {
  isModalVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
}) => {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={closeModal}
      statusBarTranslucent
    >
      <Pressable
        onPress={(e) => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}
        style={styles.modalBackdrop}
      >
        <View style={styles.modalContent}>{children}</View>
      </Pressable>
    </RNModal>
  );
};
