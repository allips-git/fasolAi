module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js',
      // 테일윈드 폼 플러그인을 적용할 폴더 경로 지정
      includeFiles: ['./src/components/input/Checkbox.vue'],
    },
    autoprefixer: {},
    require('tailwindcss'),
    require('autoprefixer'),
    // require('@tailwindcss/forms'),
  },
};
