import React from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { ECreditCardType } from '@/components/CreditCard';

import { TPlanCardProps } from './PlanCard.types.d';

const PlanCard: React.FC<TPlanCardProps> = ({ type, active, credits = 0, title, features = [], onClick }) => {
  return (
    <div className={classNames('PlanCard', type, { active })} onClick={onClick}>
      <div className="PlanCard-header flex items-center">
        <div className="PlanCard-header-icon">
          {type === ECreditCardType.BRONZE && <Icon name={EIconName.CoinBronze} />}
          {type === ECreditCardType.SILVER && <Icon name={EIconName.CoinSilver} />}
          {type === ECreditCardType.RED && <Icon name={EIconName.CoinRed} />}
          {type === ECreditCardType.GOLD && <Icon name={EIconName.Coin} />}
        </div>
        <div className="PlanCard-header-info">
          <div className="PlanCard-header-info-title">{title}</div>
          <div className="PlanCard-header-info-credits flex items-center">
            {credits === 0 ? 'Free' : credits}
            <Icon name={EIconName.Coin} />
          </div>
        </div>
      </div>
      <div className="PlanCard-features">
        {features.map((feature) => (
          <div key={feature.value} className="PlanCard-features-item flex">
            <Icon name={EIconName.CheckCircleColor} color={EIconColor.RADICAL_RED} />
            {feature.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
