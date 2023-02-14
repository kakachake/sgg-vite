const APPEARANCE_KEY = 'appearance';

const classList = document.documentElement.classList;

const setClassList = (isDark: boolean) => {
  if (isDark) {
    classList.add('dark');
    localStorage.setItem(APPEARANCE_KEY, 'dark');
  } else {
    classList.remove('dark');
    localStorage.setItem(APPEARANCE_KEY, 'light');
  }
};

const updateAppearance = () => {
  const isDark = localStorage.getItem(APPEARANCE_KEY);
  setClassList(isDark === 'dark');
  window.addEventListener('storage', updateAppearance);
};

if (typeof window !== undefined && typeof localStorage !== 'undefined') {
  updateAppearance();
}

export const toggle = () => {
  const isDark = classList.contains('dark') ? 'dark' : 'light';
  setClassList(isDark !== 'dark');
};
