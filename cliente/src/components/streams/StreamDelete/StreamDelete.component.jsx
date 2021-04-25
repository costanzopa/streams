import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../../redux/actions';
import Modal from '../../Modal';
import history from '../../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchStream(id);
  }
  renderActions() {
    const { id } = this.props;
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return <div>Are you sure you want to delete this stream?</div>;
    }
    return (
      <div>
        {`Are you sure you want to delete the stream with tilte: ${this.props.stream.title}?`}
      </div>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
