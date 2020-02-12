import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import SplashScreen from '../screens/SplashScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Artikel from '../screens/Artikel';
import DetailArtikel from '../screens/DetailArtikel';
import Selter from '../screens/Selter';
import Adopsi from '../screens/Adopsi';
import DetailAdopsi from '../screens/DetailAdopsi';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Artikel: {
      screen: Artikel,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Selter: {
      screen: Selter,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Adopsi: {
      screen: Adopsi,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailArtikel: {
      screen: DetailArtikel,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailAdopsi: {
      screen: DetailAdopsi,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SignInStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const SignUpStack = StackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const ArtikelStack = StackNavigator(
  {
    Artikel: {
      screen: Artikel,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailArtikel: {
      screen: DetailArtikel,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const DetailArtikelStack = StackNavigator(
  {
    DetailArtikel: {
      screen: DetailArtikel,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const SelterStack = StackNavigator(
  {
    Selter: {
      screen: Selter,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const AdopStack = StackNavigator(
  {
    Adopsi: {
      screen: Adopsi,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailAdopsi: {
      screen: DetailAdopsi,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const DetailAdopsiStack = StackNavigator(
  {
    DetailAdopsi: {
      screen: DetailAdopsi,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);