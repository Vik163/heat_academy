import React from 'react';

interface SidebarItem {
   path?: string;
   text?: string;
   Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export interface SidebarItemType extends SidebarItem {
   addItems?: SidebarItem[];
}
