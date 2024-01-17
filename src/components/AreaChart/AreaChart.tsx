// @ts-nocheck
import React from 'react';
import dynamic from 'next/dynamic';

import { EIconColor } from '@/components/Icon';

import { TAreaChartProps } from './AreaChart.types.d';

const Area = dynamic(() => import('@ant-design/plots').then(({ Area }) => Area), { ssr: false });

const AreaChart: React.FC<TAreaChartProps> = ({ data = [], xField, yField, configs = {} }) => {
  const config = {
    data,
    xField,
    yField,
    axis: {
      x: {
        arrow: false,
        line: false,
        tick: false,
        labelFontSize: 12,
        labelFontWeight: 600,
        labelFill: EIconColor.HEATHER,
      },
      y: {
        arrow: false,
        line: false,
        tick: false,
        label: false,
      },
    },
    line: {
      style: {
        stroke: EIconColor.RADICAL_RED,
        strokeWidth: 2,
      },
      shapeField: 'smooth',
    },
    shapeField: 'smooth',
    style: {
      fill: 'linear-gradient(-90deg, rgba(255, 26, 110, 0.1), rgba(243, 100, 153, 0.3), rgba(255, 26, 110, 1))',
    },
    ...configs,
  };

  return <Area {...config} />;
};

export default AreaChart;
