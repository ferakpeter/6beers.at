import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'terms',
  content: (
    <>
      <h3> 1. Site Contents </h3>
        <p>
          Unless otherwise noted, the design of the Site, the Site as a whole and all materials that are part of the Site
          (collectively, 'Contents') are copyrights, trademarks, trade dress or other intellectual properties owned, controlled
          or licensed by 6 beers brewing co. or its subsidiaries and affiliates. Any use of the Contents without 6beers
          express written consent is strictly prohibited.
        </p>
        <h3> 2. Links to Other Websites and Services </h3>
        <p>
          This website may include links to other Internet sites maintained by third parties. 6beers provides 'Linked Sites'
          to users solely as a convenience. You access Linked Sites at your own risk and by accessing them you leave the
          6beers website.
        </p>
        <h3> 3. Creative- and Trademarks </h3>
        <p>
          6beers.at strives to comply to trademark and copyright laws in all our publications, including images, graphics,
          sound, video, and text elements. Content created by 6beers (including images, graphics, sound, video, and text
          elements) can only be used and replicated by express written consent by 6beers.
        </p>
        <h3> 5. Privacy </h3>
        <p>
          In case the website prompts the user for personal or business related data (emails, names, addresses) the data
          will not be shared with any third parties unless the user is notified and agrees to the procedure. Usage and
          payment for the websites services can be done with anonymous data or pseudonyms, as long as it is technically
          feasible. The usage of information published in the imprint or similar content including postal addresses, telefon
          and fax numbers, or email addresses cannot be used to deliver information that was not explicitely requested
          by 6beers. We reserve our rights to take legal steps against publishers of such 'Spam emails'.
        </p>
        <h3> 6. Legal force of Disclaimer </h3>
        <p>
          This Disclaimer is to be understood as part of the web offering of 6beers. If parts of the disclaimer should not
          abide to current law, the valid content is to be understood as valid.
        </p>
        <h3> 7. Tracking </h3>
        <p>
          6beers uses Tracking software of third parties in order to monitor the usage of the site. The analysis tools use
          Cookies, which are text files saved to the users computer hard-drive. These files contain information about the
          user, such as IP-addresses, browser type, timestamps, length of usage, viewed pages, and produced clickstream-data.
          Most browsers allow the user to control the usage of Cookies, Tracking software, or offer features to remove
          such data from the hard-drive. We would like to highlight that the restriction of Cookies usage and Tracking
          software can limit the functionality of the website.
        </p>
        <h3> Google Analytics </h3>
        <p>
          is used as Tracking software. This is a service of Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043,
          USA). Google Analytics uses 'Cookies'. The user data resulting from Tracking (including the users IP-address)
          are sent to servers owned by Google situated in the USA. In case of activating anonymous IP addresses the IP-address
          will be shortened to the member states of the European Union, or the members of the European Economy treaty by
          Google. Only in special cases will the full IP-address delivered to the servers of Google in the USA and then
          shortened on the server. Google will use this information in our name, in order to create reports of website
          usage. In all cases Google will not link the users IP-address to other recorded data. The user can control the
          installation of Cookies through browser settings. We would like to highlight that in these cases the user may
          not be able to use the full functionality of the website. The user can restrict the information saved in the
          Cookie (including the IP-address) by installing the following browser plugin: <br />
          <a href="http://tools.google.com/dlpage/gaoptout?hl=de">http://tools.google.com/dlpage/gaoptout?hl=de</a> <br />
          <br />
          For more information please visit <br />
          <a href="http://www.google.com/intl/de/analytics/privacyoverview.html">
            http://www.google.com/intl/de/analytics/privacyoverview.html"
          </a>
        </p>
        <h3> 8. Social Plugins </h3>
        <p>
          Our websites social plugins are embedded by social network Facebook. The plugins can be recognized by the logo
          of the company. When visiting a page that uses such plugins (for example: Facebook 'like'), the browser will
          connect to the servers of the social network. 6beers has no way of finding out which data is transferred. To
          avoid unwanted data being sent and stored by the social networks the user needs to logout of all social networks
          before using the website. When using the Socia Connect Button of the various providers (for example: Facebook)
          while registering, data is sent only with the users consent. For further information about the purpose and scope
            of the data please turn to the social networks' privacy conditions.
        </p>
    </>
  ),
  description: `
    Terms & Conditions of 6 beers brewing.
  `
};

export default (props) => <Page i18n={i18n} {...props} />;