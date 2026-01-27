import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Junior-Frontend-Deveoloper-Task",
   
  description:"A frontend task for a junior developer",
   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={` antialiased`}
      >
          {/* <AuthProvider>


       <ClientLayout> */}

       <main>
        
        {children}
        </main>
       {/* </ClientLayout>
        </AuthProvider> */}
      </body>
    </html>
  );
}
