const languages = require('./languages');

module.exports = {
  siteUrl: 'https://www.6beers.at',
  description: 'Web Shop for Local Craft Beer from Breitenfurt by Vienna, Austria. We offer California Common, American Pale Ale, IPA, Pale Ale, Lager, Porter, Cascadian Ale. Our Award Winning Beer is available for purchase through our site and through our partners on tap or in bottles.',
  keywords: "6 beers brewing co. craft beer shop vienna austria local",
  author: {
    name: 'Peter Ferak',
    bio: 'Award winning Craft Brewer',
    homeCity: 'Vienna',
    email: 'welcome@6beers.at',
    twitter: 'ferakpeter',
    defaultLink: 'https://facebook.com/6beersbrewing'
  },
  social: {
    facebook: 'https://facebook.com/6beersbrewing',
    instagram: 'https://instagram.com/6beersbrewing',
    untappd: 'https://untappd.com/6beersbrewing'
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
