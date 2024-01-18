export const LayoutPaths = {};

export const ModulePaths = {
  MyProfile: '/my-profile'
};

export const Paths = {
  Home: '/',
  Login: '/login',
  SignUp: '/sign-up',
  ProfileDetail: (id?: string): string => `/profile/${id || ':id'}`,

  MyPhotoVideo: `${ModulePaths.MyProfile}/photo-video`,
  MyPaymentHistories: `${ModulePaths.MyProfile}/payment-histories`,
  MySettings: `${ModulePaths.MyProfile}/settings`,
  MyListing: `${ModulePaths.MyProfile}/listing`,
  MyAccount: `${ModulePaths.MyProfile}/account`,
  BuyCredits: `${ModulePaths.MyProfile}/buy-credits`,
  CreateListing: `${ModulePaths.MyProfile}/create-listing`,
};
