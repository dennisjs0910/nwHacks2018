import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';
import IGComponent from './IGComponent';
import TimelineFeed from './TimelineFeed';
import SortButton from './SortButton';
import { connect } from 'react-redux';
import { fetchInstagramTimeLine, fetchTwitterTimeLine } from '../actions';

class NewsFeed extends Component {

    render() {
        return (
            <div className='NewsFeed'>
                <div className="sortbutton-container btn-group" role="group">
                    <SortButton key="time" name="time"/>
                    <SortButton key="media" name="media"/>
                </div>
                    { this.renderHelper() }
                </div>
        );
    }


    renderHelper() {
        let sSortKey = this.props.sort && this.props.sort.key;
        if (sSortKey === "time") {
            //sort by time;
            return (<div>{ this.renderByTimeline() }</div>);
        } else {
            // sort by media (default)
            return (
                <ul>
                    <IGComponent />
                    <TwitterComponent />
                </ul>
            )
        }
    }

    renderByTimeline() {
        let aTimeline = this.props.post;
        if (!aTimeline) {
            return (<div>You do not have any posts or development problem stub </div>);
        }
        const aReactTimeline = aTimeline.map((post) => {
            return <TimelineFeed post={post} />
        });
        return (<div> {aReactTimeline} </div>);

    }
}


function mapStateToProps(state) {
    return {
        instagram : state.instagram,
        twitter : state.twitter,
        auth: state.auth,
        post: state.post,
        sort: state.sort
    };
}

export default connect(mapStateToProps, [fetchInstagramTimeLine, fetchTwitterTimeLine])(NewsFeed);