const GuestUser = props =>{

    const {username} = props
    
    const onClickBtn = () =>{
        const {history} = props
        history.push("/")
    }

    return(
        <div>  
            <h1>Hi {username} Please Sign Up</h1>
            <button type='button' onClick={onClickBtn}></button>
        </div>
    )
}

export default GuestUser