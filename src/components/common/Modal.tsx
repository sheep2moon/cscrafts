import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

type ModalProps = {
    isOpen: boolean;
    close: () => void;
    children: React.ReactNode;
};

const Modal = ({ isOpen, close, children }: ModalProps) => {
    return (
        <div className=" z-[99] bg-dark">
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-[9999]" onClose={close}>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-light bg-opacity-50 dark:bg-black/50" />
                        </Transition.Child>

                        <div className="fixed left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 w-full flex justify-center shadow-md shadow-black/50 dark:bg-dark ">
                            <div className="top-1/2 flex items-center justify-center text-center">
                                <Transition.Child as={Fragment} enter="ease-out duration-100" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                                    <Dialog.Panel className="relative align-middle transition-all  md:max-w-[480px] p-4 px-12 rounded-md bg-black shadow-md shadow-white/20 w-full">
                                        <button onClick={close} className="z-10 flex ml-auto items-center justify-start text-secondary text-3xl dark:bg-dark dark:text-secondary ">
                                            <p>X</p>
                                            <label className="sr-only">Zamknij</label>
                                        </button>
                                        <div className="w-full py-4 ">
                                            <div className="flex flex-col pb-4 text-primary dark:text-light">{children}</div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </div>
    );
};

export default Modal;
