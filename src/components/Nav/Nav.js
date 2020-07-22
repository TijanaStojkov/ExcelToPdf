import React from 'react';
import { Navbar} from 'react-materialize';


const Nav = () => {
    return (
        <Navbar
            className='grey darken-4 '
            brand={<a className="brand-logo blue-grey-text text-lighten-4"
                    href="/">W-ING SOLUTIONS</a>}
                    centerLogo>
        </Navbar>
    )

}

export default Nav;