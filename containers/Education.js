import React from 'react';
import Panel from '../components/Panel';
import Chronology from '../components/Chronology';

const Education = ()=>{
    return (
        <Panel title="Education">
            <Chronology
            dates="June 2014"
            name="California State University San Bernardino"
            location="San Bernardino, CA"
            title="B.S. Computer Engineering"
          />
          <small>Minor in Applied Physics, Minor in Mathematics</small>
        </Panel>
    )
}

export default Education;