import { routes } from "./router";

export const appRoutes = [
  routes('/', 'WelcomePage', { name: 'welcome' }),
  routes('/about', 'AboutPage'),
];
