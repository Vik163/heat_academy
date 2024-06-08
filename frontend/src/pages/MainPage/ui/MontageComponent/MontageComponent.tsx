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

   const videoJsOptions = {
      controls: true,
      responsive: true,
      fluid: true,
      aspectRatio: '4:3',
      poster:
         'https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2023/10/screenshot_1.png',
      sources: {
         src: 'https//youtu.be/2rp0PbsVi6c',
         type: 'video/youtube',
      },
   };

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
               <div className={cls.videoContainer}>
                  {!isPlaying && (
                     <div onClick={startVideo} className={cls.poster}></div>
                  )}
                  <Player
                     url='https://www.youtube.com/watch?v=2rp0PbsVi6c'
                     width={630}
                     height={423}
                     playing={isPlaying}
                     className={cls.video}
                     onEnded={endVideo}
                  />
               </div>
               <a
                  data-fancybox='video-btn-1'
                  href='https://www.youtube.com/watch?v=2rp0PbsVi6c&amp;autohide=2&amp;modestbranding=1&amp;fs=0&amp;showinfo=0&amp;rel=0&amp;roistat_visit=2074074'
                  className={cls.block_video}
               >
                  <img
                     src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2023/10/screenshot_1.png'
                     alt='видео'
                  />
                  <span className={cls.video_play}></span>
                  <div className={cls.video_info}>
                     <span>Посмотрите видео «Как правильно делать монтаж»</span>
                     <div
                        className={classNames(cls.btn, {}, [
                           cls.btn_yellow,
                           cls.btn_s,
                           cls.btn_icon_video,
                        ])}
                     >
                        Смотреть 2 мин.
                     </div>
                  </div>
               </a>
            </div>
         </div>
      </article>
   );
});
