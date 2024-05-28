import { memo, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemType } from '../../model/types/sidebar';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { getRouteMain } from '@/shared/const/router';

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(false);
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
         {/* сворачивание сайдбара */}
         <div className={cls.switchers}></div>
      </aside>
   );
});
