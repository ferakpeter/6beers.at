const languages = require('./languages');

module.exports = {
  siteUrl: 'https://www.6beers.at',
  description: 'Craft Beer from Breitenfurt bei Wien',
  author: {
    name: 'Peter Ferak',
    bio: 'Award winning Craft Brewer',
    homeCity: 'Vienna',
    email: 'welcome@6beers.at',
    twitter: 'ferakpeter',
    defaultLink: 'https://facebook.com/6beersbrewing'
  },
  sourceCodeLink: 'https://github.com/ferakpeter/6beers.at',
  disqusShortname: 'hugomagalhes',
  menu: [
    // {label: 'home', slug: '/'},
    {label: 'brewery', slug: '/brewery/'},
    {label: 'shop', slug: '/shop/'},
    {label: 'social', slug: '/social/'},
    {label: 'team', slug: '/team/'},
    {label: 'contact', slug: '/contact/'},
  ],
  languages,
  contact: [
    {
      type: 'email',
      value: 'welcome@6beers.at',
      link: 'mailto:welcome@6beers.at'
    },
    {
      type: 'phone',
      value: '+43 677 624 168 66',
      country: 'de',
      link: 'tel:+43 677 624 168 66'
    }
  ]
};
