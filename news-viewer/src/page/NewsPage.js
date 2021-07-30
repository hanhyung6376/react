import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewList';

const NewsPage = ({ match }) => {
    const category = match.params.category || 'all';

    return (
        <>
            <Categories/>
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;