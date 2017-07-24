import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import query from '../queries/fetchPortfolios';

class PortfolioCreate extends Component {
    constructor(props) {
    super(props);
    this.state = { title: ''};
    }

    onSubmit(event) {
       event.preventDefault(); 
       
        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/'));

    }

    render() {
        return(
            <div>
                <Link to="/" className="waves-effect waves-light btn">
                Home
                </Link>
                <h3> Create a New portfolio </h3>
                <form onSubmit={this.onSubmit.bind(this)}>
            <label>
                Portfolio Title:
            </label>
            <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
                </form>
            </div>
        );
    }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;


export default graphql(mutation)(PortfolioCreate);