import React from 'react';
import StreamShow from '../../components/streams/StreamShow';

const StreamShowPage = (props) => {
  return <StreamShow id={props.match.params.id} />;
};

export default StreamShowPage;
