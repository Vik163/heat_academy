import React, { memo } from 'react';

import { FontSize, FontWeight, Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { Header } from '@/widgets/Header';

const App = memo(() => {
   return (
      <VStack
         justify={FlexJustify.CENTER}
         className={classNames('app', {}, ['app_colors'])}
      >
         <Header />
         {/* <img src={image} alt='sdfsd' className={cls.containerImage} /> */}
         <VStack gap={20}>
            <Text style={{ fontFamily: 'Inter' }} fontSize={FontSize.SIZE_44}>
               3 Академия тепла
            </Text>
            <Text
               style={{ fontFamily: 'Inter' }}
               fontSize={FontSize.SIZE_44}
               fontWeight={FontWeight.TEXT_700}
            >
               3 Академия тепла
            </Text>
         </VStack>
         {/* {!basketPage && <Header />}
      <AppRouter />
      <Footer /> */}
      </VStack>
   );
});

export default App;
