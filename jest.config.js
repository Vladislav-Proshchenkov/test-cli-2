export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.test.js'],
    collectCoverage: true, // Включаем сбор покрытия
    coverageDirectory: 'coverage', // Папка для отчётов
    coverageReporters: ['html', 'text'], // Форматы отчётов
  };