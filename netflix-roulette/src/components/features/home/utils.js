import { TABS, SORT_OPTIONS, SORT_OPTIONS_LABELS, FILTER_TAGS } from './constants';

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

export const getFilteredMovies = (movies, activeTab) => {
  const filterTagList = FILTER_TAGS[activeTab];
  
  if (!movies || movies.length === 0 || !filterTagList) {
    return movies;
  }

  let filteredMovies = movies.filter(({ genres }) => {
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
