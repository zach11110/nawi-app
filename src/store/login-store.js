/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'jotai'


export const userAtom = atom(null);
export const userDetailsAtom = atom({
    email: '',
    password: ''
  });
export const usersAtom = atom([]);
