const authors = {
  hugomn: {
    name: 'Peter Ferak',
    additionalName: 'peter',
    address: 'Breitenfurt bei Wien',
    birthDate: '1963-12-30',
    birthPlace: 'Bratislava, Slovakia',
    brand: 'Peter Ferak, Craft Brewer, Independent, Creative Beer advocate',
    children: '...',
    email: 'welcome@6beers.at',
    familyName: 'Ferak',
    gender: 'Male',
    givenName: 'Peter',
    height: '...',
    homeLocation: 'Breitenfurt bei Wien',
    jobTitle: 'Brewer',
    knows: '...',
    memberOf: '...',
    nationality: 'Austrian',
    owns: '...',
    parent: '...',
    performerIn: '...',
    publishingPrinciples: '...',
    relatedTo: '...',
    seeks: '...',
    sibling: '...',
    spouse: {
      additionalName: 'Ludmilla Ferak',
      name: 'Ludmilla Ferak',
      givenName: 'Ludmilla',
      familyName: 'Ferak',
      gender: 'Female',
      nationality: 'Austrian',
      homeLocation: 'Breitenfurt bei Wien',
    },
    telephone: '...',
    weight: '...',
    workLocation: '...',
    worksFor: '...',
    description: '...',
    disambiguatingDescription: '...',
    identifier: '...',
    image: 'https://www.homerunners.at/fxdata/hr/prod/temedia/playerfotos_image/big/20160402-nutvilleat-0069-Ferak-Peter_312.jpg',
    sameAs: 'https://6beers.at/team/',
    url: 'https://6beers.at/team/',
  },
};

const getAuthor = (id) => {
  const author = {
    ...authors[id],
    '@type': 'Person',
  };
  return author || authors[0];
};

module.exports = {
  authors,
  getAuthor,
};
