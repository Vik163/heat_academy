import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import type { SidebarItemType } from '../../model/types/sidebar';
import { Button, ButtonRadius } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import arrow from '@/shared/assets/icons/icon-arrow-top.svg';

interface SidebarItemProps {
   item: SidebarItemType;
   collapsed: boolean;
   addLinks?: (text: string) => void;
   isAddLinks?: boolean;
}

export const SidebarItem = memo(({ item, collapsed, addLinks, isAddLinks }: SidebarItemProps) => {
   return (
      <div className={cls.SidebarItem}>
         {!item.path && (
            <Button
               onClick={addLinks && (() => addLinks(item.text))}
               radius={ButtonRadius.RADIUS_NONE}
               className={classNames(cls.item, {}, [cls.linkButton])}
            >
               <span className={cls.link}>{item.text}</span>
               <Icon className={classNames(cls.arrow, { [cls.arrowActive]: isAddLinks }, [])} Svg={arrow} />
            </Button>
         )}
         {item.path && (
            <AppLink
               to={item.path}
               className={classNames(cls.item, {
                  [cls.collapsed]: collapsed,
                  [cls.nested]: item.nested,
               })}
               activeClassName={cls.active}
            >
               {/* <Icon Svg={item.Icon} /> */}
               <span className={cls.link}>{item.text}</span>
            </AppLink>
         )}
      </div>
   );
});
