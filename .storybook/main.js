module.exports = {
  stories: [
    '../src/components/**/*/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite'
  },
}
