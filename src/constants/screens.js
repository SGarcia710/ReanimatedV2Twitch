import {
  Home,
  Basis,
  ScrollEvents,
  DragAndDrop,
  Accordion,
  TikTokDisc,
  Transitions,
  BottomTabNavigator,
  BottomSheet,
} from '../screens';

const SCREENS = [
  {
    name: 'Home',
    component: Home,
    title: 'Index',
  },
  {
    name: 'Basis',
    component: Basis,
    title: 'Basis',
  },
  {
    name: 'ScrollEvents',
    component: ScrollEvents,
    title: 'Scroll Events',
  },
  {
    name: 'DragAndDrop',
    component: DragAndDrop,
    title: 'Drag and Drop',
  },
  {
    name: 'Accordion',
    component: Accordion,
    title: 'Accordion',
  },
  {
    name: 'TikTokDisc',
    component: TikTokDisc,
    title: 'TikTok Disc rotation animation',
  },
  {
    name: 'Transitions',
    component: Transitions,
    title: 'Cards Transition',
  },
  {
    name: 'BottomSheet',
    component: BottomSheet,
    title: 'Bottom Sheet',
  },
  {
    name: 'BottomTabNavigator',
    component: BottomTabNavigator,
    title: 'Bottom Tab Navigator',
  },
];

export default SCREENS;
