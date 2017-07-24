import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchPortfolio from '../queries/fetchPortfolio';
import EditCase from './EditCase';

class PortfolioDetail extends Component {
    render() {

        const { song } = this.props.data;

        if(!song) {
            return (
                <div>
                    ...Loading
                </div>
            );
        }
        
        return(
            <div>
                <Link to="/">
                Back
                </Link>
                <h3> {song.title} </h3>
                <EditCase/>
            </div>
        );
    }
}



export default graphql(fetchPortfolio, {
    options: (props) => { return  { variables: { id: props.params.id }}}
})(PortfolioDetail);