'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import {NextUIProvider} from "@nextui-org/react";


type DefaultTemplateProps = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
};

export default function Providers({
  children,
  themeProps,
}: DefaultTemplateProps) {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <NextUIProvider>
        <NextThemesProvider forcedTheme="dark" {...themeProps}>     
          {children} 
        </NextThemesProvider>   
    </NextUIProvider>
    </QueryClientProvider>
  );
}
