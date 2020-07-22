import React from 'react';
import { CollapsibleItem } from 'react-materialize';


const CollapsibleItemComponent = (props) => {
    
    let content = props.variables.map((element,i) => {
        const valueName = props.variables[i].charAt(0).toUpperCase() + props.variables[i].slice(1)
        let name = valueName.match(/[A-Z][a-z]+/g).join('  ');
        let value = props.states[props.variables[i]]
        return (
            <p key={i}>{name + ":"} <span>{value}</span></p>
        )
    })
    return (
        <CollapsibleItem
            onSelect={()=>{}}
            expanded={false}
            header={props.header?props.header:''}
            icon={props.icon}
            node="div"
        >
                {content}
         </CollapsibleItem>
    )
}

export default CollapsibleItemComponent;