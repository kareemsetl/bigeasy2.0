import React from 'react';
import { useRouter } from 'next/router';
import LoadingSpinner from '~/components/ui/LoadingSpinner'; // Adjust the import path as needed

interface RouterReadyWrapperProps {
    children: React.ReactNode;
}

const RouterReadyWrapper: React.FC<RouterReadyWrapperProps> = ({ children }) => {
    const router = useRouter();

    if (!router.isReady) {
        // Render a loading spinner or return null if you don't want anything rendered
        return <LoadingSpinner />;
    }

    return <>{children}</>;
};

export default RouterReadyWrapper;
