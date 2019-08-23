import React from 'react';
import { graphql } from 'gatsby';
import Index from '../components/pages/Index';

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
    heroImage: file(relativePath: { regex: "/brew-tanks.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    beerImage: file(relativePath: { regex: "/goldrush.png/" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
            ...GatsbyImageSharpFluid_withWebp
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
