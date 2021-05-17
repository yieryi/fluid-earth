export const levelFilters = {
  'surface': name => {
    return name.includes('at 2 m above ground') ||
           name.includes('at 10 m above ground') ||
           name.includes('at surface') ||
           name.includes('sea surface') ||
           name.includes('wave') ||
           name.includes('sea level') ||
           name.startsWith('precipitation') ||
           name.startsWith('sunshine');
  },
  '850 mb': name => {
    return name.includes('at 850 mb');
  },
  '500 mb (cloud)': name => {
    return name.includes('at 500 mb');
  },
  '300 mb': name => {
    return name.includes('at 300 mb');
  },
  '200 mb (cruise)': name => {
    return name.includes('at 200 mb');
  },
  '10 mb (stratosphere)': name => {
    return name.includes('at 10 mb');
  },
  'total column': name => {
    return name.startsWith('total');
  },
  // catch-all so that new datasets don't immediately crash application
  undefined: name => false,
};

export const propertyFilters = {
  'temperature': name => {
    return name.startsWith('temperature');
  },
  'wind': name => {
    return name.startsWith('wind');
  },
  'humidity': name => {
    return name.includes('relative humidity');
  },
  'precipitation': name => {
    return name === 'precipitation in previous hour';
  },
  'MSLP': name => {
    return name === 'mean sea level pressure';
  },
  'CAPE': name => {
    return name.startsWith('convective available potential energy');
  },
  'precipitable water': name => {
    return name.includes('precipitable water');
  },
  'cloud water': name => {
    return name.includes('cloud water');
  },
  'ozone': name => {
    return name.includes('ozone');
  },
  'geopotential height': name => {
    return name.startsWith('geopotential height');
  },
  'sea temperature': name => {
    return name === 'sea surface temperature';
  },
  'wave height': name => {
    return name === 'significant wave height';
  },
  'wave period': name => {
    return name === 'primary wave mean period';
  },
  'wave direction': name => {
    return name === 'primary wave direction (from)';
  },
  'sunshine': name => {
    return name === 'sunshine in previous hour';
  },
  // catch-all so that new datasets don't immediately crash application
  undefined: name => false,
};

export const categoryFilters = {
  'weather': name => {
    return propertyFilters['temperature'](name) ||
           propertyFilters['humidity'](name) ||
           propertyFilters['MSLP'](name) ||
           propertyFilters['CAPE'](name) ||
           propertyFilters['precipitable water'](name) ||
           propertyFilters['cloud water'](name) ||
           propertyFilters['geopotential height'](name) ||
           propertyFilters['wind'](name) ||
           propertyFilters['precipitation'](name);
  },
  'oceans': name => {
    return propertyFilters['sea temperature'](name) ||
           propertyFilters['wave height'](name) ||
           propertyFilters['wave period'](name) ||
           propertyFilters['wave direction'](name);
  },
  'gases & aerosols': name => {
    return propertyFilters['ozone'](name);
  },
  'other': name => {
    return propertyFilters['sunshine'](name);
  },
  // catch-all so that new datasets don't immediately crash application
  undefined: name => false,
};