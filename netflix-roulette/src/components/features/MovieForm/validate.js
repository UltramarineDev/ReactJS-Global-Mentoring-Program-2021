export const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 100) {
    errors.title = 'Must be 100 characters or less';
  }

  if (!values.releaseDate) {
    errors.releaseDate = 'Required';
  }

  if (!values.overview) {
    errors.overview = 'Required';
  } else if (!values.overview.length > 1000) {
    errors.overview = 'Must be 1000 characters or less';
  }

  if (!/^http.*$/i.test(values.movieUrl)) {
    errors.movieUrl = 'Invalid movie url';
  }

  if (!values.runtime < 0) {
    errors.runtime = 'Must be more than 0';
  }

  return errors;
};
