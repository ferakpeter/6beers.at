import React from 'react';
import Index from '../components/pages/Index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

// const Background = styled.Img`
//   height: 100%;
//   width: 100%;
// `;

const Main = (props) => {

  return (
      <Index {...props} />
    );
}

export default Main;

export const pageQuery = graphql`
  query IndexEnQuery {
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
    beerImage: file(relativePath: { regex: "/tropicale.png/" }) {
      childImageSharp {
        fluid(maxHeight: 360) {
            ...GatsbyImageSharpFluid_withWebp
          }
      }
    },
    all: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true }, featured: { ne: true} },
        fields: { langKey: { regex: "/(en|any)/" } }
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
        fields: { langKey: { regex: "/(en|any)/" } }
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
