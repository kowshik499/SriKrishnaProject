import {Link} from "react-router-dom"

const Admin = props => {
        
      const onChangeInput = event => {
          const {onChangeValue} = props
          console.log(event.target.value)
          onChangeValue(event.target.value)
      }
    
    //   const onClickGuestUser = () =>{
    //     const {history} = props
    //     history.replace("/guestuser")
    //   }
      
    //   const onClickExistingUser = () =>{
    //     const {history} = props
    //     history.push("/existinguser")
    //   }

      return(
        <div>
            <input type='text' onChange={onChangeInput} />
            <Link to="/guestuser">
                <button type='button' >Guest User</button>
            </Link>
            <Link to="/existinguser">
                <button type='button' >Existing User</button>
            </Link>
        </div>
    )
}

export default Admin