function Usestate(props){
    const{detail}=props
    const storevalue=detail.map((e,i)=>{
        return(
            <ul key={i}>
                <li>{e.name}</li>
                <li>Skill:{e.skills[0].name} type:{e.skills[0].type}</li>
                <li>Skill:{e.skills[1].name} type:{e.skills[1].type}</li>
                
            </ul>
        )
    })
        return(
            <div>
                {storevalue}
            </div>
        )
    }
    export default Usestate