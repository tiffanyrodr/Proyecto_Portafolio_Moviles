const BASE_URL = 'https://restcountries.com/v3.1';

export async function fetchAllCountries() {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,flags,population,region,capital,cca3`
  );
  if (!response.ok) throw new Error('Error al obtener países');
  const data = await response.json();
  return data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
}

export async function fetchCountryByCode(code) {
  const response = await fetch(
    `${BASE_URL}/alpha/${code}?fields=name,flags,population,region,capital,subregion,languages,currencies,area,cca3`
  );
  if (!response.ok) throw new Error('Error al obtener el país');
  return response.json();
}
