import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/fetchPortfolios';

class Portfolios extends React.Component {
    
    onPortfolioDelete(id) {
        this.props.mutate({ variables: { id } })
        .then(() => this.props.data.refetch());
    }
    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => {
            return (
                <li key={id} className="collection-item">
                   <Link to={`/porfolios/${id}`}>
                    {title}
                    </Link>
                    <i onClick={() => this.onPortfolioDelete(id)} className="material-icons">delete</i>
                </li>
            )
        })
    }

    render() {
        if(this.props.data.loading) {
          return(   <div className="progress">
      <div className="indeterminate"></div>
  </div>
          )
        }
        return ( 
            <div>
            <ul className="collection">
            {this.renderSongs()}
            </ul>
            <Link to="/portfolio/new" className="btn-floating btn-large red right">
            <i className="material-icons"> add </i>
            </Link>
            </div>
        )
    }
}

const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation) (
    graphql(query)(Portfolios)
);