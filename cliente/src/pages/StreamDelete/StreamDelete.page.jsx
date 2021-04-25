import React from 'react';
import StreamDelete from '../../components/streams/StreamDelete';

const StreamDeletePage = (props) => {
  return <StreamDelete id={props.match.params.id} />;
};

export default StreamDeletePage;
