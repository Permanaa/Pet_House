import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, SplashScreenStack, SignInStack, SignUpStack, ArtikelStack, DetailArtikelStack, SelterStack, HomeStack, AdopStack, DetailAdopsiStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    DetailAdopsi: DetailArtikelStack,
    Adopsi: AdopStack,
    Home: HomeStack,
    Selter: SelterStack,
    Artikel: ArtikelStack,
    DetailArtikel: DetailArtikelStack,
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    SignIn: SignInStack,
    SignUp: SignUpStack,
    App: Drawer
  },
  {
    initialRouteName: 'SignIn'
  }
);
