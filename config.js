export default {
  name: 'wprn',
  description:
    'Public initiative to publish and share in one single place the list of all research initiatives and surveys about the current pandemic of Covid-19 coronavirus. (TEST)',
  shortDescription:
    'Public initiative to publish and share in one single place the list of all research initiatives and surveys about the current pandemic of Covid-19 coronavirus. (TEST)',
  graphqlEndpoint: 'https://mz3e6z5nlngvdls3zh3possona.appsync-api.eu-west-2.amazonaws.com/graphql',
  graphqlApiKey: 'da2-eb5bkfhsvbdz3mexfykmkwjka4',
  url: 'https://wprn.org',
  font: {
    family: 'map[body:Open Sans title:Poiret One:100, 300, 400, 500, 700, 900]',
    fallback: 'sans-serif',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#2196f3',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#2196f3',
        secondary: '#424242',
        accent: '#424242',
        error: '#D84315',
        info: '#2196f3',
        success: '#00E676',
        warning: '#FF8F00',
      },
    },
  },
  sentry_dsn: 'https://933066c491f04f9a8b15141c68c7a0a8@sentry.paris-ias.io/2',
  ackee_domain: 'e20368c7-be1f-4f07-9a10-590cc9eb517b',
}
