import * as constants from './constants';

describe('Shared constants tests', () => {
  it('buttonTypes', () => {
    expect(constants.buttonTypes).toEqual({ PRIMARY: 'PRIMARY', SECONDARY: 'SECONDARY', PRIMARY_WITH_ICON: 'PRIMARY_WITH_ICON' });
  });

  it('backgroundImageUrl', () => {
    expect(constants.backgroundImageUrl).toBe('https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/eb618394-24cd-43ae-8799-c1a76a7bcbfc/BY-en-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  });

  it('buttonSizes', () => {
    expect(constants.buttonSizes).toEqual({ SMALL: 'SMALL', MEDIUM: 'MEDIUM', LARGE: 'LARGE' });
  });

  it('emptyValue', () => {
    expect(constants.emptyValue).toBe('');
  });

  it('dashEmptyValue', () => {
    expect(constants.dashEmptyValue).toBe('-');
  });
});
