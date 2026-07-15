export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  audio: string;
  hasRealPhoto: boolean;
  socials?: {
    tiktok?: string;
    instagram?: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: "amin-sheko",
    name: "Amin Sheko",
    avatar: "/cc/testimonials/avatars/أمين شيكو.jpeg",
    audio: "/cc/testimonials/voices/Amin Sheko.mp3",
    hasRealPhoto: true,
    socials: {
      tiktok: "https://www.tiktok.com/@amin.shiko?is_from_webapp=1&sender_device=pc",
      instagram: "https://www.instagram.com/amin.shiko11/",
    },
  },
  {
    id: "chef-khaled-qatrawi",
    name: "Chef Khaled Qatrawi",
    avatar: "/cc/testimonials/avatars/شيف خالد كتراوي.jpg",
    audio: "/cc/testimonials/voices/Chef khaled Qatrawi.mp3",
    hasRealPhoto: true,
    socials: {
      tiktok: "https://www.tiktok.com/@khaild_qatrawi",
      instagram:
        "https://www.instagram.com/chef_khalid03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    id: "ahmed-hany",
    name: "Ahmed Hany",
    avatar: "/cc/testimonials/avatars/ahmed_hany.jpeg",
    audio: "/cc/testimonials/voices/Ahmed Hany.mp3",
    hasRealPhoto: true,
    socials: {
      tiktok: "https://www.tiktok.com/@ahmed_hany_rashdan",
      instagram:
        "https://www.instagram.com/ahmed_hany_rashdan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
  {
    id: "sohail",
    name: "Sohail",
    avatar: "/cc/testimonials/avatars/تجارب سهيل.jpeg",
    audio: "/cc/testimonials/voices/sohail.mp3",
    hasRealPhoto: true,
    socials: {
      tiktok: "https://www.tiktok.com/@suhilz438",
      instagram: "https://www.instagram.com/suhilz438",
    },
  },
  {
    id: "client-1",
    name: "Client",
    avatar: "/cc/testimonials/avatars/female-worker - Copy.png",
    audio: "/cc/testimonials/voices/client1.mp3",
    hasRealPhoto: false,
  },
  {
    id: "client-2",
    name: "Client",
    avatar: "/cc/testimonials/avatars/user-profile.png",
    audio: "/cc/testimonials/voices/client2.mp3",
    hasRealPhoto: false,
  },
  {
    id: "client-3",
    name: "Client",
    avatar: "/cc/testimonials/avatars/female-worker - Copy.png",
    audio: "/cc/testimonials/voices/client3.mp3",
    hasRealPhoto: false,
  },
];