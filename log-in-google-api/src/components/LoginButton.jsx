export const LoginButton = ({
    text = "no text",
    type,
    onClick = () => { return } 
}) => {
    return(
        <>
            <div className="login__information--buttoncontainer">
                <button className="login__information--buttoncontainer--button" type={type}>{text}</button>
            </div>
        </>
    )
}