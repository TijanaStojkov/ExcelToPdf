import React from 'react';

const Footer = (props) => {
    return (
        <div style={{display:'flex', width:'500px', justifyContent:'space-between', height: '100px', alignItems: 'flex-end', padding: '0 10px 0 25px'}}>
            <div>
                <p>U Temerinu</p>
                <p>{props.mesecGodina}</p>
            </div>
            <div style={{ width:'150px', }}>
                <p style={{marginBottom:'40px'}}>Za STUPARING:</p>
                <hr />
            </div>
        </div>
    )
}

export default Footer;