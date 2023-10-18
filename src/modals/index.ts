class AuthReducerModal {
  loginContent: object = [];
  accessToken: string = '';
  deviceId: string = '11';
  deviceName: string = '';
  fcmToken: string = '11111111111111111111';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  userId: string = '';
  profilePicture: string = '';
  isAppleLogin: boolean = false;
  isFacebookLogin: boolean = false;
  isGoogleLogin: boolean = false;

  dob: string = '';
  address: string = '';
  zipcode: string = '';
  city: string = '';
  country: string = '';
  countryCode: string = '+1';
  fullMobileNo: string = '';
  wealthSource?: string = '';
  nationality?: string = '';
  employmentStatus?: string = '';
  organizationName?: string = '';
  industryData?: string = '';
  incomeRange?: string = '';
  walletBalance: number = 0;
  enabled2FA: boolean = false;

  isUserLoggedIn: boolean = false;
  isEmailVerified: boolean = false;
  isBiometricShown: boolean = false;
  isBiometricEnrolled: boolean = false;
  isPersonalInfoUpdated: boolean = false;
  idVerificationCompleted: boolean = false;
  addressVerificationCompleted: boolean = false;
  isKYCVerified: boolean = false;
  isKYCEverVerified: boolean = false;
  amlCheckCompleted: boolean = false;
  addressVerificationDocuments: any[] = [];
  idVerificationDocuments: any[] = [];
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;
  language: string = 'en';
  refferals: {
    campaignDetails: string;
    campaignName: string;
    refereeAmount: number;
    referrerAmount: number;
  }[] = [];

  //Profile Keys
  currency: 'USD' | 'AED' = 'USD';
  pushNotificationStatus: boolean = true;
  is2FAEnrolled: boolean = false;
  referralCode: string = '';
}

class HomeReducerModal {
  PortfolioValue: number = 0;
  capitalAppreciation: number = 0;
  investedAmount: number = 0;
  monthlyRent: number = 0;
}

class ExploreReducerModal {
  capitalAppreciation: {x: number; y: number}[] = [];
  cumulativeRent: {x: number; y: number}[] = [];
  quantity: number = 1;
  selectedScratchCard: object[] = [];
}
class PassportReducerModal {}
class ProfileReducerModal {
  appOpeningStatus: {
    isDynamicLink: boolean;
    linkData: {
      minimumAppVersion: string | null;
      url: string | null;
      utmParameters: object;
    };
  } = {
    isDynamicLink: false,
    linkData: {
      minimumAppVersion: null,
      url: null,
      utmParameters: {},
    },
  };
}
class WalletReducerModal {}

class InternetStatusModel {
  isConnected: boolean = true;
}

//Main ReducersModal Model
class RootReducerModal {
  internetStatusReducer: InternetStatusModel = new InternetStatusModel();
  authReducer: AuthReducerModal = new AuthReducerModal();
  exploreReducer: ExploreReducerModal = new ExploreReducerModal();
  homeReducer: HomeReducerModal = new HomeReducerModal();
  profileReducer: ProfileReducerModal = new ProfileReducerModal();
}
export {
  AuthReducerModal,
  ExploreReducerModal,
  HomeReducerModal,
  ProfileReducerModal,
  RootReducerModal,
  InternetStatusModel,
};
