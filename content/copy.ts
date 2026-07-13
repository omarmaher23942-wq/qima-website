export type Lang = "en" | "ar";

export const copy = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      process: "Process",
      contact: "Contact",
      langToggle: "العربية",
    },
    hero: {
      eyebrow: "Creative Production Agency",
      headline: "Content that earns trust",
      headlineAccent: "then earns customers",
      sub: "We help creators, brands, and companies turn raw footage into content that performs -- through sharp editing, platform literacy, and marketing instinct.",
      ctaPrimary: "See our work",
      ctaSecondary: "Start a project",
      scrollHint: "Scroll",
    },
    services: {
      eyebrow: "What we do",
      title: "Everything your content needs to grow -- in one place",
      items: [
        {
          title: "Video Editing",
          desc: "A pace that keeps eyes on screen -- a smooth, enjoyable watch from start to finish.",
        },
        {
          title: "Thumbnail Design",
          desc: "Eye-catching designs that make your content look premium and boost CTR.",
        },
        {
          title: "Script & Story Direction",
          desc: "We turn your idea into a full script -- directing the shot, the edit, and crafting storytelling and hooks that drive real performance.",
        },
      ],
    },
    why: {
      eyebrow: "Why QIMA",
      title: "We don't just edit",
      titleAccent: "We run a full production team",
      points: [
        {
          title: "Built for speed, without losing quality",
          desc: "Some deliveries land in under two hours. A specialized team means nothing waits in a queue.",
        },
        {
          title: "A marketing mindset before a technical one",
          desc: "Every editing decision is deliberate, aligned with your audience and platform algorithms, to deliver the best results.",
        },
        {
          title: "A real understanding of different platforms and audiences",
          desc: "We've worked with creators and brands across multiple markets, giving us deep insight into what each audience responds to.",
        },
      ],
      stats: [
        { value: 150, suffix: "M+", label: "Total views generated" },
        { value: 14, suffix: "M+", label: "Views on a single video" },
        { value: 70, suffix: "+", label: "Client reviews" },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      title: "A few of the results",
      viewAll: "View all work",
      filters: {
        all: "All",
        youtube: "Long-form",
        reels: "Reels & Shorts",
        ads: "Ads",
      },
    },
    trust: {
      eyebrow: "Trusted by",
      title: "Trusted by creators, brands, and companies",
      sub: "Whether through direct collaboration or as a creative partner alongside production agencies",
    },
    testimonials: {
      eyebrow: "Client voices",
      title: "A few words from our clients",
    },
    about: {
      eyebrow: "Who we are",
      title: "A team built for one thing: your content",
      body: "We combine creativity, platform understanding, and marketing expertise to produce content that delivers real results and helps brands and creators grow",
      body2: "",
    },
    process: {
      eyebrow: "How it works",
      title: "How it works",
      steps: [
        { title: "Tell us about your project", desc: "A short brief on your goals, your audience, and what success looks like" },
        { title: "We study your goals", desc: "We map the right audience, tone, and format before touching a single clip" },
        { title: "Production begins", desc: "Editing, thumbnails, and scripting move in parallel with your specialized team" },
        { title: "Internal review", desc: "A dedicated review pass -- nothing reaches you before it's checked" },
        { title: "Final delivery", desc: "You get the finished asset, ready to publish" },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Ready to level up your content",
      sub: "Reach out on WhatsApp to discuss your project and get a plan built around your goals",
      cta: "Chat on WhatsApp",
    },
    aiForm: {
      eyebrow: "Quick start",
      title: "Tell us what you need -- takes 30 seconds",
      sub: "A few quick questions, then we'll reach out with a plan",
      thinking: "Typing",
      restart: "Start over",
      submitted: {
        title: "Got it",
        body: "We'll be in touch shortly on the contact you gave us",
      },
      fallback: {
        name: "Your name",
        namePlaceholder: "e.g. Ahmed",
        serviceLabel: "What do you need?",
        serviceOptions: [
          "Long-form YouTube editing",
          "Reels / Shorts",
          "Ads",
          "Thumbnail design",
          "Script writing",
          "Something else",
        ],
        otherPlaceholder: "Tell us briefly",
        budgetLabel: "What budget are you working with?",
        budgetPlaceholder: "e.g. $20 per video",
        contactLabel: "Best way to reach you",
        contactMethods: ["WhatsApp", "Phone call", "Email", "Other"],
        contactPlaceholder: "Enter your contact detail",
        submit: "Send",
      },
    },
    footer: {
      rights: "All rights reserved",
      tagline: "Content that builds trust -- and turns viewers into customers",
    },
  },
  ar: {
    nav: {
      services: "خدماتنا",
      work: "أعمالنا",
      about: "من نحن",
      process: "آلية العمل",
      contact: "تواصل",
      langToggle: "English",
    },
    hero: {
      eyebrow: "وكالة إنتاج إبداعي",
      headline: "محتوى يبني الثقة",
      headlineAccent: "ويحوّل المشاهدين إلى عملاء",
      sub: "نساعد صناع المحتوى والعلامات التجارية والشركات على تحويل اللقطات الخام إلى محتوى يحقق نتائج -- من خلال مونتاج دقيق، وفهم عميق للمنصات، وحس تسويقي حقيقي",
      ctaPrimary: "شاهد أعمالنا",
      ctaSecondary: "ابدأ مشروعك",
      scrollHint: "استمر بالتمرير",
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: "كل ما يحتاجه محتواك للنمو -- في مكان واحد",
      items: [
        {
          title: "مونتاج الفيديوهات",
          desc: "ستايل مريح للعين يخلي تجربة المشاهدة ممتعة من البداية للنهاية",
        },
        {
          title: "تصميم الثامبنيل",
          desc: "تصميمات ملفتة تجعل مقاطعك بريميوم وتساعد في زيادة ال CTR",
        },
        {
          title: "كتابة السكريبت وإخراج القصة",
          desc: "نحول الفكرة إلى سكريبت متكامل -- مع توجيه التصوير والإخراج، وصناعة Storytelling وهوكس تعزز أداء المحتوى",
        },
      ],
    },
    why: {
      eyebrow: "ليه قمة؟",
      title: "إحنا مش بس بنمونتاج",
      titleAccent: "إحنا فريق إنتاج كامل",
      points: [
        {
          title: "سرعة تنفيذ من غير ما نضحي بالجودة",
          desc: "بعض التسليمات بتوصل في أقل من ساعتين فريق متخصص يعني مفيش حاجة بتستنى في الطابور",
        },
        {
          title: "عقلية تسويقية قبل أن تكون تقنية",
          desc: "كل قرار في المونتاج مدروس بما يتوافق مع جمهورك وخوارزميات المنصات لتحقيق أفضل النتائج",
        },
        {
          title: "فهم حقيقي لمختلف المنصات والجماهير",
          desc: "عملنا مع صناع محتوى وعلامات تجارية في أسواق متعددة مما منحنا فهمًا عميقًا لطبيعة كل جمهور",
        },
      ],
      stats: [
        { value: 150, suffix: "M+", label: "مشاهدة إجمالية حققناها" },
        { value: 14, suffix: "M+", label: "مشاهدة لأفضل فيديو" },
        { value: 70, suffix: "+", label: "تقييم من العملاء" },
      ],
    },
    work: {
      eyebrow: "أعمال مختارة",
      title: "بعض من نتايجنا",
      viewAll: "شاهد كل الأعمال",
      filters: {
        all: "الكل",
        youtube: "فيديوهات طويلة",
        reels: "ريلز وشورتس",
        ads: "إعلانات",
      },
    },
    trust: {
      eyebrow: "موثوق من قبل",
      title: "موثوق من قبل صناع المحتوى والعلامات التجارية والشركات",
      sub: "سواء عبر تعاون مباشر أو كشريك إبداعي مع وكالات الإنتاج",
    },
    testimonials: {
      eyebrow: "آراء عملائنا",
      title: "بعض آراء عملائنا",
    },
    about: {
      eyebrow: "من نحن",
      title: "فريق مبني لهدف واحد: محتواك",
      body: "نجمع بين الإبداع فهم المنصات والخبرة التسويقية لإنتاج محتوى يحقق نتائج حقيقية ويساعد العلامات التجارية وصناع المحتوى على النمو",
      body2: "",
    },
    process: {
      eyebrow: "آلية العمل",
      title: "آلية العمل",
      steps: [
        { title: "أخبرنا عن مشروعك", desc: "نبذة سريعة عن أهدافك جمهورك وشكل النجاح بالنسبالك" },
        { title: "دراسة الأهداف والجمهور", desc: "بنحدد الجمهور والنبرة والفورمات الصح قبل ما نلمس أي لقطة" },
        { title: "بدء التنفيذ", desc: "المونتاج والثامبنيل والسكريبت بيتحركوا بالتوازي مع فريقك المتخصص" },
        { title: "مراجعة داخلية", desc: "مراجعة مخصصة من فريق مختص -- مفيش حاجة توصلك من غير ما تتفحص" },
        { title: "التسليم النهائي", desc: "بتستلم الشغل جاهز للنشر مباشرة" },
      ],
    },
    contact: {
      eyebrow: "يلا نتكلم",
      title: "مستعد ترفع مستوى محتواك",
      sub: "تواصل معنا عبر واتساب لمناقشة مشروعك والحصول على خطة مبنية على أهدافك",
      cta: "تواصل عبر واتساب",
    },
    aiForm: {
      eyebrow: "بداية سريعة",
      title: "قولنا محتاج إيه -- هياخد ٣٠ ثانية",
      sub: "كام سؤال بسيط وبعدها هنتواصل معاك بخطة واضحة",
      thinking: "بيكتب",
      restart: "ابدأ من جديد",
      submitted: {
        title: "تم الاستلام",
        body: "هنتواصل معاك قريب على وسيلة التواصل اللي كتبتها",
      },
      fallback: {
        name: "اسمك",
        namePlaceholder: "مثلاً أحمد",
        serviceLabel: "محتاج إيه بالظبط؟",
        serviceOptions: [
          "مونتاج فيديوهات يوتيوب طويلة",
          "ريلز / شورتس",
          "إعلانات",
          "تصميم ثامبنيل",
          "كتابة سكريبت",
          "حاجة تانية",
        ],
        otherPlaceholder: "قولنا باختصار",
        budgetLabel: "الميزانية اللي في بالك؟",
        budgetPlaceholder: "مثلاً 20$ للفيديو",
        contactLabel: "أفضل طريقة نتواصل بيها معاك",
        contactMethods: ["واتساب", "مكالمة هاتفية", "إيميل", "حاجة تانية"],
        contactPlaceholder: "اكتب وسيلة التواصل",
        submit: "إرسال",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      tagline: "محتوى يبني الثقة -- ويحول المشاهدين إلى عملاء",
    },
  },
} as const;

export type CopyType = {
  [K in keyof typeof copy.en]: typeof copy.en[K];
};