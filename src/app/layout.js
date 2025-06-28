import "./globals.css";
import MyApp from "./app";

export const metadata = {
    title: "Candy Store",
    description: "Candy Store",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt">
            <body>
                <div className='body-div'>
                    <div className='main' >
                        <div className='container-root'>
                            <MyApp>
                                {children}
                            </MyApp>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
