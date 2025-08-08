import { ThemeDataType } from '../lib/redux/slices/themeSlice';

export const APP_THEME: ThemeDataType[] = [
  {
    name: 'E-commerce',
    image:
      'https://netsolitsolution.com/wp-content/uploads/2022/10/785054-ecommerce-istock-020119.jpg',
    backgroundColor: '#f7fafc',
    color: '#212121',
    activeButtonBgColor: '#2563eb',
    disableButtonBgColor: '#5a6063',
    sideBarBgColor: '#000',
    sideBarFontColor: '#fff',
    sideBarHoverColor: '#fff',
  },
  {
    name: 'Cart',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZBlntmoK-M4MGNC1BCSp6Xc8dgCjEGFv4A&s',
    backgroundColor: '#f7fafc',
    color: '#212121',
    activeButtonBgColor: '#000',
    disableButtonBgColor: '#5a6063',
    sideBarBgColor: '#2563eb',
    sideBarFontColor: '#000',
    sideBarHoverColor: '#fff',
  },
];
