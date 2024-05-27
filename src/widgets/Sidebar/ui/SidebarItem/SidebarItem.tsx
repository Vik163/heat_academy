import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon';
import type { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
   item: SidebarItemType;
   collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
   return (
      <AppLink
         to={item.path}
         className={classNames(cls.itemRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
         })}
         activeClassName={cls.active}
      >
         <Icon Svg={item.Icon} />
         <span className={cls.link}>{item.text}</span>
      </AppLink>
   );
});
