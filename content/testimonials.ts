export interface VideoTestimonial {
    id: string; // YouTube video ID (unlisted)
    name: string;
    avatar: string; // path under /public
    hasRealPhoto: boolean;
  }
  
  export const videoTestimonials: VideoTestimonial[] = [
    {
      id: "NFUDCKHeU6g",
      name: "Eyad Jamal",
      avatar: "/cc/testimonials/avatars/اياد جمال.jpg",
      hasRealPhoto: true,
    },
    {
      id: "CZiKc_Hn_Q8",
      name: "Ahmed Hany",
      avatar: "/cc/testimonials/avatars/ahmed_hany.jpeg",
      hasRealPhoto: true,
    },
    {
      id: "8Vky-IR1iTg",
      name: "Amin Sheko",
      avatar: "/cc/testimonials/avatars/أمين شيكو.jpeg",
      hasRealPhoto: true,
    },
    {
      id: "jS5BOoKeLzE",
      name: "Sohail",
      avatar: "/cc/testimonials/avatars/تجارب سهيل.jpeg",
      hasRealPhoto: true,
    },
    {
      id: "TpiV-9QYoo8",
      name: "Chef Khaled Qatrawi",
      avatar: "/cc/testimonials/avatars/شيف خالد كتراوي.jpg",
      hasRealPhoto: true,
    },
    {
      id: "17bsxaQ3Sdc",
      name: "Client",
      avatar: "/cc/testimonials/avatars/user-profile.png",
      hasRealPhoto: false,
    },
    {
      id: "McrCP-TQUUg",
      name: "Client",
      avatar: "/cc/testimonials/avatars/female-worker - Copy.png",
      hasRealPhoto: false,
    },
    {
      id: "2oyraVz4c2c",
      name: "Client",
      avatar: "/cc/testimonials/avatars/user-profile.png",
      hasRealPhoto: false,
    },
  ];