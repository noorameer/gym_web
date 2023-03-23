import React from 'react'
import '../css/Login.css'

function Login() {


                        return (
                                                <div className="Login" id='log'>
                                                                        <img src="../img/login.jpg" alt="" id='imgg' />
                                                                        <h1 id='h1'>تسجيل الدخول</h1>
                                                                        <p> البريد الألكتروني</p>
                                                                        <input class="input" type="email" placeholder="email@gmail.com" />
                                                                        <p>كلمة المرور</p>
                                                                        <input class="input" type="password" placeholder="*****" />
                                                                        <a href='App.jsx '> نسيت كلمة المرور ؟</a>
                                                                        <button id='button' >تسجيل الدخول</button>


                                                </div>
                        )
}

export default Login