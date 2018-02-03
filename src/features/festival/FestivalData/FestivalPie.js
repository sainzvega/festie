import React from 'react';
import { Pie } from 'react-chartjs-2';

const FestivalPie = (props) => {
    const { data } = props;    
    return <Pie data={data} />;
};

export default FestivalPie;