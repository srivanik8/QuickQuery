import React from "react";
import Button from 'react-bootstrap/Button';


function Buttonbox({children}){
    return(
        <>

        <Button variant="light" style={{backgroundColor: "#01F466" , 
            border: "none" , fontFamily: "manrope" , fontWeight: 600 , 
            width: "25%" , borderRadius: 100 , color: "black" , fontSize: "75%"
            }} >
              {children}
            </Button>{' '}
        </>
    )
}
export default Buttonbox;
