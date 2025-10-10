import { Formik, Form } from "formik"
import { HoverButton, HoverLink } from "@components/ui";
import { IoMailOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import "./Register.css";

const Register = () => {

    return (

        <section className="login">
            <div className="login__heading">
                <h1 className="login__heading-title">
                    Register Here
                </h1>
            </div>
            <form className="login__form" action="">

                <div class="login__form-field">
                    <IoMailOutline className="login__form-icon" />
                    <input
                        type="name"
                        id="name"
                        name="name"
                        className="login__form-input"
                        placeholder="Name"
                        required
                    />
                </div>
                <div class="login__form-field">
                    <IoMailOutline className="login__form-icon" />
                    <input
                        type="surname"
                        id="surname"
                        name="surname"
                        className="login__form-input"
                        placeholder="surname"
                        required
                    />
                </div>
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
                <div class="login__form-field">
                    <IoKeyOutline className="login__form-icon" />
                    <input
                        type="text"
                        id="country"
                        name="country"
                        className="login__form-input"
                        placeholder="Country"
                        required
                    />
                </div>
                <div class="login__form-field">
                    <div className="login__form-field-content">
                        <IoKeyOutline className="login__form-icon" />
                        <input
                            type="text"
                            id="country"
                            name="country"
                            className="login__form-input"
                            placeholder="Country"
                            required
                        />
                    </div>

                </div>

                <div className="login__form-control">
                    <HoverButton
                        color="gold"
                        size="lg"
                    >
                        Click
                    </HoverButton>
                    <HoverLink
                        variant="invisible"
                    >
                        Forggot Password?
                    </HoverLink>
                </div>


            </form>
        </section >

    )
}

export default Register;