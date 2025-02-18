const theme = {};

const mq = {
  phone: {
    narrow: {
      minWidth: 0,
      maxWidth: '449px',
      min: '(min-width: 0)',
      max: '(max-width: 449px)',
    },
    wide: {
      minWidth: '450px',
      maxWidth: '767px',
      min: '(min-width: 450px)',
      max: '(max-width: 767px)',
    },
  },
  tablet: {
    narrow: {
      minWidth: '768px',
      maxWidth: '1023px',
      min: '(min-width: 768px)',
      max: '(max-width:1023px)',
    },
    wide: {
      minWidth: '1024px',
      maxWidth: '1279px',
    },
  },
  desktop: {
    small: {
      minWidth: '1280px',
      maxWidth: '1439px',
    },
    medium: {
      minWidth: '1440px',
      maxWidth: '1919px',
    },
    large: {
      minWidth: '1920px',
    },
    extra: {
      minWidth: '3840px',
    },
  },
};

export { theme, mq };
