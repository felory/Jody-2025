import { create } from 'zustand';

interface UserState {
  token: string;
  login: (u: string, p: string) => Promise<void>;
  logout: () => void;
}

export const useUserStore = create<UserState>(set => ({
  token: localStorage.getItem('token') || '',

  login: async (username: string, password: string) => {
    const fakeToken = 'FAKE_JWT_TOKEN_123';

    localStorage.setItem('token', fakeToken);
    set({ token: fakeToken });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: '' });
  },
}));
