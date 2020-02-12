import React from 'react';
import { TabNavigator } from 'react-navigation';
import { HomeStack, SearchStack, UploadPhotoStack, HistoryStack, AccountStack } from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import Home from '../../assets/svgs/Home';
import Add from '../../assets/svgs/Add';
import Account from '../../assets/svgs/Account';
import { COLOR_BASE_PRIMARY_MAIN } from '../styles';
import SvgSaved from '../../assets/svgs/Saved';

const COLOR_DARK_GREY = '#797979';
const COLOR_GREEN = '#1ea54f';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, label, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        isActive={tintColor === COLOR_BASE_PRIMARY_MAIN}
        label={label}
        icon={tintColor === COLOR_GREEN ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 30, width: 30, tintColor }]}
        badge={badge}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_GREEN,
    inactiveTintColor: COLOR_GREY,
    style: {
      borderTopWidth: 0,
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: 60
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    label: 'Home',
    stack: HomeStack,
    image: {
      active: <Home active />,
      inactive: <Home />
    }
  },
  // {
  //   label: 'Saved',
  //   stack: HistoryStack,
  //   image: {
  //     active: <SvgSaved height={40} width={40} active />,
  //     inactive: <SvgSaved height={40} width={40} />
  //   }
  // },
  {
    label: 'Upload',
    stack: UploadPhotoStack,
    image: {
      active: <Add active />,
      inactive: <Add />
    }
  },
  {
    label: 'Account',
    stack: AccountStack,
    image: {
      active: <Account active />,
      inactive: <Account />
    }
  }
]);

export default { AppStack };
