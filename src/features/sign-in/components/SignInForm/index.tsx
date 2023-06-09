import { classNamesFunc } from 'classnames-generics';

import styles from './SignInForm.module.scss';
import { useForm } from '@mantine/form';
import { Box, Button, Checkbox, Group, TextInput } from '@mantine/core';

const classNames = classNamesFunc<keyof typeof styles>();

type SignInFormProps = {
  onSubmit: (values: any) => void;
};

export default function SignInForm({ onSubmit }: SignInFormProps) {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 8 ? null : 'Min length is 8 characters',
    },
  });
  return (
    <div className={classNames(styles['signIn-Form'])}>
      <Box maw={300} mx='auto'>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            withAsterisk
            label='Email'
            placeholder='your@email.com'
            {...form.getInputProps('email')}
          />

          <TextInput
            withAsterisk
            label='Password'
            placeholder='*********'
            {...form.getInputProps('password')}
          />

          <Checkbox
            mt='md'
            label='I agree to sell my privacy'
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <Group position='right' mt='md'>
            <Button type='submit'>Submit</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}
