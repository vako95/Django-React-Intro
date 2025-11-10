import { Formik, Form } from "formik";
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
                initialValues={{
                    login_email: "",
                    login_password: "",
                }}
                onSubmit={() => console.log("success")}
            >
                <Form className="login__form" action="">
                    <div className="login__form-content">
                        <div class="login__form-field">
                            <Input
                                icon={<MdAlternateEmail />}
                                inputProps={{
                                    name: "login_email",
                                }}

                                type="password"
                                showPassword={true}
                                position="left"
                                placeholder="Email"
                            />
                        </div>
                        <div class="login__form-field">
                            <Input
                                inputProps={{
                                    name: "login_password",
                                }}
                                icon={<SiAuthelia />}
                                position="left"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="login__form-control">
                        <HoverButton
                            width="100%"
                            variant="simple"
                            bgColor="rgba(0, 173, 69)"
                            hoverBgColor="rgba(31, 132, 71)"
                            hoverTextColor="#000"
                            size="md"
                        >
                            Login
                        </HoverButton>

                    </div>
                    <div className="login__form-meta-action">
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