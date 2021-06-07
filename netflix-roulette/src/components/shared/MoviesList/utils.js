import { useEffect } from 'react';

import { wordings } from '../../../locales/wordings';

import { tabs } from './constants';

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

  return resultIds.map((resultId) => ({
    id: resultId,
    name: labels[resultId],
  }));
};

export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => ref.current && !ref.current.contains(e.target) && callback();
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
