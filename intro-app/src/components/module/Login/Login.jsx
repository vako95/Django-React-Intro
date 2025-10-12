import { Formik, Form } from "formik";
import { loginInitialValues } from "../../../helpers/forms/login.helper";
import { HoverButton, HoverLink } from "@components/ui";
import { MdAlternateEmail } from "react-icons/md";
import { SiAuthelia } from "react-icons/si";

import "./Login.css";
import Input from "../../ui/Input/Input";

const Login = () => {

    return (

        <article className="login">
            <div className="login__heading">
                <h1 className="login__heading-title">
                    Login Here
                </h1>
            </div>
            <Formik
                initialValues={loginInitialValues}
                onSubmit={() => console.log("success")}
            >
                <Form className="login__form" action="">
                    <div class="login__form-field">
                        <Input
                            icon={<MdAlternateEmail />}
                            type="password"
                            showPassword={true}
                            position="left"
                            placeholder="Email"
                        />
                    </div>
                    <div class="login__form-field">
                        <Input
                            icon={<SiAuthelia />}
                            position="left"
                            placeholder="Email"
                        />
                    </div>

                    <div className="login__form-control">
                        <HoverButton
                            variant="simple"
                            bgColor="rgba(0, 173, 69)"
                            hoverBgColor="rgba(31, 132, 71)"
                            hoverTextColor="#000"
                            size="md"
                        >
                            Login
                        </HoverButton>
                        <HoverLink
                            hoverBgColor="transparent"
                            variant="invisible"
                        >
                            Forggot Password?
                        </HoverLink>
                    </div>
                </Form>

            </Formik>
        </article >

    )
}

export default Login;