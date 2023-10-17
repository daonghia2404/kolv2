import React, { useEffect, useState } from 'react';
import { Tabs as AntdTabs } from 'antd';
import { useRouter } from 'next/router';

import { removeParam } from '@/utils/functions';

import { TTabsProps } from './Tabs.types.d';

const Tabs: React.FC<TTabsProps> = ({ options = [], defaultKey, onKeyChange }) => {
  const key = 'tabKey';
  const router = useRouter();
  const { asPath } = router;

  const [activeKey, setActiveKey] = useState<string | null>(defaultKey || null);

  const handleTabChange = (activeKeyChanged: string): void => {
    // router.push({ pathname: removeParam(asPath), query: { [key]: activeKeyChanged } });
    setActiveKey(activeKeyChanged);
  };

  useEffect(() => {
    if (router?.query?.[key]) {
      const keyTab = router?.query?.[key] as string;
      setActiveKey(keyTab);
      onKeyChange?.(keyTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  useEffect(() => {
    if (!activeKey) setActiveKey(options[0].key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (router.isReady && !activeKey && !router?.query?.[key]) {
  //     router.push({ pathname: removeParam(asPath), query: { [key]: options[0].key } });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.isReady]);

  return (
    <div className="Tabs">
      <AntdTabs activeKey={activeKey as string} onChange={handleTabChange}>
        {options.map((option) => (
          <AntdTabs.TabPane tab={option.title} key={option.key}>
            {activeKey === option.key && option.children}
          </AntdTabs.TabPane>
        ))}
      </AntdTabs>
    </div>
  );
};

export default Tabs;
