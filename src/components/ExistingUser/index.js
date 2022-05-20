const ExistingUser = props =>{
    
    const {username} = props
    console.log("Entered into existing user")

    const onClickBtn = () =>{
        const {history} = props
        history.push("/")
    }

    return(
        <div>
            <h1>Hi {username} Welcome back</h1>    
            <button type="button" onClick={onClickBtn}>Go Back</button>
        </div>
    )

}

export default ExistingUser