export const tempConvert = (temperatureType, temp) => {
  let result =
    temperatureType === 'celsius'
      ? `${parseInt(temp)} °C`
      : `${parseInt(temp * 1.8 + 32)} °F`;
  return result;
};

export const iconConvert = icon => {
  return String(icon).replace('n', 'd');
};
