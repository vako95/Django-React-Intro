import { useState } from "react";
import { HoverButton, HoverLink } from "@components/ui";

import { IoKeyOutline } from "react-icons/io5";
import "./Register.css";
import Input from "../../ui/Input/Input";
import { MdAlternateEmail } from "react-icons/md";
import { TbUserHexagon } from "react-icons/tb";
import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { SiAuthelia } from "react-icons/si";
import Select from "../../ui/Select/Select";
const Register = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prev) => prev + 1)
    }
    const handlePrev = () => {
        setStep((prev) => prev - 1)
    }

    const genders = [
        { label: "M", value: "Male" },
        { label: "F", value: "Female" },
        { label: "o", value: "Other" }
    ]
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
                        <div class="login__form-field">
                            <Input
                                icon={<PiUserCirclePlusDuotone />}
                                type="text"
                                name="username"
                                showPassword={true}
                                position="left"
                                placeholder="username"
                            />
                            <Input
                                icon={<PiUserCirclePlusDuotone />}
                                type="text"
                                name="username"
                                position="left"
                                placeholder="Last Name"
                            />
                        </div>
                        {step === 2 && (
                            <div class="login__form-field">
                                <Input
                                    icon={<PiUserCirclePlusDuotone />}
                                    type="text"
                                    name="username"
                                    position="left"
                                    placeholder="Last Name"
                                />
                            </div>
                        )}

                        <div class="login__form-field">
                            <Select
                                title="Gender"
                                items={genders}

                            />
                        </div>

                    </div>
                )}
                {step === 2 && (
                    <div className="login__form-content">
                        <div class="login__form-field">
                            <Input
                                icon={<MdAlternateEmail />}
                                type="text"
                                name="surname"
                                showPassword={true}
                                position="left"
                                placeholder="surname"
                            />
                        </div>
                        <div class="login__form-field">
                            <Input
                                icon={<TbUserHexagon />}
                                type="text"
                                name="username"
                                showPassword={true}
                                position="left"
                                placeholder="username"
                            />
                        </div>
                        <div class="login__form-field">
                            <Input
                                icon={<MdAlternateEmail />}
                                type="text"
                                name="username"
                                showPassword={true}
                                position="left"
                                placeholder="username"
                            />
                        </div>


                    </div>

                )}

                <HoverButton type="button" onClick={handlePrev}>
                    Prev
                </HoverButton>
                <HoverButton type="button" onClick={handleNext}>
                    Next
                </HoverButton>
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