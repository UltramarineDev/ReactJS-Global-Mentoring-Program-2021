import { genres } from 'components/shared/MoviesList/constants';
import { wordings } from 'locales/wordings';

export const getGenres = () => ([
  {
    name: wordings.documentary,
    id: genres.DOCUMENTARY,
  },
  {
    name: wordings.comedy,
    id: genres.COMEDY,
  },
  {
    name: wordings.horror,
    id: genres.HORROR,
  },
  {
    name: wordings.crime,
    id: genres.CRIME,
  },
  {
    name: wordings.action,
    id: genres.ACTION,
  },
]);
