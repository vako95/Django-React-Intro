import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginInitialValues } from "../../../helpers/forms/login.helper";
import { HoverButton, HoverLink } from "@components/ui";
import { IoMailOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import "./Login.css";

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
                        <IoMailOutline className="login__form-icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="login__form-input"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div class="login__form-field">
                        <IoKeyOutline className="login__form-icon" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="login__form-input"
                            placeholder="Password"
                            required
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