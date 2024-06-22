import { TextProps as RNTextProps } from 'react-native';

export enum TextVariant {
  TITLE_MEDIUM = 'title_medium',
  TITLE_SMALL = 'title_small',
  BODY_LARGE = 'body_large',
  BODY_SMALL = 'body_small',
  LABEL_LARGE = 'label_large',
  LABEL_SMALL = 'label_small',
}

export interface TextProps extends RNTextProps {
  color?: string;
  variant?:
    | TextVariant.TITLE_MEDIUM
    | TextVariant.TITLE_SMALL
    | TextVariant.BODY_LARGE
    | TextVariant.BODY_SMALL
    | TextVariant.LABEL_LARGE
    | TextVariant.LABEL_SMALL;
}
