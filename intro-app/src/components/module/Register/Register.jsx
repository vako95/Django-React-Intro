import { useState } from "react";
import { HoverButton, HoverLink } from "@components/ui";
import { IoKeyOutline } from "react-icons/io5";
import "./Register.css";

import { Select, Input, MonthField } from "@components/ui"
import { PiUserCirclePlusDuotone } from "react-icons/pi";

const Register = () => {
    const [step, setStep] = useState(1);

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
                    <>
                        <div className="login__form-field">
                            <MonthField

                            />
                            <Select
                                title="Gender"
                                items={genders}
                            />
                            {/* <Input type="number" name="birthMonth" placeholder="Month" min="1" max="12" />
                            <Input type="number" name="birthYear" placeholder="Year" min="1900" max={new Date().getFullYear()} /> */}
                        </div>

                    </>
                )}

                {step === 3 && (
                    <div className="login__form-field">
                        <Select
                            title="Gender"
                            items={genders}
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
