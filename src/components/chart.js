import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return  _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        //we will be passing in the data via props. the attribute/prop 
        //will be called 'data'
        //make the color configurable as a prop
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {average(props.data)} {props.units}
            </div>
        </div>
    );
}