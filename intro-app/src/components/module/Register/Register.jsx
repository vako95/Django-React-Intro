import { useState } from "react";
import { HoverButton, HoverLink } from "@components/ui";
import { LuCalendarDays } from "react-icons/lu";
import { IoTodayOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { SiAuthelia } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";

import "./Register.css";

import { Select, Input, MonthField } from "@components/ui"
import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { Formik, useFormik } from "formik";

const Register = () => {
    const [step, setStep] = useState(1);
    // const { } = useFormik();

    const handleNext = () => {
        if (step < 3) {
            setStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
        }
    };

    const genders = [
        { label: "M", value: "Male" },
        { label: "F", value: "Female" },
        { label: "O", value: "Other" }
    ];

    return (
        <section className="login">
            <div className="login__heading">
                <h1 className="login__heading-title">
                    Register Here
                </h1>
            </div>

            <form className="login__form" action="">

                {step === 1 && (
                    <div className="login__form-content">
                        <div className="login__form-field">
                            <Input
                                icon={<PiUserCirclePlusDuotone />}
                                type="text"
                                name="firstName"
                                position="left"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="login__form-field">
                            <Input
                                icon={<PiUserCirclePlusDuotone />}
                                type="text"
                                name="lastName"
                                position="left"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                )}

                {step === 2 && (

                    <div className="login__form-field">
                        <div className="login__form-field-action">
                            <MonthField
                            />
                            <Input
                                icon={<IoTodayOutline />}
                                position="left"
                                placeholder="Day"
                                type="text"
                                inputProps={{
                                    pattern: "^[0-9]+$",
                                    maxLength: 2,
                                    onInput: (e) => {
                                        const cleaned = e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                        const num = Math.min(Math.max(Number(cleaned), 1), 31);
                                        e.target.value = cleaned === "" ? "" : String(num);
                                    }
                                }}
                            />
                            <Input
                                icon={<LuCalendarDays />}
                                position="left"
                                placeholder="Year"
                                type="text"
                                inputProps={{
                                    pattern: "^[0-9]+$",
                                    maxLength: 4,
                                    onInput: (e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                    }
                                }}
                            />
                        </div>
                        <div className="login__form-field-action">
                            <Select
                                title="Gender"
                                item={genders}
                            />
                        </div>
                        {/* <Input type="number" name="birthMonth" placeholder="Month" min="1" max="12" />
                            <Input type="number" name="birthYear" placeholder="Year" min="1900" max={new Date().getFullYear()} /> */}
                    </div>


                )}

                {step === 3 && (
                    <div className="login__form-field">
                        <Input
                            icon={<MdAlternateEmail />}
                            inputProps={{
                                name: "register_email",
                            }}
                            type="text"
                            position="left"
                            placeholder="Email"
                        />
                        <Input
                            icon={<SiAuthelia />}
                            inputProps={{
                                name: "login_email",
                            }}
                            type="password"
                            showPassword={true}
                            position="left"
                            placeholder="Password "
                        />
                        <Input
                            icon={<RiLockPasswordLine />}
                            inputProps={{
                                name: "password",
                            }}
                            type="password"
                            showPassword={true}
                            position="left"
                            placeholder="Password Confirm"
                        />
                    </div>
                )}


                <div className="login__form-control">
                    <div className="login__form-control-action">
                        <HoverButton
                            type="button"
                            onClick={handlePrev}
                            disabled={step === 1}
                        >
                            Prev
                        </HoverButton>
                    </div>

                    <div className="login__form-control-action">
                        <HoverButton
                            type="button"
                            onClick={handleNext}
                            disabled={step === 3}
                        >
                            Next
                        </HoverButton>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Register;
