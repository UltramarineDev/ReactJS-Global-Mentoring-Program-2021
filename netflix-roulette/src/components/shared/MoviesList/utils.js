import { tabs, filterTags } from './constants';
import { wordings } from '/src/locales/wordings';

export const getTabs = () => ([
  {
    label: wordings.all,
    id: tabs.ALL,
  },
  {
    label: wordings.documentary,
    id: tabs.DOCUMENTARY,
  },
  {
    label: wordings.comedy,
    id: tabs.COMEDY,
  },
  {
    label: wordings.horror,
    id: tabs.HORROR,
  },
  {
    label: wordings.crime,
    id: tabs.CRIME,
  },
]);

export const getOptions = (options, labels) => {
  const resultIds = Object.values(options);

  return resultIds.map(resultId => ({
    id: resultId,
    name: labels[resultId]
  }))
};

//TODO: implement ui sorting in scope of module 4
export const getSortedMovies = (movies, value) => {
  return movies;
};
