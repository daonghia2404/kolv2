import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import Icon, { EIconName } from '@/components/Icon';

import { TVideoProps } from './Video.types.d';

const Video: React.FC<TVideoProps> = ({
  src,
  thumbnail,
  placement,
  objectFit = 'cover',
  disabled,
  onPlay,
  onPause,
}) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isFirstPlayVideo, setIsFirstPlayVideo] = useState<boolean>(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handleClickVideo = (): void => {
    if (!ref?.current?.paused) {
      setIsPlay(false);
      ref?.current?.pause();
    } else {
      setIsFirstPlayVideo(true);
      setIsPlay(true);
      ref?.current?.play();
    }
  };

  useEffect(() => {
    setIsPlay(!ref?.current?.paused);
  }, [ref?.current?.paused]);

  useEffect(() => {
    if (isPlay) onPlay?.();
    else onPause?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  return (
    <div
      className="Video"
      onClick={(e) => {
        if (!disabled) {
          e.stopPropagation();
          handleClickVideo();
        }
      }}
    >
      <video ref={ref} src={src} controls={false} loop playsInline style={{ objectFit }} />
      {thumbnail && !isFirstPlayVideo && (
        <div className="Video-thumbnail">
          <Image src={thumbnail} alt="" />
        </div>
      )}
      {!isPlay && (
        <div className={classNames('Video-play', placement)}>
          <Icon name={EIconName.PlayCircle} />
        </div>
      )}
    </div>
  );
};

export default Video;
