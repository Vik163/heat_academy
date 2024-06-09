import React, { memo } from 'react';
import ReactPlayer from 'react-player/youtube';

export interface PlayerProps {
   className?: string;
   width: number;
   height: number;
   url: string;
   onReady?: () => void;
   playing?: boolean;
   onEnded?: () => void;
}

const Player = memo((props: PlayerProps) => {
   const { className, width, height, url, onReady, playing, onEnded } = props;

   const configYoutube = {
      playerVars: {
         cc_load_policy: 0,
         iv_load_policy: 3,
         modestbranding: 1,
      },
   };

   return (
      <div className={className}>
         <ReactPlayer
            controls
            playing={playing}
            onReady={onReady}
            width={width}
            height={height}
            url={url}
            onEnded={onEnded}
            config={configYoutube}
         />
      </div>
   );
});

export default Player;
