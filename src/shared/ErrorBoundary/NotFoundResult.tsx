import { Result } from 'shared/ErrorBoundary/Result.tsx';
import { IconAlertTriangle } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const NotFoundResult = () => {
  const navigate = useNavigate();
  return (
    <Result
      image={<IconAlertTriangle size={48} strokeWidth={2} color={'orange'} />}
      heading={"Page doesn't exist"}
      subheading={
        'Probably you got here by accident. If you think there is something wrong on our side, please contact us!'
      }
    >
      <Button onClick={() => navigate('/')} color='orange'>
        Go home
      </Button>
    </Result>
  );
};
