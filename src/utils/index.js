/**
 * Function that will convert degrees to compass direction.
 *
 * @param {number} - degrees
 * @returns {string} - compass direction abbreviation
 */
export const convertWindDirection = (degrees) => {
  const abbrevSet = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  const val = Math.floor(degrees / 22.5 + 0.5);

  return abbrevSet[val % 16];
};

export const celsiusToFahrenheit = (celsius) =>{

  const cToFahr = celsius * 9 / 5 + 32;
  return cToFahr.toFixed(0);
}
