import React, {FC, useContext, useState} from 'react';
import {Context} from "../pages/index";
import {observer} from "mobx-react-lite";
import styles from '../styles/auth.module.scss'
import Image from "next/image";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);
   

    return (
            <div className={styles['login-box']}>
                <img className={styles['imag']} src="/img_1.png"/>
                <h2>Login</h2>
                <form>
                <div className={styles["user-box"]}>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        required
                    />
                    <label>Username</label>
                </div>
                <div className={styles["user-box"]}>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            required
                        />
                        <label>Password</label>
                </div>
               
                <a onClick={() => store.login(email, password)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
                <a onClick={() => store.registration(email, password)}>
                    Регистрация
                </a>
                </form>
            </div>
    );
};

export default observer(LoginForm);