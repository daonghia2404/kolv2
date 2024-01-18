import React, { useEffect } from 'react';
import classNames from 'classnames';

import { TStepsProps } from './Steps.types.d';

const Steps: React.FC<TStepsProps> = ({ options = [], value, onChange, lineWidth }) => {
  const passIndexStep = options.findIndex((option) => option.id === value?.id);
  const activeStep = options.find((option) => option.id === value?.id);

  useEffect(() => {
    if (!value) onChange?.(options?.[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Steps">
      <div className="Steps-step flex items-center justify-between">
        {options.map((item, index) => {
          return (
            <>
              <div
                key={item.id}
                className={classNames('Steps-step-item flex items-center justify-center', {
                  active: index <= passIndexStep,
                  'cursor-pointer': index < passIndexStep,
                })}
                onClick={(): void => {
                  if (index < passIndexStep) onChange?.(item);
                }}
              >
                {index + 1}
                {item?.title && <div className="Steps-step-item-title">{item.title}</div>}
              </div>
              {index < options.length - 1 && (
                <div
                  key={item.id}
                  className={classNames('Steps-step-item-line', { active: index < passIndexStep })}
                  style={{
                    flex: `0 0 ${lineWidth || `calc(100% / ${options.length})`}`,
                    width: `${lineWidth || `calc(100% / ${options.length})`}`,
                    maxWidth: `${lineWidth || `calc(100% / ${options.length})`}`,
                  }}
                />
              )}
            </>
          );
        })}
      </div>
      {activeStep && <div className="Steps-children">{activeStep?.children}</div>}
    </div>
  );
};

export default Steps;
