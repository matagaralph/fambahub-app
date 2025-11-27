import Navbar from '@/components/navbar';
import { ThemeProvider } from '@primer/react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <ThemeProvider colorMode='light'>
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  );
}
