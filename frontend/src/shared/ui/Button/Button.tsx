import { type ButtonHTMLAttributes, memo } from 'react';
import { type Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';
import { FontColor, FontSize, FontWeight } from '../Text';

export enum ButtonVariant {
   OUTLINE = 'outline',
   FILLED = 'filled',
   CLEAR = 'clear',
}

export enum ButtonRadius {
   RADIUS_28 = 'border_radius_28',
   RADIUS_14 = 'border_radius_14',
   RADIUS_8 = 'border_radius_8',
   RADIUS_7 = 'border_radius_7',
   RADIUS_6 = 'border_radius_6',
   RADIUS_NONE = 'border_radius_none',
}

export enum ButtonBgColor {
   NONE = 'none_color',
   GREY = 'button_grey',
   AMBER = 'button_amber',
   GREY_BLUE = 'button_grey_blue',
   YELLOW = 'button_yellow',
   WHITE = 'button_card_white',
   GREEN = 'button_green',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   key?: string | number;
   variant?: ButtonVariant;
   radius?: ButtonRadius;
   bgColor?: ButtonBgColor;
   fontColor?: FontColor;
   fontSize?: FontSize;
   fontWeight?: FontWeight;
   width?: number;
   height?: number;
   disabled?: boolean;
   arrow?: boolean;
}

export const Button = memo((props: ButtonProps) => {
   const {
      className,
      children,
      variant = ButtonVariant.OUTLINE,
      radius = ButtonRadius.RADIUS_8,
      bgColor = ButtonBgColor.NONE,
      fontColor = FontColor.WHITE,
      fontSize = FontSize.SIZE_13,
      fontWeight = FontWeight.TEXT_700,
      width,
      arrow = false,
      height,
      id,
      disabled = false,
      type,
      ...otherProps
   } = props;

   const additionalClases = [
      className,
      cls[radius],
      cls[bgColor],
      cls[fontColor],
      cls[fontSize],
      cls[fontWeight],
      cls[variant],
   ];

   const mods: Mods = {
      [cls.disabled]: disabled,
      [cls.buttonSelect]: arrow,
   };

   return (
      <button
         id={id}
         // eslint-disable-next-line react/button-has-type
         type={type}
         style={{ width, height }}
         className={classNames(disabled ? '' : cls.Button, mods, additionalClases)}
         disabled={disabled}
         {...otherProps}
      >
         {children}
      </button>
   );
});
