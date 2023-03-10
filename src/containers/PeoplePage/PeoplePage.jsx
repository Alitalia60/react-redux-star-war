import React from 'react';
import styles from './PeoplePage.module.css';
import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { getPeopleImage, getPeopleId } from '../../services/getPeopleData';
import { API_PEOPLE } from '../../constants/api';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id);
      return { id, name, img };
    });
    setPeople(peopleList);
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return <>{people && <PeopleList people={people} />}</>;
};

export default PeoplePage;
