import { useState } from "react";

function Signin(){
    const [sign,setSign]=useState(true);
    const [out,setOut]=useState(true)


        const clickIn=()=>{
            setSign(false)
            setOut(false)
        }
        const clickOut=()=>{
            setSign(true)
            setOut(true)
        }

        
    

    return(
        <div>
            {sign?(<button onClick={clickIn}>SignIn</button>):(<button onClick={clickOut}>SignOut</button>)}
            {out?(<p>please signIn</p>):(<p>Welcome to all</p>)}
        </div>
    )
}
export default Signin