import React, { useState } from "react";
import "./AuthForm.css"; // здесь будут стили (ниже тоже покажу)

const AuthForm = () => {
    const [activeForm, setActiveForm] = useState("login");

    const forms = [
        { key: "login", label: "Login" },
        { key: "register", label: "Register" },
        { key: "forgot", label: "Forgot Password" },
    ];

    // 👇 Твоя логика сортировки
    const allFormKeys = forms.map(f => f.key); // ["login", "register", "forgot"]
    const otherForms = allFormKeys.filter(f => f !== activeForm); // без активной
    const sortedForms = [activeForm, ...otherForms]; // активная сверху

    return (
        <div className="auth-container">
            {/* Левая колонка: кнопки */}
            <div className="auth-sidebar">
                {sortedForms.map(key => {
                    const form = forms.find(f => f.key === key); // получаем объект формы по ключу
                    return (
                        <button
                            key={key}
                            className={key === activeForm ? "active" : ""}
                            onClick={() => setActiveForm(key)}
                        >
                            {form.label}
                        </button>
                    );
                })}
            </div>

            {/* Правая колонка: контент активной формы */}
            <div className="auth-content">
                {activeForm === "login" && <h2>Login Form</h2>}
                {activeForm === "register" && <h2>Register Form</h2>}
                {activeForm === "forgot" && <h2>Forgot Password Form</h2>}
            </div>
        </div>
    );
};

export default AuthForm;
