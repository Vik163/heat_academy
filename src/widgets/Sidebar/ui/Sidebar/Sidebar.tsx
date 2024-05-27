import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { Icon } from '@/shared/ui/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { SidebarItemType } from '../../model/types/sidebar';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';

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
         className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className],
         )}
      >
         <VStack role='navigation' gap={8} className={cls.items}>
            {itemsList}
         </VStack>
         {/* сворачивание сайдбара */}
         <Icon className={cls.collapseBtn} Svg={ArrowIcon} />
         <div className={cls.switchers}></div>
      </aside>
   );
});
