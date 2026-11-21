import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  uri: string;
  play: boolean;
  muted: boolean;
};

export default function VideoPlayer({ uri, play, muted }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  // React ne synchronise pas l'attribut "muted" au montage : on le pilote via l'élément DOM.
  useEffect(() => {
    const v = ref.current;
    if (v) v.muted = muted;
  }, [muted]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (play) {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      v.pause();
    }
  }, [play]);

  return (
    <View style={StyleSheet.absoluteFill}>
      {React.createElement('video', {
        ref,
        src: uri,
        loop: true,
        playsInline: true,
        muted: true,
        preload: 'auto',
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          backgroundColor: '#000',
          display: 'block',
        },
      })}
    </View>
  );
}
