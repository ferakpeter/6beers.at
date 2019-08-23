import React from 'react';
import { graphql } from 'gatsby';
import TagsPage from '../../components/pages/Tags';

export default (props) => <TagsPage {...props} />;

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
