import React from 'react';
import StreamEdit from '../../components/streams/StreamEdit';

const StreamEditPage = (props) => {
  return <StreamEdit id={props.match.params.id} />;
};

export default StreamEditPage;
