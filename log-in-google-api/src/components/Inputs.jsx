export const Inputs = ({
    title = "No title",
    placeholder = "No input",
    type = "text",
    onChange = () => { return }
}) => {
    return(
        <div className="login__information--inputcontainer">
            <label htmlFor="login__information--inputcontainer--input" className="">{title}</label>
            <input type={type} className="login__information--inputcontainer--input" placeholder={placeholder}/>
        </div>
    )
}