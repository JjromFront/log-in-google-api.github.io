export const TitleInformation = ({
    text = "no title"
}) => {
    return (
        <>
            <h2 className="login__title">{text}</h2>
        </>
    )
}