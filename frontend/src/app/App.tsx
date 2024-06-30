import React, { memo, useEffect } from 'react';

import emailjs from '@emailjs/browser';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { Header } from '@/widgets/Header';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './router';
import { Footer } from '@/widgets/Footer';

const App = memo(() => {
   useEffect(
      () =>
         emailjs.init({
            publicKey: process.env.REACT_APP_SERVICE_ID_PUBLIC_KEY,
         }),
      [],
   );

   return (
      <VStack justify={FlexJustify.CENTER} className={classNames('app', {}, ['app_colors'])}>
         <Header />
         <Navbar />
         <main className='main'>
            <AppRouter />
         </main>
         <Footer />
      </VStack>
   );
});

export default App;
