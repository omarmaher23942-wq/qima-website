export interface VideoTestimonial {
  id: string;
  name: string;
  avatar: string;
  hasRealPhoto: boolean;
  socials?: {
    instagram?: string;
    tiktok?: string;
    twitter?: string;
  };
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "NFUDCKHeU6g",
    name: "Eyad Jamal",
    avatar: "/cc/testimonials/avatars/اياد جمال.jpg",
    hasRealPhoto: true,
    socials: {},
  },
  {
    id: "CZiKc_Hn_Q8",
    name: "Ahmed Hany",
    avatar: "/cc/testimonials/avatars/ahmed_hany.jpeg",
    hasRealPhoto: true,
    socials: {},
  },
  {
    id: "8Vky-IR1iTg",
    name: "Amin Sheko",
    avatar: "/cc/testimonials/avatars/أمين شيكو.jpeg",
    hasRealPhoto: true,
    socials: {},
  },
  {
    id: "jS5BOoKeLzE",
    name: "Sohail",
    avatar: "/cc/testimonials/avatars/تجارب سهيل.jpeg",
    hasRealPhoto: true,
    socials: {},
  },
  {
    id: "TpiV-9QYoo8",
    name: "Chef Khaled Qatrawi",
    avatar: "/cc/testimonials/avatars/شيف خالد كتراوي.jpg",
    hasRealPhoto: true,
    socials: {},
  },
  {
    id: "17bsxaQ3Sdc",
    name: "Client",
    avatar: "/cc/testimonials/avatars/user-profile.png",
    hasRealPhoto: false,
    socials: {},
  },
  {
    id: "McrCP-TQUUg",
    name: "Client",
    avatar: "/cc/testimonials/avatars/female-worker - Copy.png",
    hasRealPhoto: false,
    socials: {},
  },
  {
    id: "2oyraVz4c2c",
    name: "Client",
    avatar: "/cc/testimonials/avatars/user-profile.png",
    hasRealPhoto: false,
    socials: {},
  },
];