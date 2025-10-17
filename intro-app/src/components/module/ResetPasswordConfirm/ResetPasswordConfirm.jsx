import { Input, HoverButton } from "@components/ui"

import "./ResetPasswordConfirm.css";
import { MdAlternateEmail } from "react-icons/md";
import { Form, Formik } from "formik";

const ResetPasswordConfirm = () => {

    return (
        <div className="reset-password-confirm">
            <div className="reset-password-confirm__heading">
                <h1 className="reset-password-confirm__heading-title">
                    Reset confirm
                </h1>
            </div>

            <Formik
                initialValues={{
                    reset_email: "",
                    reset_password: "",
                }}
                onSubmit={() => console.log("success")}
            >
                <Form className="reset-password-confirm__form" action="">
                    <div className="reset-password-confirm__form-content">
                        <div class="reset-password-confirm__form-field">
                            <Input
                                icon={<MdAlternateEmail />}
                                inputProps={{
                                    name: "reset-password-confirm_email",
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
                            Submit
                        </HoverButton>

                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ResetPasswordConfirm;