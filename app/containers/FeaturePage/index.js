/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class FeaturePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <p>Heading 1</p>
        </H1>
        <List>
          <ListItem>
            <ListItemTitle>List Item title 2</ListItemTitle>
            <p>List Item paragraph</p>
          </ListItem>

          <ListItem>
            <ListItemTitle>List Item title 2</ListItemTitle>
            <p>List Item paragraph</p>
          </ListItem>
        </List>
      </div>
    );
  }
}
