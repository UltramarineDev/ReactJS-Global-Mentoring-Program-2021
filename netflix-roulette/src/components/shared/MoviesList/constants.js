import { wordings } from 'locales/wordings';

export const tabs = {
  ALL: 'ALL',
  DOCUMENTARY: 'DOCUMENTARY',
  COMEDY: 'COMEDY',
  HORROR: 'HORROR',
  CRIME: 'CRIME',
};

export const sortOptions = {
  RELEASE_DATE: 'release_date',
  RATING: 'vote_average',
};

export const sortOptionsLabels = {
  [sortOptions.RELEASE_DATE]: wordings.release_date,
  [sortOptions.RATING]: wordings.rating,
};

export const movieActions = {
  edit: 'edit',
  delete: 'delete',
};

export const movieActionLabels = {
  [movieActions.edit]: 'Edit',
  [movieActions.delete]: 'Delete',
};

export const genres = {
  DOCUMENTARY: 'Documentary',
  COMEDY: 'Comedy',
  HORROR: 'Horror',
  CRIME: 'Crime',
  ACTION: 'Action',
};
