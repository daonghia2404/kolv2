export const LayoutPaths = {};

export const ModulePaths = {};

export const Paths = {
  Home: '/',
  Login: '/login',
  SignUp: '/sign-up',
  ProfileDetail: (id?: string): string => `/profile/${id || ':id'}`,
};
