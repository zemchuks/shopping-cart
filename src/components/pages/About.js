import React from 'react';

import { GitHubIcon} from '../icons/index'

const About = () => {
    
    return ( 
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This project was built as a test excercise for FutureX using <strong>Context API</strong> by React.</p>

                <a className="btn btn-primary" href="">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit Repo</span></a>
            </div>
       
     );
}

export default About;