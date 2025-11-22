import { Input, HoverButton } from "@components/ui"

import "./ResetPassword.css";
import { MdAlternateEmail } from "react-icons/md";
import { Form, Formik } from "formik";

const ResetPassword = () => {

    return (
        <div className="reset-password">
            <div className="reset-password__heading">
                <h1 className="reset-password__heading-title">
                    Reset password
                </h1>
            </div>

            <Formik
                initialValues={{
                    reset_email: "",
                    reset_password: "",
                }}
                onSubmit={() => console.log("success")}
            >
                <Form className="reset-password__form" action="">
                    <div className="reset-password__form-content">
                        <div class="reset-password__form-field">
                            <Input
                                icon={<MdAlternateEmail />}
                                inputProps={{
                                    name: "reset-password_email",
                                }}

                                type="password"
                                showPassword={false}
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
                            reset-password
                        </HoverButton>

                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ResetPassword;