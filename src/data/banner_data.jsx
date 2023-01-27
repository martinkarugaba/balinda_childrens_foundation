import {
  FaHeartbeat,
  FaDonate,
  FaHandsHelping,
} from 'react-icons/fa';

export const bannerData = [
  {
    id: 0,
    icon: <FaHeartbeat size={60} />,
    heading: 'quick funding',
    title: 'medical cases',
    backgroundColor: 'primary',
  },
  {
    id: 1,
    icon: <FaDonate size={60} />,
    heading: 'start donating',
    title: 'donate to us',
    backgroundColor: 'secondary',
  },
  {
    id: 2,
    icon: <FaHandsHelping size={60} />,
    heading: "let's join",
    title: 'become a volunteer',
    backgroundColor: 'primary',
  },
];
