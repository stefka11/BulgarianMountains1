import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link } from 'react-router'
import useAuth from '../../hooks/useAuth'

export default function Header() {
    //const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { email, isAuthenticated } = useAuth();

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <h1><Link to="/">Начало</Link></h1>
                </div>

                <div className="flex lg:hidden">
                    {/* <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button> */}
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div style={{ padding: 20 }}><Link to="/catalog">Каталог</Link></div>

                    {/* <!-- Logged-in users --> */}
                    {isAuthenticated
                        ? (
                            <div id="user" className="text-sm/8 font-semibold text-gray-900"
                                style={{
                                    display: 'flex', flexDirection: 'row',
                                    //backgroundColor: 'blue',
                                    textAlign: 'center',
                                    //padding: 40,
                                }}>

                                <div style={{ padding: 20 }}><Link to="/article/create">Нова статия</Link></div>
                                <div style={{ padding: 20 }}><Link to="/logout">Изход</Link></div>

                            </div>
                        )
                        : (
                            <div id="guest" className="text-sm/6 font-semibold text-gray-900"
                                style={{
                                    display: 'flex', flexDirection: 'row',
                                }}>
                                <div style={{ padding: 20 }}><Link to="/login">Вход</Link></div>
                                <div style={{ padding: 20 }}><Link to="/register">Регистрация</Link></div>
                            </div>
                        )
                    }
                    {/* {navigation.map((item) => (
                        <a key={item.name} href={item.path} className="text-sm/6 font-semibold text-gray-900">
                            {item.name}
                        </a>
                    ))} */}

                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {email}
                    {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a> */}
                </div>
            </nav>

            {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.path}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                </DialogPanel>
            </Dialog> */}
        </header >
    )
}