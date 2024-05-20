// hooks/useRouteClassName.ts
'use client'; // Ensure this hook runs on the client side

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useRouteClassName = (): string => {
  const router = useRouter();
  const [className, setClassName] = useState<string>('');

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Define your logic to determine the className based on the route
      if (url.startsWith('/about')) {
        setClassName('about-page');
      } else if (url.startsWith('/contact')) {
        setClassName('contact-page');
      } else {
        setClassName('default-page');
      }
    };

    // Initial check
    handleRouteChange(router.pathname);

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return className;
};

export default useRouteClassName;
