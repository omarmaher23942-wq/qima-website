export interface VideoItem {
  id: string;
}

// Reels / Shorts — displayed in the main square gallery grid
export const videos = [
  { id: "1209707150" },
  { id: "1209654503" },
  { id: "1209657096" },
  { id: "1209657583" },
  { id: "1209658881" },
  { id: "1209659109" },
  { id: "1209657401" },
  { id: "1209658974" },
  { id: "1209675658" },
  { id: "1209659282" },
  { id: "1209659198" },
  { id: "1209659065" },
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