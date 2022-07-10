import { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"


export const Alert = ({}) =>{

  const {alert,hide} = useContext(AlertContext)

    if(!alert.visible){
        return null
    }
    
    return(
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible  note`} >
  <strong>Увага!</strong>
   {alert.text}
  <button onClick={hide} type="button"  className="close btn btn-outline btn-sm"  aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    )
}