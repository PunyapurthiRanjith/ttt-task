import { useNavigate } from "react-router-dom"

const InvalidScreen =()=>{
    const invalidNavigate = useNavigate()
    const goHomeHandler=()=>{
        invalidNavigate("/")
    }
    return(
    <>
    <h1>page not found</h1>
    <button onClick={goHomeHandler}>go to home</button>
    
    </>)
}
export default InvalidScreen