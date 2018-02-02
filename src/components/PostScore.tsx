import * as React from 'react';
import { PostScoreItem } from './PostScoreItem';

export class PostScore extends React.PureComponent {
  render() {
    return [1, 2, 3, 4].map(index => <PostScoreItem key={index} />);
  }
}