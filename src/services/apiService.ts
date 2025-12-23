
/**
 * Base URL for all IPTV-org API endpoints
 * @see https://iptv-org.github.io/api
 * GitHub Repository: https://github.com/iptv-org/iptv
 */
const BASE = 'https://iptv-org.github.io/api';


/**
 * Fetches the list of all channels.
 * @returns {Promise<Array>} Array of channel objects
 * @see https://iptv-org.github.io/api/channels.json
 */
export async function fetchChannels() {
  const res = await fetch(`${BASE}/channels.json`);
  return res.json();
}


/**
 * Fetches the list of all feeds.
 * @returns {Promise<Array>} Array of feed objects
 * @see https://iptv-org.github.io/api/feeds.json
 */
export async function fetchFeeds() {
  const res = await fetch(`${BASE}/feeds.json`);
  return res.json();
}


/**
 * Fetches the list of all channel logos.
 * @returns {Promise<Array>} Array of logo objects
 * @see https://iptv-org.github.io/api/logos.json
 */
export async function fetchLogos() {
  const res = await fetch(`${BASE}/logos.json`);
  return res.json();
}


/**
 * Fetches the list of all streams.
 * @returns {Promise<Array>} Array of stream objects
 * @see https://iptv-org.github.io/api/streams.json
 */
export async function fetchStreams() {
  const res = await fetch(`${BASE}/streams.json`);
  return res.json();
}


/**
 * Fetches the list of all EPG guides.
 * @returns {Promise<Array>} Array of guide objects
 * @see https://iptv-org.github.io/api/guides.json
 */
export async function fetchGuides() {
  const res = await fetch(`${BASE}/guides.json`);
  return res.json();
}


/**
 * Fetches the list of all channel categories.
 * @returns {Promise<Array>} Array of category objects
 * @see https://iptv-org.github.io/api/categories.json
 */
export async function fetchCategories() {
  const res = await fetch(`${BASE}/categories.json`);
  return res.json();
}


/**
 * Fetches the list of all languages.
 * @returns {Promise<Array>} Array of language objects
 * @see https://iptv-org.github.io/api/languages.json
 */
export async function fetchLanguages() {
  const res = await fetch(`${BASE}/languages.json`);
  return res.json();
}


/**
 * Fetches the list of all countries.
 * @returns {Promise<Array>} Array of country objects
 * @see https://iptv-org.github.io/api/countries.json
 */
export async function fetchCountries() {
  const res = await fetch(`${BASE}/countries.json`);
  return res.json();
}


/**
 * Fetches the list of all subdivisions.
 * @returns {Promise<Array>} Array of subdivision objects
 * @see https://iptv-org.github.io/api/subdivisions.json
 */
export async function fetchSubdivisions() {
  const res = await fetch(`${BASE}/subdivisions.json`);
  return res.json();
}


/**
 * Fetches the list of all cities.
 * @returns {Promise<Array>} Array of city objects
 * @see https://iptv-org.github.io/api/cities.json
 */
export async function fetchCities() {
  const res = await fetch(`${BASE}/cities.json`);
  return res.json();
}


/**
 * Fetches the list of all regions.
 * @returns {Promise<Array>} Array of region objects
 * @see https://iptv-org.github.io/api/regions.json
 */
export async function fetchRegions() {
  const res = await fetch(`${BASE}/regions.json`);
  return res.json();
}


/**
 * Fetches the list of all timezones.
 * @returns {Promise<Array>} Array of timezone objects
 * @see https://iptv-org.github.io/api/timezones.json
 */
export async function fetchTimezones() {
  const res = await fetch(`${BASE}/timezones.json`);
  return res.json();
}


/**
 * Fetches the list of all blocklisted channels or streams.
 * @returns {Promise<Array>} Array of blocklist objects
 * @see https://iptv-org.github.io/api/blocklist.json
 */
export async function fetchBlocklist() {
  const res = await fetch(`${BASE}/blocklist.json`);
  return res.json();
}
