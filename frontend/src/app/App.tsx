import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './router';
import { Footer } from '@/widgets/Footer';

const App = memo(() => {
   return (
      <VStack
         justify={FlexJustify.CENTER}
         className={classNames('app', {}, ['app_colors'])}
      >
         <Header />
         <Sidebar />
         <main className='main'>
            <AppRouter />
         </main>
         <Footer />
      </VStack>
   );
});

export default App;
