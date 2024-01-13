import React from 'react'
import { bouncy } from 'ldrs'
// Default values shown
const LoadingSpinner = () => {
    bouncy.register('l-bouncy');
    return (
        <div className="flex justify-center">
        <l-bouncy
            size="116"
            speed="1.2"
            color="purple"
        ></l-bouncy>
        </div>
    )
}

export default LoadingSpinner;