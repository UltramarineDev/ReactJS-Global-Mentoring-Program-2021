export const tabs = {
  ALL: 'ALL',
  DOCUMENTARY: 'DOCUMENTARY',
  COMEDY: 'COMEDY',
  HORROR: 'HORROR',
  CRIME: 'CRIME',
};

export const filterTags = {
  DOCUMENTARY: ['Documentary', 'Adventure'],
  COMEDY: ['Comedy', 'Family', 'Fantasy'],
  HORROR: ['Horror', 'Action'],
  CRIME: ['Crime', 'Action'],
};

export const sortOptions = {
  RELEASE_DATE: 'RELEASE_DATE',
  TITLE: 'TITLE',
};

export const sortOptionsLabels = {
  [sortOptions.RELEASE_DATE]: 'RELEASE DATE',
  [sortOptions.TITLE]: 'TITLE',
};

export const movieActions = {
  edit: 'edit',
  delete: 'delete',
};

export const movieActionLabels = {
  [movieActions.edit]: 'Edit',
  [movieActions.delete]: 'Delete',
};
