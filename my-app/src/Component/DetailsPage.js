import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = (props) => {
    const param = useParams();
    console.log(param)
    return (
        <div>
            <h1>Details Page - {param.id}</h1>
        </div>
    );
}

export default DetailsPage;