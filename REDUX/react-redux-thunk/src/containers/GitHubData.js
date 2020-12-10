import React from 'react';
import { connect } from 'react-redux';

function GitHubData({ data }) {
    if(!data) {
        return (
            <div>
                <h1>No Data</h1>
            </div>
        )
    }
    return(
        <div>
            <div>{data.name}</div>
            <br/>
            <div>{data.blog}</div>
            <br/>
            <div>Github Followers: {data.followers}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
   return {
       data : state.data
   };
};

export default connect(mapStateToProps, null)(GitHubData);