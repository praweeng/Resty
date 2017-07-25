import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class EditCase extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '', link: ''};
    }
     onSubmit(event) {
         event.preventDefault(); 
         
        this.props.mutate({
            variables: { content: this.state.content, songId: this.props.songId , link: this.state.link  }
        });

    }
    render() {
       
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>  Description </label>
                    <input value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })}
                    />
                      <label>  URL </label>
                    <input value={this.state.link}
                    onChange={event => this.setState({ link: event.target.value })}
                    />
                   
                </form>
            </div>

        );
    }
}
const mutation = gql`
mutation EditCase($content: String, $link: String, $caseId: ID){
  addLyricToSong(content: $content, link: $link songId: $caseId){
    id
    lyrics{
      content
      link
    }
  }
}
`;
export default graphql(mutation)(EditCase);