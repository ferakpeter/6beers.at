import React from 'react';
import TagsPageRoute from '../../components/pages/Tags';
import { graphql } from 'gatsby';

export default (props) => <TagsPageRoute {...props} />;

export const pageQuery = graphql`
  query TagsDeQuery {
    allMarkdownRemark(
      limit: 2000
      filter: {
        frontmatter: { draft: { ne: true } } ,
        fields: {
          langKey: {eq: "de"}
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
