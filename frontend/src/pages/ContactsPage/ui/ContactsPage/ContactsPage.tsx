import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ContactsPage.module.scss';

interface ContactsPageProps {
   className?: string;
}

export const ContactsPage = memo((props: ContactsPageProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.ContactsPage, {}, [className])}>
         CONTACTSPAGE
      </div>
   );
});
