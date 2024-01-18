import React from 'react';
import classNames from 'classnames';

import { ECreditCardType } from './CreditCard.enums';
import { TCreditCardProps } from './CreditCard.types.d';
import Icon, { EIconName } from '@/components/Icon';

const CreditCard: React.FC<TCreditCardProps> = ({ type, title, bonus, active, onClick }) => {
  return (
    <div className={classNames('CreditCard flex flex-col', type, { active })} onClick={onClick}>
      <div className="CreditCard-main">
        <div className="CreditCard-coin">
          {type === ECreditCardType.BRONZE && <Icon name={EIconName.CoinBronze} />}
          {type === ECreditCardType.SILVER && <Icon name={EIconName.CoinSilver} />}
          {type === ECreditCardType.RED && <Icon name={EIconName.CoinRed} />}
          {type === ECreditCardType.GOLD && <Icon name={EIconName.Coin} />}
        </div>
        <div className="CreditCard-title">{title}</div>
      </div>

      <div className="CreditCard-bonus">{bonus}</div>
    </div>
  );
};

export default CreditCard;
