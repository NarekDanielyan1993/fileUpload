import MainLayout from '@/components/layout';
import { AuthProvider } from '@/store/auth/provider';
import { SWRProvider } from '@/store/swr/provider';
import { SnackbarProvider } from 'notistack';
import 'styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <SnackbarProvider>
            <AuthProvider>
                <SWRProvider fallback={pageProps.fallback}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </SWRProvider>
            </AuthProvider>
        </SnackbarProvider>
    );
}
