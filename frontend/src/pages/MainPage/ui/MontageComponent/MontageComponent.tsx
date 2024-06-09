import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MontageComponent.module.scss';
import {
   FontColor,
   FontSize,
   FontWeight,
   HeaderTagType,
   Text,
} from '@/shared/ui/Text';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { Player } from '@/shared/ui/Player';

export const MontageComponent = memo(() => {
   const [isPlaying, setIsPlaying] = useState(false);
   // const playerRef = useRef<ReturnType<typeof videojs> | null>(null);

   const startVideo = () => {
      setIsPlaying(true);
   };

   const endVideo = () => {
      setIsPlaying(false);
   };

   return (
      <article id='sec-montazh' className={cls.montazh}>
         <div className={cls.container}>
            <Text title={HeaderTagType.H_3} className={cls.title}>
               Монтаж кессона за 1 день
            </Text>
            <Text className={cls.description}>
               От нашего официального дилера{' '}
            </Text>
            <div className={classNames(cls.montazh_block, {}, [])}>
               <div className={cls.block_main}>
                  <Text className={cls.main_title}>
                     В монтаж входят услуги:
                  </Text>
                  <div className={cls.main_list}>
                     <ul>
                        <li>Копка котлована</li>
                        <li>Обрезка обсадной трубы</li>
                        <li>Монтаж кессона и трубопровода</li>
                        <li>Обсыпка пескоцементной смесью</li>
                        <li>Установка оборудования</li>
                     </ul>
                  </div>
                  <Button
                     width={194}
                     height={40}
                     variant={ButtonVariant.FILLED}
                     bgColor={ButtonBgColor.YELLOW}
                     className={cls.btn_container}
                     fontSize={FontSize.SIZE_15}
                     fontColor={FontColor.BUTTON}
                     fontWeight={FontWeight.TEXT_400}
                     arrow
                  >
                     Узнать подробнее
                  </Button>
               </div>
               <div className={cls.videoContainer} onClick={startVideo}>
                  <Player
                     url='https://www.youtube.com/watch?v=2rp0PbsVi6c'
                     width={630}
                     height={423}
                     playing={isPlaying}
                     className={cls.video}
                     onEnded={endVideo}
                  />
                  {!isPlaying && (
                     <div>
                        <img
                           className={cls.poster}
                           src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2023/10/screenshot_1.png'
                           alt='видео'
                        />
                        <span className={cls.video_play}></span>
                        <div className={cls.video_info}>
                           <span>
                              Посмотрите видео «Как правильно делать монтаж»
                           </span>
                           <div className={cls.btn}>Смотреть 2 мин.</div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </article>
   );
});
