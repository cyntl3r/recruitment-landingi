module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/src/testing/setupTests.ts'],
  transform: {
    '.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/testing//file-mock.js',
    '.(css|less)$': '<rootDir>/src/testing//style-mock.js',
  },
};
