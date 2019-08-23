import React from 'react';
import Page from '../../components/pages/Page';
import Hero from '../../components/Hero';

const i18n = {
  titleId: 'brewery',
  content: (
    <>
      <p>
Hello, it&rsquo;s
        <strong>Hugo</strong>
        {' '}
here.
      </p>
      <p>
I&rsquo;m a software engineer with 12 years of experience. I&rsquo;ve started my career when I was
        <strong>12</strong>
, playing around with HTML, CSS, and JavaScript, creating small websites for companies in my hometown in the country-side of Brazil. Soon, I fell in love with dynamic&nbsp;languages like PHP. I also had a crush with
        <strong>graphic design</strong>
.
      </p>
      <p>
In 2004 I went to a
        <strong>technical</strong>
        {' '}
school where I learned hardware and programming languages like Delphi and C++. After that, I studied 4 years of
        <strong>Computer Science</strong>
, where I could improve my skills with other languages like Java, #Net and mainly web-related technologies.&nbsp;
      </p>
      <p>
In my professional career, I spent 6 years working for big companies like
        <a href="https://twitter.com/Accenture" target="_blank">Accenture</a>
,
        <a href="https://www.sydle.com" target="_blank">Sydle</a>
,
        <a href="https://www.avenuecode.com/" target="_blank">Avenue Code</a>
, and after that, I founded my own web agency, called Verticis. After 2 years, I&rsquo;ve created my first
        <strong>startup</strong>
, called
        <a href="https://meuingresso.com" target="_blank">meuingresso.com</a>
, that is today one of the biggest ticket-selling platforms in Brazil. During that time I gained experience and passion for
        <strong>managing people</strong>
        {' '}
and
        <strong>leading tech teams</strong>
.
      </p>
      <p>
Today I work in the
        <a href="https://en.99designs.de/blog/business/berlin-silicon-allee-vs-silicon-valley-infographic/" target="_blank">Silicon Allee</a>
&nbsp;as
        <strong>engineering lead</strong>
        {' '}
at
        <a href="https://www.bcgdv.com" target="_blank">BCG Digital Ventures</a>
.&nbsp;
      </p>
      <p>
I build web apps. My passion is
        <strong>front-end development</strong>
. But I also know how to build performant and modern
        <strong>server applications</strong>
        {' '}
and I have huge experience with
        <strong>mobile development</strong>
. I speak Portuguese, English,&nbsp;ein bisschen Deutsch,
        <strong>React</strong>
        {' '}
and
        <strong>Node.js.</strong>
&nbsp;I believe beautiful
        <strong>user interfaces</strong>
        {' '}
are one of the keys to great
        <strong>experiences</strong>
.&nbsp;
      </p>
      <p>
If you want to know more,
        <a href="/contact">please contact me</a>
. I&rsquo;d love to chat or have a
        <strong>beer</strong>
.
      </p>
      <p>Cheers!</p>
    </>
  ),
  description: `
    Developer with 12 years of experience.
  `,
};

export default (props) => <Page i18n={i18n} hero=<Hero actionMessage="index.action" headlineMessage="index.headline" sublineMessage="index.subline" sublineShortMessage="index.sublineShort" route="/shop" heroImage={props.data.heroImage} beerImage={props.data.beerImage} /> {...props} />;

export const pageQuery = graphql`
  query ShopEnQuery {
    site {
      siteMetadata {
        author {
          name
          homeCity
          email
          bio
          defaultLink
        }
      }
    },
    heroImage: file(relativePath: { regex: "/bottle.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`;
