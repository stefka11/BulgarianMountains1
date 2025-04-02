import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../context/UserContext";

export default function Login({}) {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);  //Получаваме данните от формата
        console.log(values);

        if ((values.email !='') && (values.password !='')){
            const authData = await login(values.email, values.password); //пращаме ги на сървъра с Хоока
        
            userLoginHandler(authData);   //при успешно логване подаваме на onLogin-цялата информация за логнатия, и отива в App,js
            navigate('/');  //връщаме се на katalog
        } else {
            navigate('/login');  //
        }
    }
     const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });
    //console.log(values); action={loginAction}   <form id="login" className="mx-auto mt-16 max-w-xl sm:mt-20">

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Вход</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Aute .....</p>
            </div>

            <form id="login" action={loginAction} className="mx-auto mt-16 max-w-xl sm:mt-20">
            
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Потребителско име
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                            Парола
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <input
                        type="submit"
                        value="Потвърди"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    />
                    <p className="field">
                        <span>Ако нямате профил, натиснете<Link to="/register">тук ...</Link></span>
                    </p>
                </div>
            </form>
        </div>
    )
}