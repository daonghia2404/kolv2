import { Paths } from '@/routers/constants';

export const dataSideBarMenu = () => [
  {
    key: '1',
    title: 'My Account',
    link: Paths.MyAccount,
    activePaths: [Paths.MyAccount],
  },
  {
    key: '2',
    title: 'My Listing',
    link: Paths.MyListing,
    activePaths: [Paths.MyListing],
  },
  {
    key: '3',
    title: 'Top Ad Placements',
    link: '#',
    activePaths: [],
  },
  {
    key: '4',
    title: 'Create Listing',
    link: Paths.CreateListing,
    activePaths: [Paths.CreateListing],
  },
  {
    key: '5',
    title: 'Photo/Videos',
    link: Paths.MyPhotoVideo,
    activePaths: [Paths.MyPhotoVideo],
  },
  {
    key: '6',
    title: 'Payment History',
    link: Paths.MyPaymentHistories,
    activePaths: [Paths.MyPaymentHistories],
  },
  {
    key: '7',
    title: 'Personal Informations',
    link: '#',
    activePaths: [],
  },
  {
    key: '8',
    title: 'Setting',
    link: Paths.MySettings,
    activePaths: [Paths.MySettings],
  },
];
