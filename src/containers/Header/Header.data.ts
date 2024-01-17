import { Paths } from '@/routers/constants';

export const dataHeaderMenu = (data: any) => [
  {
    id: 'home',
    title: data?.trans?.header?.home,
    link: Paths.Home,
    activePaths: [Paths.Home],
  },
  {
    id: 'faq',
    title: data?.trans?.header?.faq,
    link: '',
    activePaths: [],
  },
  {
    id: 'support',
    title: data?.trans?.header?.support,
    link: '',
    activePaths: [],
  },
];

export const dataHeaderChildPageMenu = (data: any) => [
  {
    id: 'profile-detail',
    title: data?.trans?.header?.profile,
    activePaths: [Paths.ProfileDetail(data?.id)],
    backPath: Paths.Home,
  },
  {
    id: 'login',
    title: data?.trans?.header?.login,
    activePaths: [Paths.Login],
    backPath: Paths.Home,
  },
  {
    id: 'sign-up',
    title: data?.trans?.header?.signup,
    activePaths: [Paths.SignUp],
    backPath: Paths.Home,
  },
  {
    id: 'my-profile-photo-video',
    title: data?.trans?.header?.profile,
    activePaths: [Paths.MyPhotoVideo],
    backPath: Paths.Home,
  },
];
