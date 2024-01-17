'use client'
import React from 'react';
import { bouncy } from 'ldrs'
// Default values shown
const LoadingSpinner = () => {
        bouncy.register('l-bouncy');

    return (
        <div className="flex justify-right">
            <div></div>
        <div></div>
        </div>
    )
}

export default LoadingSpinner;