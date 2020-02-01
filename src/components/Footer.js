import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    render(){
        return(
         <footer className="footer text-center">
            <div>
                 <p className="footer-text">Copyright 2020 LifeLine. All rights reserved</p>

            </div>
         </footer>
        );
    }
}

export default Footer;