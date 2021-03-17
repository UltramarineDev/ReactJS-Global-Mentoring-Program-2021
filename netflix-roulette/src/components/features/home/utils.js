import { TABS, FILTER_TAGS } from './constants';
import { wordings } from '/src/locales/wordings';

export const getTabs = () => ([
  {
    label: wordings.all,
    id: TABS.ALL,
  },
  {
    label: wordings.documentary,
    id: TABS.DOCUMENTARY,
  },
  {
    label: wordings.comedy,
    id: TABS.COMEDY,
  },
  {
    label: wordings.horror,
    id: TABS.HORROR,
  },
  {
    label: wordings.crime,
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
