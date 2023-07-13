import { Outlet } from 'react-router-dom';
import {
  ActionIcon,
  AppShell,
  Group,
  Header,
  Navbar,
  useMantineColorScheme,
} from '@mantine/core';
import { Logo, MainLink, User } from 'shared/components';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export function AuthLayout() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding='md'
      fixed={false}
      navbar={
        <Navbar width={{ base: 300 }} p='xs'>
          <Navbar.Section grow mt='xs'>
            <MainLink />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position='apart'>
            <Logo colorScheme={colorScheme} />
            <ActionIcon
              variant='default'
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === 'dark' ? (
                <IconSun size='1rem' />
              ) : (
                <IconMoonStars size='1rem' />
              )}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
