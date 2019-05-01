import React from 'react';
import Index from '../components/pages/Index';
import { graphql } from 'gatsby';

export default (props) => <Index {...props} />;

export const pageQuery = graphql`
  query IndexDeQuery {
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
    heroImage: file(relativePath: { regex: "/mentality.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    beerImage: file(relativePath: { regex: "/goldrush.png/" }) {
      childImageSharp {
        fixed(height: 340) {
            ...GatsbyImageSharpFixed_withWebp
          }
      }
    },
    all: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true }, featured: { ne: true} },
        fields: { langKey: { regex: "/(de|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            date,
            image {
              childImageSharp{
                  sizes(maxWidth: 750) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          },
          fields{
            slug,
            langKey
          },
          excerpt,
          timeToRead
        }
      }
    },
    featured: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true }, featured: { eq: true} },
        fields: { langKey: { regex: "/(de|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            date,
            image {
              childImageSharp{
                  sizes(maxWidth: 750) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          },
          fields{
            slug,
            langKey
          },
          excerpt,
          timeToRead
        }
      }
    }
  }
`;
