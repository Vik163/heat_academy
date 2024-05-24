import React, { memo } from 'react';

import cls from './App.module.scss';

import { FontSize, Text } from '../shared/ui/Text';
import { classNames } from '../shared/lib/classNames/classNames';

const App = memo(() => {
   return (
      <div className={classNames(cls.app, {}, [])}>
         <Text fontSize={FontSize.SIZE_44}>App</Text>
         {/* {!basketPage && <Header />}
      <AppRouter />
      <Footer /> */}
      </div>
   );
});

export default App;
