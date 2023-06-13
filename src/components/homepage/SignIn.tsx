import React, { useState } from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

const SignIn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [screen, setScreen] = useState<"signin" | "signup">("signin");
    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className="p-2 bg-indigo-500">
                Login
            </button>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <div className="flex flex-col">
                    <h2 className="text-2xl mb-6">Login</h2>
                    <Input label="email" />
                    <Input label="password" type="password" />
                    <Button className="mt-4">Zaloguj</Button>
                </div>
            </Modal>
        </div>
    );
};

export default SignIn;
