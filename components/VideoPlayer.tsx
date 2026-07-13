"use client";

import { useEffect, useRef, useState, useCallback } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

let apiLoadPromise: Promise<void> | null = null;

function loadYouTubeAPI(): Promise<void> {
  if (apiLoadPromise) return apiLoadPromise;
  apiLoadPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve();
      return;
    }
    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prevCallback?.();
      resolve();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
  return apiLoadPromise;
}

interface VideoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
  showControls?: boolean;
  onClose?: () => void;
}

export function VideoPlayer({
  videoId,
  autoplay = true,
  muted = false,
  showControls: allowControls = true,
  onClose,
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(muted);
  const [showUI, setShowUI] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const progressRaf = useRef<number | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeAPI().then(() => {
      if (cancelled || !containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          fs: 0,
          disablekb: 1,
          playsinline: 1,
          mute: muted ? 1 : 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (e: any) => {
            setReady(true);
            setDuration(e.target.getDuration());
            if (muted) {
              e.target.mute();
              setIsMuted(true);
            } else {
              e.target.unMute();
              setIsMuted(false);
            }
            if (autoplay) e.target.playVideo();

            // Double-check mute state shortly after playback starts —
            // some browsers/YT instances force mute on autoplay even
            // when we explicitly asked for sound.
            setTimeout(() => {
              if (!muted && playerRef.current?.isMuted?.()) {
                playerRef.current.unMute();
                setIsMuted(false);
              }
            }, 300);
          },
          onStateChange: (e: any) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING);
            if (e.data === window.YT.PlayerState.PLAYING && !muted) {
              const actuallyMuted = playerRef.current?.isMuted?.();
              if (actuallyMuted) {
                playerRef.current.unMute();
                setIsMuted(false);
              }
            }
          },
        },
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  useEffect(() => {
    function tick() {
      if (playerRef.current?.getCurrentTime && playing) {
        setProgress(playerRef.current.getCurrentTime());
      }
      progressRaf.current = requestAnimationFrame(tick);
    }
    progressRaf.current = requestAnimationFrame(tick);
    return () => {
      if (progressRaf.current) cancelAnimationFrame(progressRaf.current);
    };
  }, [playing]);

  const togglePlay = useCallback(() => {
    if (!playerRef.current) return;
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }, [playing]);

  const toggleMute = useCallback(() => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  }, [isMuted]);

  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!playerRef.current || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      playerRef.current.seekTo(ratio * duration, true);
    },
    [duration]
  );

  function resetHideTimer() {
    setShowUI(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowUI(false), 2500);
  }

  useEffect(() => {
    resetHideTimer();
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formatTime(t: number) {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden select-none"
      onMouseMove={resetHideTimer}
    >
      <div
        ref={containerRef}
        className="absolute [&_iframe]:w-full [&_iframe]:h-full pointer-events-none"
        style={{
          top: "-7.5%",
          left: "-7.5%",
          width: "115%",
          height: "115%",
        }}
      />

      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
          <div className="h-6 w-6 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
        </div>
      )}

      {allowControls && (
        <>
          <button
            className="absolute inset-0 z-[6]"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
          />

          <div
            className={`absolute inset-0 z-10 flex flex-col justify-between transition-opacity duration-300 pointer-events-none ${
              showUI || !playing ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-end p-4 pointer-events-auto">
              {onClose && (
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 2l12 12M2 14L14 2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>

            {isMuted && !muted && (
              <button
                onClick={toggleMute}
                className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-white text-xs font-medium hover:bg-black/85 transition-colors pointer-events-auto"
              >
                <MuteIcon />
                Tap for sound
              </button>
            )}

            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105 transition-all pointer-events-auto"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div className="p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-auto">
              <div
                className="h-1.5 w-full rounded-full bg-white/20 cursor-pointer mb-3"
                onClick={seek}
              >
                <div
                  className="h-full rounded-full bg-accent"
                  style={{
                    width: duration ? `${(progress / duration) * 100}%` : "0%",
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                    {playing ? <PauseIcon small /> : <PlayIcon small />}
                  </button>
                  <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                    {isMuted ? <MuteIcon /> : <VolumeIcon />}
                  </button>
                  <span className="text-xs tabular-nums text-white/80">
                    {formatTime(progress)} / {formatTime(duration)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function PlayIcon({ small }: { small?: boolean }) {
  const s = small ? 18 : 24;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function PauseIcon({ small }: { small?: boolean }) {
  const s = small ? 18 : 24;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="5" width="4" height="14" />
      <rect x="14" y="5" width="4" height="14" />
    </svg>
  );
}
function VolumeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
      <path
        d="M17 8a5 5 0 010 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MuteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
      <path
        d="M16 9l5 6M21 9l-5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}