import { useEffect, useRef } from "react";

function ValueDisplay({value}){

    const textRef = useRef("")

 useEffect(()=>{

     textRef.current = value

  
    

 }, [value])

    return(
        <div>
           <p>Current value: {value}</p>
           <p>previous value: {textRef.current}</p>
        </div>
    )
}
export default ValueDisplay




