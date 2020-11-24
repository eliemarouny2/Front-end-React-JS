import React from 'react'
import Typography from '@material-ui/core/Typography'

const Footer = () => {
    return(
        <div style={{position: 'fixed', bottom: '0', paddingTop: '10px', paddingBottom: '10px', width: '100%', textAlign: 'center', backgroundColor: 'white'}}>
            <Typography>
            &copy; <a target="_blank" rel="noopener noreferrer">CME-Elie Marouny</a> 
            </Typography>
        </div>
    )
}

export default Footer;