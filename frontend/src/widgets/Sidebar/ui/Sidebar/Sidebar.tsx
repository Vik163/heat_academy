import { memo, useCallback, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemType } from '../../model/types/sidebar';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Text, FontSize, FontWeight } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { Logo } from '@/shared/ui/Logo';

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const [isAddLinks, setIsAddLinks] = useState<string[]>([]);
   const [sidebarItemsList, setSidebarItemsList] = useState(useSidebarItems());

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   const addLinks = useCallback(
      (text: string) => {
         if (isAddLinks.length < 1) {
            setIsAddLinks([text]);
         } else {
            isAddLinks.forEach((item) => {
               if (text === item) {
                  const w = isAddLinks.filter((arritem) => arritem !== text);
                  setIsAddLinks(w);
               } else if (text !== item && isAddLinks.length === 1) {
                  const q = isAddLinks.concat([text]);
                  setIsAddLinks(q);
               }
            });
         }

         sidebarItemsList.forEach((item: SidebarItemType, i: number) => {
            if (isAddLinks.some((link) => item.text === link) && item.text === text) {
               return sidebarItemsList.splice(i + 1, 2);
            }
            if (item.addItems && item.text === text) {
               return sidebarItemsList.splice(i + 1, 0, ...item.addItems);
            }
         });
         setSidebarItemsList(sidebarItemsList);
      },
      [isAddLinks],
   );

   const itemsList = useMemo(
      () =>
         sidebarItemsList.map((item: SidebarItemType, i: number) => {
            return (
               <SidebarItem
                  addLinks={addLinks}
                  isAddLinks={isAddLinks.some((link) => item.text === link)}
                  item={item}
                  collapsed={collapsed}
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
               />
            );
         }),
      [addLinks, collapsed, isAddLinks, sidebarItemsList],
   );

   return (
      <nav className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
         <Logo className={cls.logo} />
         <VStack role='navigation' className={cls.items} align={FlexAlign.START}>
            {itemsList}
         </VStack>
         {/* сворачивание сайдбара */}
         <div className={cls.switchers}></div>
         {openModal && (
            <Modal
               isOpen={openModal}
               onClose={() => setOpenModal(false)}
               buttonCloseHeight={30}
               buttonCloseWidth={30}
               buttonCloseRight={30}
               buttonCloseTop={30}
               className={cls.modalMenu}
            >
               <VStack align={FlexAlign.START} className={cls.containerLinks}>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Виды работ
                  </Text>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Отзывы клиентов
                  </Text>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Акции
                  </Text>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Контакты
                  </Text>
               </VStack>
            </Modal>
         )}
      </nav>
   );
});
