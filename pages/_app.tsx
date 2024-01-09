import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react';
import { initializeUser, getUser } from '../repository/userRepository';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
        const init = async () => {
            try {
                await initializeUser();
            } catch (error) {
                console.error('Error during user initialization:', error);
            }
        };

        init();
    }, []);

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
