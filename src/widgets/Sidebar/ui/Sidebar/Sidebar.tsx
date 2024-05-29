import { memo, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemType } from '../../model/types/sidebar';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Text, FontSize, FontWeight } from '@/shared/ui/Text';
import { getRouteMain } from '@/shared/const/router';
import { Modal } from '@/shared/ui/Modal';

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(false);
   const [openModal, setOpenModal] = useState(false);

   const sidebarItemsList = useSidebarItems(); // 16_18 8min

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   const itemsList = useMemo(
      () =>
         sidebarItemsList.map((item: SidebarItemType) => (
            <SidebarItem item={item} collapsed={collapsed} key={item.path} />
         )),
      [collapsed, sidebarItemsList],
   );

   return (
      <aside
         className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
         ])}
      >
         <nav>
            <Link to={getRouteMain()} className={classNames(cls.logo)}>
               Инженерный Центр
               <span className={cls.logoName}> &quot;Академия Тепла&quot;</span>
            </Link>
            <VStack
               role='navigation'
               className={cls.items}
               align={FlexAlign.START}
            >
               {itemsList}
            </VStack>
         </nav>
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
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Виды работ
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Отзывы клиентов
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Акции
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Контакты
                  </Text>
               </VStack>
            </Modal>
         )}
      </aside>
   );
});
