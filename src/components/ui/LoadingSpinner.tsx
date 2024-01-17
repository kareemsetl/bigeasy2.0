'use client'
import React, { useEffect } from 'react';
import { bouncy } from 'ldrs'
// Default values shown
const LoadingSpinner = () => {
        bouncy.register('l-bouncy');

    return (
        <div className="flex justify-right">
            <div></div>
        <l-bouncy
            size="116"
            speed="1.2"
            color="purple"
            class ="center"
        ></l-bouncy>
        <div></div>
        </div>
    )
}

export default LoadingSpinner;