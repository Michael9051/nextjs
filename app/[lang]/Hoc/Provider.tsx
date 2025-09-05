import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import { Toaster } from "react-hot-toast";

const Provider = ({children}:{children:ReactNode}) => {
  return (
    <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }}/>
        {children}
    </ThemeProvider>
  )
}

export default Provider