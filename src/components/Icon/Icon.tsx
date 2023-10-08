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
