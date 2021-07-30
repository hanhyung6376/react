import React, { Component } from 'react';

class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    };
    
    handleGoAbout = () => {
        this.props.history.push('/about');
    }
    
    handleGoProfile = () => {
        this.props.history.push('/profiles');
    }

    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('정말 떠나실 건가요?');
    }

    componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
                <button onClick={this.handleGoAbout}>소개로</button>
                <button onClick={this.handleGoProfile}>프로필로</button>
            </div>
        );
    }
}

export default HistorySample;