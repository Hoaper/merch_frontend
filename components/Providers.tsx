'use client';
import React from 'react';
import {SDKProvider} from "@tma.js/sdk-react";

function Providers({children}: {children: React.ReactNode}) {
    return (
        <SDKProvider options={{ cssVars: true, acceptCustomStyles: true, async: true }}>
            {children}
        </SDKProvider>
    );
}

export default Providers;