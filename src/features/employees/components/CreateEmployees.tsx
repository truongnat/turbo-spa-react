import { Box, Button, Group, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import {
  CreateEmployeesRequest,
  employeesService,
} from '../services/employeesService.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';
import { useForm } from '@mantine/form';

type CreateEmployeesProps = {
  onSuccess: () => void;
};

export const CreateEmployees = ({ onSuccess }: CreateEmployeesProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: createApi } = useRequest(
    (payload) => employeesService.createEmployees(payload),
    { immediate: false },
  );

  const createForm = useForm<CreateEmployeesRequest>({
    initialValues: {
      name: '',
    },
    validate: {
      name: (value) => (value.length ? null : 'name not empty'),
    },
  });

  const handleCreate = (e: any) => {
    createForm.onSubmit((values) => {
      createApi(values)
        .then(() => {
          notifications.show({
            message: 'Create success!',
            color: 'green',
          });
          onSuccess();
        })
        .catch((error) => {
          console.log('error', error);
          notifications.show({
            message: get(
              error,
              'message',
              'Something went wrong, please try again later!',
            ),
            color: 'red',
          });
        })
        .finally(() => {
          close();
          createForm.reset();
        });
    })(e);
  };

  return (
    <Box>
      <Button fullWidth leftIcon={<IconPlus />} onClick={open}>
        Create
      </Button>
      <ExtendModal
        opened={isOpen}
        onClose={() => {
          close();
          createForm.reset();
        }}
        title={'Create new Employees'}
      >
        <Box mx='auto' w={'100%'}>
          <form onSubmit={handleCreate}>
            <TextInput
              withAsterisk
              label='Name'
              placeholder='enter name'
              {...createForm.getInputProps('name')}
            />
            <Group position='right' mt='md'>
              <Button disabled={loading} type='submit'>
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </ExtendModal>
    </Box>
  );
};
