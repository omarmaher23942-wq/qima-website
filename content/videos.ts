export interface VideoItem {
  id: string;
}

// Reels / Shorts — displayed in the main square gallery grid
export const videos: VideoItem[] = [
  { id: "qLHc-tkLyB0" },
  { id: "6zaHdvgAFTs" },
  { id: "3Ay_zdpFn_k" },
  { id: "Le2djtePZ6Q" },
  { id: "ZbMZ6MDZxWM" },
  { id: "G75CSuZ-ApE" },
  { id: "BdCWO7miuuU" },
  { id: "ViW-hvGjxKk" },
  { id: "aj_J76HikFs" },
  { id: "ykDyh1ZEjdE" },
  { id: "qncZ3UolFOw" },
];

// Long-form / horizontal work shown in its own dedicated section
export const longFormVideos: VideoItem[] = [
  { id: "vWVbHnZqcVg" },
  { id: "8lja6AHqbgo" },
];

// Used individually next to specific sections (About, Process) --
// not shown in any gallery grid
export const aboutSectionVideo = "AWph6_Nxb1w";
export const processSectionVideo = "vWVbHnZqcVg";