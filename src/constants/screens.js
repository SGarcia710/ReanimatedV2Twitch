import {
  Home,
  Basis,
  ScrollEvents,
  DragAndDrop,
  Accordion,
  TikTokDisc,
  Transitions,
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
];

export default SCREENS;
