import { TextProps as RNTextProps } from 'react-native';

export enum TextVariant {
  title_medium = 'title_medium',
  title_small = 'title_small',
  body_large = 'body_large',
  body_small = 'body_small',
  label_large = 'label_large',
  label_small = 'label_small',
}

export interface TextProps extends RNTextProps {
  color?: string;
  variant?:
    | TextVariant.title_medium
    | TextVariant.title_small
    | TextVariant.body_large
    | TextVariant.body_small
    | TextVariant.label_large
    | TextVariant.label_small;
}
