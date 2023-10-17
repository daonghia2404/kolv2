import React from 'react';

import Tabs from '@/components/Tabs';
import TableSchedules from '@/containers/TabsKol/TableSchedules';

import { TTabsKolProps } from './TabsKol.types.d';
import Services from '@/containers/TabsKol/Services';

const TabsKol: React.FC<TTabsKolProps> = () => {
  const dataTabsKol = [
    {
      key: 'about',
      title: 'About',
      children: <></>,
    },
    {
      key: 'services',
      title: 'Services',
      children: <Services />,
    },
    {
      key: 'schedule',
      title: 'Schedule',
      children: <TableSchedules />,
    },
    {
      key: 'price',
      title: 'Price',
      children: <></>,
    },
  ];

  return (
    <div className="TabsKol">
      <Tabs defaultKey="schedule" options={dataTabsKol} />
    </div>
  );
};

export default TabsKol;
