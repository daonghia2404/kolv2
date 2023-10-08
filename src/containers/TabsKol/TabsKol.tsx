import React from 'react';

import Tabs from '@/components/Tabs';
import TableSchedules from '@/containers/TabsKol/TableSchedules';

import { TTabsKolProps } from './TabsKol.types.d';

const TabsKol: React.FC<TTabsKolProps> = () => {
  const dataTabsKol = [
    {
      key: 'about',
      title: 'About',
      children: <TableSchedules />,
    },
    {
      key: 'services',
      title: 'Services',
      children: <TableSchedules />,
    },
    {
      key: 'schedule',
      title: 'Schedule',
      children: <TableSchedules />,
    },
    {
      key: 'price',
      title: 'Price',
      children: <TableSchedules />,
    },
  ];

  return (
    <div className="TabsKol">
      <Tabs options={dataTabsKol} />
    </div>
  );
};

export default TabsKol;
