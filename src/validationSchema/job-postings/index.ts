import * as yup from 'yup';

export const jobPostingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  technical_requirements: yup.string(),
  hr_manager_id: yup.string().nullable(),
  engineering_manager_id: yup.string().nullable(),
  marketing_manager_id: yup.string().nullable(),
});
