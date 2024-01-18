import React from 'react';
import classNames from 'classnames';

import { TIconProps } from './Icon.types';
import { EIconName } from './Icon.enums';

import Lock from './Lock';
import Unlock from './Unlock';
import UserKey from './UserKey';
import PlayCircle from './PlayCircle';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowVertical from './ArrowVertical';
import RuleHalfCircle from './RuleHalfCircle';
import Lightning from './Lightning';
import Filter from './Filter';
import Minus from './Minus';
import Plus from './Plus';
import ThumbUp from './ThumbUp';
import Grid from './Grid';
import List from './List';
import SortAZ from './SortAZ';
import ArrowRightShort from './ArrowRightShort';
import ArrowLeftShort from './ArrowLeftShort';
import DoubleAngleDown from './DoubleAngleDown';
import CaretDown from './CaretDown';
import Logout from './Logout';
import ZoomIn from './ZoomIn';
import Birthday from './Birthday';
import PlusCircle from './PlusCircle';
import Gender from './Gender';
import User from './User';
import World from './World';
import MapMarker from './MapMarker';
import Language from './Language';
import Bubbles from './Bubbles';
import Mail from './Mail';
import Tattoo from './Tattoo';
import Drink from './Drink';
import Smoke from './Smoke';
import Verify from './Verify';
import WhatsApp from './WhatsApp';
import Phone from './Phone';
import Sms from './Sms';
import ArrowsReverseSquare from './ArrowsReverseSquare';
import X from './X';
import AngleDown from './AngleDown';
import Menu from './Menu';
import Search from './Search';
import UserCheck from './UserCheck';
import PencilSquare from './PencilSquare';
import Map from './Map';
import DatabaseOff from './DatabaseOff';
import Calendar from './Calendar';
import Upload from './Upload';
import Reload from './Reload';
import Wifi from './Wifi';
import Coin from './Coin';
import Mail2 from './Mail2';
import Upload2 from './Upload2';
import Photo from './Photo';
import Video from './Video';
import Trash from './Trash';
import Gear from './Gear';
import Invoice from './Invoice';
import CheckCircle from './CheckCircle';
import Pencil from './Pencil';
import Trash2 from './Trash2';
import Fire from './Fire';
import Eye from './Eye';
import CoinBronze from './CoinBronze';
import CoinSilver from './CoinSilver';
import CoinRed from './CoinRed';
import ShieldSsl from './ShieldSsl';
import MasterCard from './MasterCard';
import CheckCircleColor from './CheckCircleColor';
import Info from './Info';
import FlagUsa from './FlagUsa';
import Telegram from './Telegram';
import WhatApps from './WhatApps';
import Website from './Website';
import OnlyFan from './OnlyFan';
import Twitter from './Twitter';
import Instagram from './Instagram';
import HandFinger from './HandFinger';
import CalendarCheck from './CalendarCheck';

const Icon: React.FC<TIconProps> = ({ name, className, color, style, onClick }) => {
  const renderIcon = (): React.ReactElement => {
    switch (name) {
      case EIconName.Lock:
        return <Lock color={color} />;
      case EIconName.Unlock:
        return <Unlock color={color} />;
      case EIconName.UserKey:
        return <UserKey color={color} />;
      case EIconName.PlayCircle:
        return <PlayCircle color={color} />;
      case EIconName.ArrowLeft:
        return <ArrowLeft color={color} />;
      case EIconName.ArrowRight:
        return <ArrowRight color={color} />;
      case EIconName.ArrowVertical:
        return <ArrowVertical color={color} />;
      case EIconName.RuleHalfCircle:
        return <RuleHalfCircle color={color} />;
      case EIconName.Lightning:
        return <Lightning color={color} />;
      case EIconName.Filter:
        return <Filter color={color} />;
      case EIconName.Minus:
        return <Minus color={color} />;
      case EIconName.Plus:
        return <Plus color={color} />;
      case EIconName.ThumbUp:
        return <ThumbUp color={color} />;
      case EIconName.Grid:
        return <Grid color={color} />;
      case EIconName.List:
        return <List color={color} />;
      case EIconName.SortAZ:
        return <SortAZ color={color} />;
      case EIconName.ArrowRightShort:
        return <ArrowRightShort color={color} />;
      case EIconName.ArrowLeftShort:
        return <ArrowLeftShort color={color} />;
      case EIconName.DoubleAngleDown:
        return <DoubleAngleDown color={color} />;
      case EIconName.CaretDown:
        return <CaretDown color={color} />;
      case EIconName.Logout:
        return <Logout color={color} />;
      case EIconName.ZoomIn:
        return <ZoomIn color={color} />;
      case EIconName.Birthday:
        return <Birthday color={color} />;
      case EIconName.PlusCircle:
        return <PlusCircle color={color} />;
      case EIconName.Gender:
        return <Gender color={color} />;
      case EIconName.User:
        return <User color={color} />;
      case EIconName.World:
        return <World color={color} />;
      case EIconName.MapMarker:
        return <MapMarker color={color} />;
      case EIconName.Language:
        return <Language color={color} />;
      case EIconName.Bubbles:
        return <Bubbles color={color} />;
      case EIconName.Mail:
        return <Mail color={color} />;
      case EIconName.Tattoo:
        return <Tattoo color={color} />;
      case EIconName.Drink:
        return <Drink color={color} />;
      case EIconName.Smoke:
        return <Smoke color={color} />;
      case EIconName.Verify:
        return <Verify color={color} />;
      case EIconName.WhatsApp:
        return <WhatsApp color={color} />;
      case EIconName.Sms:
        return <Sms color={color} />;
      case EIconName.Phone:
        return <Phone color={color} />;
      case EIconName.ArrowsReverseSquare:
        return <ArrowsReverseSquare color={color} />;
      case EIconName.X:
        return <X color={color} />;
      case EIconName.AngleDown:
        return <AngleDown color={color} />;
      case EIconName.Menu:
        return <Menu color={color} />;
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.UserCheck:
        return <UserCheck color={color} />;
      case EIconName.PencilSquare:
        return <PencilSquare color={color} />;
      case EIconName.Map:
        return <Map color={color} />;
      case EIconName.DatabaseOff:
        return <DatabaseOff color={color} />;
      case EIconName.Calendar:
        return <Calendar color={color} />;
      case EIconName.Upload:
        return <Upload color={color} />;
      case EIconName.Reload:
        return <Reload color={color} />;
      case EIconName.Wifi:
        return <Wifi color={color} />;
      case EIconName.Coin:
        return <Coin color={color} />;
      case EIconName.Mail2:
        return <Mail2 color={color} />;
      case EIconName.Upload2:
        return <Upload2 color={color} />;
      case EIconName.Photo:
        return <Photo color={color} />;
      case EIconName.Video:
        return <Video color={color} />;
      case EIconName.Trash:
        return <Trash color={color} />;
      case EIconName.Gear:
        return <Gear color={color} />;
      case EIconName.Invoice:
        return <Invoice color={color} />;
      case EIconName.CheckCircle:
        return <CheckCircle color={color} />;
      case EIconName.Pencil:
        return <Pencil color={color} />;
      case EIconName.Trash2:
        return <Trash2 color={color} />;
      case EIconName.Fire:
        return <Fire color={color} />;
      case EIconName.Eye:
        return <Eye color={color} />;
      case EIconName.CoinBronze:
        return <CoinBronze color={color} />;
      case EIconName.CoinSilver:
        return <CoinSilver color={color} />;
      case EIconName.CoinRed:
        return <CoinRed color={color} />;
      case EIconName.ShieldSsl:
        return <ShieldSsl color={color} />;
      case EIconName.MasterCard:
        return <MasterCard color={color} />;
      case EIconName.CheckCircleColor:
        return <CheckCircleColor color={color} />;
      case EIconName.Info:
        return <Info color={color} />;
      case EIconName.FlagUsa:
        return <FlagUsa color={color} />;
      case EIconName.Telegram:
        return <Telegram color={color} />;
      case EIconName.WhatApps:
        return <WhatApps color={color} />;
      case EIconName.Website:
        return <Website color={color} />;
      case EIconName.OnlyFan:
        return <OnlyFan color={color} />;
      case EIconName.Twitter:
        return <Twitter color={color} />;
      case EIconName.Instagram:
        return <Instagram color={color} />;
      case EIconName.HandFinger:
        return <HandFinger color={color} />;
      case EIconName.CalendarCheck:
        return <CalendarCheck color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div
      className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)}
      onClick={onClick}
      style={style}
    >
      {renderIcon()}
    </div>
  );
};

export default Icon;
