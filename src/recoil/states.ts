import { atom } from 'recoil';

export const isCreateState = atom({
  key: 'isCreateState',
  default: false,
});

export const isUpdateState = atom({
  key: 'isUpdateState',
  default: false,
});

export const indexState = atom({
  key: 'indexState',
  default: 0,
});
