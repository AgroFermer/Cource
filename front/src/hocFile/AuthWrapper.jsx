import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../pages/index';
import LoginForm from '../components/LoginForm';
import styles from "../styles/loading.module.scss"
import { SidebarProvider } from "../context/SidebarContext";


const AuthWrapper = ({ Component, pageProps }) => {
  const { store } = useContext(Context);
  

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return (
        <div className={styles['spin-wrapper']}>
        <div className={styles['spinner']}>
        </div>
    </div>
    );
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  
)};

export default observer(AuthWrapper);
