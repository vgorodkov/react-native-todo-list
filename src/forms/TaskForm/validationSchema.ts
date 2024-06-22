import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(15, 'Title must be max 15 characters'),
  description: yup
    .string()
    .required('Description is required')
    .min(3, 'Description must be at least 3 characters')
    .max(20, 'Description must be max 20 characters'),
  timeRange: yup.object().shape({
    from: yup.date().required('From date is required'),
    to: yup
      .date()
      .required('To date is required')
      .min(yup.ref('from'), 'To date cannot be earlier than from date'),
  }),
  subtask: yup.string().max(15, 'Subtask Title must be max 15 characters'),
});
