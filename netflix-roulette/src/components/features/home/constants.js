export const TABS = {
  ALL: 'ALL',
  DOCUMENTARY: 'DOCUMENTARY',
  COMEDY: 'COMEDY',
  HORROR: 'HORROR',
  CRIME: 'CRIME',
};

export const FILTER_TAGS = {
  DOCUMENTARY: ['Documentary', 'Adventure'],
  COMEDY: ['Comedy', 'Family', 'Fantasy'],
  HORROR: ['Horror', 'Action'],
  CRIME: ['Crime', 'Action'],
};

export const SORT_OPTIONS = {
  RELEASE_DATE: 'RELEASE_DATE',
  TITLE: 'TITLE',
};

export const SORT_OPTIONS_LABELS = {
  [SORT_OPTIONS.RELEASE_DATE]: 'RELEASE DATE',
  [SORT_OPTIONS.TITLE]: 'TITLE',
};

export const movieActions = {
  edit: 'edit',
  delete: 'delete',
};

export const movieActionLabels = {
  [movieActions.edit]: 'Edit',
  [movieActions.delete]: 'Delete',
};
