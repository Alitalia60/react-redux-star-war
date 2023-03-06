import { SWAPI_PEOPLE, SWAPI_ROOT, HTTPS, GUIDE_IMG_EXTENSION, URL_IMG_PEOPLE } from '@constants/api'

export const getId = (url, category) => {
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(/\//g, '');
  return id
}

export const getPeopleId = (url) => {
  return getId(url, SWAPI_PEOPLE)
}

export const getPeopleImage = (id) => {
  return `${URL_IMG_PEOPLE}/${id}${GUIDE_IMG_EXTENSION}`
}