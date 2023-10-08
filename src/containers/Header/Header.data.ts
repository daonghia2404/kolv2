import { Paths } from '@/routers/constants';

export const dataHeaderMenu = [
  {
    id: 'home',
    title: 'Home',
    link: Paths.Home,
    activePaths: [Paths.Home],
  },
  {
    id: 'faq',
    title: 'FAQ',
    link: '',
    activePaths: [],
  },
  {
    id: 'support',
    title: 'Support',
    link: '',
    activePaths: [],
  },
];

export const dataHeaderChildPageMenu = (data: any) => [
  {
    id: 'profile-detail',
    title: 'Profile',
    activePaths: [Paths.ProfileDetail(data?.id)],
    backPath: Paths.Home,
  },
  {
    id: 'login',
    title: 'Login',
    activePaths: [Paths.Login],
    backPath: Paths.Home,
  },
  {
    id: 'sign-up',
    title: 'Sign Up',
    activePaths: [Paths.SignUp],
    backPath: Paths.Home,
  },
];
