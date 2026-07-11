export type VideoCategory = "youtube" | "reels" | "ads";

export interface VideoItem {
  id: string; // YouTube video ID (unlisted)
  title: { en: string; ar: string };
  category: VideoCategory;
  orientation: "vertical" | "horizontal";
  views?: string;
}

export const videos: VideoItem[] = [
  {
    id: "qLHc-tkLyB0",
    title: { en: "Client Project 1", ar: "مشروع عميل 1" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "6zaHdvgAFTs",
    title: { en: "Client Project 2", ar: "مشروع عميل 2" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "8lja6AHqbgo",
    title: { en: "Before & After Edit", ar: "قبل وبعد المونتاج" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "AWph6_Nxb1w",
    title: { en: "Client Project 3", ar: "مشروع عميل 3" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "vWVbHnZqcVg",
    title: { en: "Intro Sequence", ar: "مقدمة تعريفية" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "3Ay_zdpFn_k",
    title: { en: "Client Project 4", ar: "مشروع عميل 4" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "Le2djtePZ6Q",
    title: { en: "Client Project 5", ar: "مشروع عميل 5" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "ZbMZ6MDZxWM",
    title: { en: "Client Project 6", ar: "مشروع عميل 6" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "G75CSuZ-ApE",
    title: { en: "Client Project 7", ar: "مشروع عميل 7" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "BdCWO7miuuU",
    title: { en: "Client Project 8", ar: "مشروع عميل 8" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "ViW-hvGjxKk",
    title: { en: "Client Project 9", ar: "مشروع عميل 9" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "aj_J76HikFs",
    title: { en: "Client Project 10", ar: "مشروع عميل 10" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "ykDyh1ZEjdE",
    title: { en: "Client Project 11", ar: "مشروع عميل 11" },
    category: "reels",
    orientation: "vertical",
  },
  {
    id: "qncZ3UolFOw",
    title: { en: "Solo Edit Reel", ar: "ريلز مونتاج فردي" },
    category: "reels",
    orientation: "vertical",
  },
];