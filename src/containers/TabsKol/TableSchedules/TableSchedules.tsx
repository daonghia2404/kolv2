import React from 'react';
import classNames from 'classnames';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import moment from 'moment';
import { EFormat } from '@/common/enums';

import { TTableSchedulesProps } from './TableSchedules.types';

const TableSchedules: React.FC<TTableSchedulesProps> = () => {
  return (
    <div className="TableSchedules">
      <div className="TableSchedules-wrapper">
        <div className="TableSchedules-header flex items-center justify-between">
          <div className="TableSchedules-header-item">
            <Button
              title="Week 1"
              styleType={EButtonStyleType.TEXT_HEATHER}
              iconName={EIconName.ArrowLeftShort}
              iconColor={EIconColor.HEATHER}
            />
          </div>
          <div className="TableSchedules-header-item flex items-center">
            04/04/2023
            <span>-</span>
            11/04/2023
          </div>
          <div className="TableSchedules-header-item">
            <Button
              title="Week 2"
              styleType={EButtonStyleType.TEXT_HEATHER}
              iconName={EIconName.ArrowRightShort}
              iconColor={EIconColor.HEATHER}
              reverse
            />
          </div>
        </div>
        <div className="TableSchedules-body">
          {[2, 3, 4, 5, 6, 7, 1].map((item) => {
            const dayOfWeekText = moment({ day: item }).format(EFormat.dddd);
            const isToday = moment().day() - 2 === item;
            const isDisabled = [2, 1].includes(item);

            return (
              <div
                key={item}
                className={classNames('TableSchedules-body-item-wrapper flex items-center justify-between', {
                  disabled: isDisabled,
                })}
              >
                <div className="TableSchedules-body-item">
                  {dayOfWeekText} {isToday && <span>(Today)</span>}
                </div>
                <div className="TableSchedules-body-item flex items-center justify-center">
                  12:00 AM
                  <span>-</span>
                  11:00 AM
                  <Icon name={EIconName.ArrowsReverseSquare} color={EIconColor.WHITE} />
                </div>
                <div className="TableSchedules-body-item flex justify-end">
                  <Button
                    title="Book now"
                    styleType={EButtonStyleType.TEXT_RED}
                    iconName={EIconName.ArrowRight}
                    iconColor={EIconColor.RADICAL_RED}
                    reverse
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TableSchedules;
