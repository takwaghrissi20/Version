export const authRole = {
  Admin: ['admin'],
  User: ['user', 'admin'],
};

export const defaultUser = {
  displayName: 'admin',
  username: 'rihem.hassouna@gets-company.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};
export const allowMultiLanguage = import.meta.env.VITE_MULTILINGUAL === 'true';
export const fileStackKey = import.meta.env.VITE_FILESTACK_KEY;
export const BaseUrl = import.meta.env.Base_URL;//Base de api
export const initialUrl = import.meta.env.VITE_INITIAL_URL; // this url will open after login
