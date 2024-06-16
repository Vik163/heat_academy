import { memo, useState } from 'react';

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
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
   const [isAddLinks, setIsAddLinks] = useState(false);
   console.log('isAddLinks:', isAddLinks);
   const addLinks = () => {
      setIsAddLinks(!isAddLinks);
   };

   return !item.path ? (
      <Button radius={ButtonRadius.RADIUS_NONE} className={classNames(cls.item, {}, [cls.linkButton])}>
         <span className={cls.link}>{item.text}</span>
         <Icon
            onClick={addLinks}
            className={classNames(cls.arrow, { [cls.arrowActive]: isAddLinks }, [])}
            Svg={arrow}
         />
      </Button>
   ) : (
      <AppLink
         to={item.path}
         className={classNames(cls.item, {
            [cls.collapsed]: collapsed,
         })}
         activeClassName={cls.active}
      >
         {/* <Icon Svg={item.Icon} /> */}
         <span className={cls.link}>{item.text}</span>
      </AppLink>
   );
});
