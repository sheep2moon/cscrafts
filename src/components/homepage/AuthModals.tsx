import React, { useState } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";
import clsx from "clsx";
import { supabase } from "../../supabase";

const AuthModals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [screen, setScreen] = useState<"signin" | "signup">("signin");

    const close = () => setIsModalOpen(false);

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className="p-2 bg-indigo-500">
                Login
            </button>
            <Modal isOpen={isModalOpen} close={close}>
                <div className="flex flex-col h-[300px]">
                    <div className="grid grid-cols-3 justify-between mb-6">
                        <button onClick={() => setScreen("signin")} className={clsx("text-2xl", { "text-white": screen === "signin", "text-white/40": screen !== "signin" })}>
                            Login
                        </button>
                        <span>|</span>
                        <button onClick={() => setScreen("signup")} className={clsx("text-2xl", { "text-white": screen === "signup", "text-white/40": screen !== "signup" })}>
                            Register
                        </button>
                    </div>
                    {screen === "signin" && <LoginScreen close={close} />}
                    {screen === "signup" && <RegisterScreen close={close} />}
                </div>
            </Modal>
        </div>
    );
};

type AuthScreenProps = {
    close: () => void;
};

const LoginScreen = ({ close }: AuthScreenProps) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleLogin = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (loginData.email && loginData.password) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: loginData.email,
                password: loginData.password
            });
            console.log(data, error);

            if (data.user) close();
        }
    };

    return (
        <form onSubmit={handleLogin} className="h-full flex flex-col">
            <Input type="email" value={loginData.email} onChange={e => setLoginData(prev => ({ ...prev, email: e.target.value }))} label="email" />
            <Input value={loginData.password} onChange={e => setLoginData(prev => ({ ...prev, password: e.target.value }))} label="password" type="password" />
            <Button type="submit" className="mt-auto">
                Login
            </Button>
        </form>
    );
};

const RegisterScreen = ({ close }: AuthScreenProps) => {
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        repeatPassword: ""
    });

    const handleRegister = async () => {
        const { email, password, repeatPassword } = registerData;
        if (password === repeatPassword) {
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            });
            if (data.user) close();
        }
    };

    return (
        <form className="h-full flex flex-col" onSubmit={handleRegister}>
            <Input type="email" value={registerData.email} onChange={e => setRegisterData(prev => ({ ...prev, email: e.target.value }))} label="email" />
            <Input value={registerData.password} onChange={e => setRegisterData(prev => ({ ...prev, password: e.target.value }))} label="password" type="password" />
            <Input value={registerData.repeatPassword} onChange={e => setRegisterData(prev => ({ ...prev, repeatPassword: e.target.value }))} label="repeat password" type="password" />
            <Button type="submit" variant="primary" className="mt-auto">
                Register
            </Button>
        </form>
    );
};

export default AuthModals;
