import { Inputs } from "../../components/Inputs";
import { LoginButton } from "../../components/LoginButton";
import { TitleInformation } from "../../components/TitleInformation";
import './index.css'

export const LoginIndex = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log("Hola")
    }
    return (
        <div className="login-wrapper">

            <div className="login">
                <TitleInformation
                    text="Login"
                />

                <div className="login__information">
                    <form onSubmit={handleSubmit} className="login__information-form">
                        <Inputs
                            title="Username"
                            placeholder="Type your Username"
                        />
                        <Inputs
                            title="Password"
                            placeholder="Type your Password"
                            type="password"
                        />

                        <LoginButton
                            text="Login"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};
