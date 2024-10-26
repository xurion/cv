import { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async config => {
    // Extend Vite's config to include PostCSS and Tailwind
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [tailwindcss, autoprefixer],
    };
    return config;
  },
};
export default config;
