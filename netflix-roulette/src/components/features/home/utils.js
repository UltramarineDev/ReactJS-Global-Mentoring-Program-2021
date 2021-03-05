import { TABS, SORT_OPTIONS, SORT_OPTIONS_LABELS } from './constants';

export const getTabs = () => ([
  {
    label: 'ALL',
    id: TABS.ALL,
  },
  {
    label: 'DOCUMENTARY',
    id: TABS.DOCUMENTARY,
  },
  {
    label: 'COMEDY',
    id: TABS.COMEDY,
  },
  {
    label: 'HORROR',
    id: TABS.HORROR,
  },
  {
    label: 'CRIME',
    id: TABS.CRIME,
  },
]);

export const getFilteredMovies = (movies, filterTagList) => {
  if (!movies || movies.length === 0) {
    return movies;
  }

  let filteredMovies = movies.filter(({genres}) => {
    if(!genres || genres.length === 0) {
      return false;
    }

    let matchFound = false;

    genres.forEach((genre) => {
      const areTagsContainsGenre = filterTagList.some((filterTag) => filterTag === genre);
      if (areTagsContainsGenre) {
        matchFound = true;
        return matchFound;
      }
    });

    return matchFound;
  });

  return filteredMovies;
};

export const getSortOptions = () => {
  const resultIds = Object.values(SORT_OPTIONS);

  return resultIds.map(resultId => ({
    id: resultId,
    name: SORT_OPTIONS_LABELS[resultId]
  }))
};

//TODO: implement sorting
export const getSortedMovies = (movies, value) => {
  return movies;
};