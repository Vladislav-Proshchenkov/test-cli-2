import { sortHeroesByHealth } from '../app.js';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should return an empty array if input is empty', () => {
    const heroes = [];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([]);
  });

  test('should handle a single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    const sortedHeroes = sortHeroesByHealth(heroes);
    expect(sortedHeroes).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should handle heroes with the same health', () => {
    const heroes = [
      { name: 'мечник', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
    ];

    const sortedHeroes = sortHeroesByHealth(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'мечник', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
    ]);
  });
});