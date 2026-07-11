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
      headline: "Content that earns trust,",
      headlineAccent: "then earns customers.",
      sub: "We help creators, brands, and companies turn raw footage into content that performs — through sharp editing, platform literacy, and marketing instinct.",
      ctaPrimary: "See our work",
      ctaSecondary: "Start a project",
      scrollHint: "Scroll",
    },
    services: {
      eyebrow: "What we do",
      title: "Three crafts. One outcome.",
      items: [
        {
          title: "Video Editing",
          desc: "A pace that keeps eyes on screen. Rhythm and pacing built so viewers finish the video — and come back for the next one.",
        },
        {
          title: "Thumbnail Design",
          desc: "The first three seconds happen before the click. Thumbnails built to raise CTR and make every upload look premium.",
        },
        {
          title: "Script & Story Direction",
          desc: "Not just writing — shaping the shot, the angle, the hook. Every script is built with storytelling that holds attention from frame one.",
        },
      ],
    },
    why: {
      eyebrow: "Why QIMA",
      title: "We don't just edit.",
      titleAccent: "We run a full production team.",
      points: [
        {
          title: "Built for speed, without losing quality",
          desc: "Some deliveries land in under two hours. A specialized team means nothing waits in a queue.",
        },
        {
          title: "Marketers first, editors second",
          desc: "Every cut is made with the algorithm and the audience in mind — not just the timeline.",
        },
        {
          title: "Global platform fluency",
          desc: "We've worked across content types and regions, which means we already understand your audience's feed.",
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
      title: "A few of the results.",
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
      title: "Creators, brands, and production partners.",
      sub: "Whether direct collaboration or as a creative partner alongside production agencies.",
    },
    testimonials: {
      eyebrow: "Client voices",
      title: "What it's like to work with us.",
    },
    about: {
      eyebrow: "Who we are",
      title: "A team chosen for one job: your content.",
      body: "QIMA is a small, deliberately-selected team — each member tested and specialized before joining. We combine creative craft, platform fluency, and marketing instinct to produce content that performs, not just content that looks good.",
      body2: "We help brands and creators grow with content built to actually be watched, shared, and acted on.",
    },
    process: {
      eyebrow: "How it works",
      title: "Five steps. No surprises.",
      steps: [
        { title: "Tell us about your project", desc: "A short brief on your goals, your audience, and what success looks like." },
        { title: "We study your goals", desc: "We map the right audience, tone, and format before touching a single clip." },
        { title: "Production begins", desc: "Editing, thumbnails, and scripting move in parallel with your specialized team." },
        { title: "Internal review", desc: "A dedicated review pass — nothing reaches you before it's checked." },
        { title: "Final delivery", desc: "You get the finished asset, ready to publish." },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Ready to level up your content?",
      sub: "Reach out on WhatsApp to discuss your project and get a plan built around your goals.",
      cta: "Chat on WhatsApp",
    },
    aiForm: {
      eyebrow: "Quick start",
      title: "Tell us what you need — takes 30 seconds.",
      sub: "A few quick questions, then we'll reach out with a plan.",
      thinking: "Typing...",
      restart: "Start over",
      submitted: {
        title: "Got it.",
        body: "We'll be in touch shortly on the contact you gave us.",
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
        otherPlaceholder: "Tell us briefly...",
        budgetLabel: "What budget are you working with?",
        budgetPlaceholder: "e.g. $20 per video",
        contactLabel: "Best way to reach you",
        contactMethods: ["WhatsApp", "Phone call", "Email", "Other"],
        contactPlaceholder: "Enter your contact detail",
        submit: "Send",
      },
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Content that builds trust, and turns viewers into customers.",
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
      headline: "محتوى يبني الثقة،",
      headlineAccent: "ويحوّل المشاهدين إلى عملاء.",
      sub: "نساعد صناع المحتوى والعلامات التجارية والشركات على تحويل اللقطات الخام إلى محتوى يحقق نتائج، من خلال مونتاج دقيق، وفهم عميق للمنصات، وحس تسويقي حقيقي.",
      ctaPrimary: "شاهد أعمالنا",
      ctaSecondary: "ابدأ مشروعك",
      scrollHint: "استمر بالتمرير",
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: "ثلاث حرفيات. نتيجة واحدة.",
      items: [
        {
          title: "مونتاج الفيديوهات",
          desc: "إيقاع يبقي العين على الشاشة. تريّث ونبض مدروس يخلّي المشاهد يكمل الفيديو، ويرجع للي بعده.",
        },
        {
          title: "تصميم الثامبنيل",
          desc: "أول ثلاث ثواني بتحصل قبل الضغطة نفسها. تصاميم مصمَّمة لرفع نسبة النقر، وتخلي كل فيديو يبان بريميوم.",
        },
        {
          title: "كتابة السكريبت وإخراج القصة",
          desc: "مش مجرد كتابة، إحنا بنظبط زاوية التصوير والإخراج نفسه. كل سكريبت مبني بستوري تيلنج وهوكس قوية تمسك الانتباه من أول لقطة.",
        },
      ],
    },
    why: {
      eyebrow: "ليه قمة؟",
      title: "إحنا مش بس بنمونتاج.",
      titleAccent: "إحنا فريق إنتاج كامل.",
      points: [
        {
          title: "سرعة تنفيذ من غير ما نضحي بالجودة",
          desc: "بعض التسليمات بتوصل في أقل من ساعتين. فريق متخصص يعني مفيش حاجة بتستنى في الطابور.",
        },
        {
          title: "عقلية تسويقية قبل ما تكون تقنية",
          desc: "كل قصة مونتاج بتتحسب على أساس الخوارزمية والجمهور، مش بس التايم لاين.",
        },
        {
          title: "فهم حقيقي لمنصات ومناطق مختلفة",
          desc: "اشتغلنا على أنواع محتوى ومناطق كتير، وده معناه إننا فاهمين فيد جمهورك من الأول.",
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
      title: "بعض من نتايجنا.",
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
      title: "صناع محتوى وعلامات تجارية وشركاء إنتاج.",
      sub: "سواء عبر تعاون مباشر، أو كشريك إبداعي مع وكالات إنتاج أخرى.",
    },
    testimonials: {
      eyebrow: "آراء عملائنا",
      title: "إحساس العمل معانا.",
    },
    about: {
      eyebrow: "من نحن",
      title: "فريق تم اختياره لهدف واحد: محتواك.",
      body: "قمة فريق صغير ومختار بعناية، كل عضو فيه اتختبر وتخصص قبل ما ينضم لينا. بنجمع بين الحرفية الإبداعية، وفهم المنصات، والحس التسويقي، عشان ننتج محتوى يحقق نتائج، مش بس محتوى شكله حلو.",
      body2: "بنساعد العلامات التجارية وصناع المحتوى ينموا من خلال محتوى مبني عشان فعلاً يتشاف، يتشير، ويتحرك عليه حد.",
    },
    process: {
      eyebrow: "آلية العمل",
      title: "خمس خطوات. من غير مفاجآت.",
      steps: [
        { title: "أخبرنا عن مشروعك", desc: "نبذة سريعة عن أهدافك، جمهورك، وشكل النجاح بالنسبالك." },
        { title: "دراسة الأهداف والجمهور", desc: "بنحدد الجمهور والنبرة والفورمات الصح قبل ما نلمس أي لقطة." },
        { title: "بدء التنفيذ", desc: "المونتاج والثامبنيل والسكريبت بيتحركوا بالتوازي مع فريقك المتخصص." },
        { title: "مراجعة داخلية", desc: "مراجعة مخصصة من فريق مختص، مفيش حاجة توصلك من غير ما تتفحص." },
        { title: "التسليم النهائي", desc: "بتستلم الشغل جاهز للنشر مباشرة." },
      ],
    },
    contact: {
      eyebrow: "يلا نتكلم",
      title: "مستعد ترفع مستوى محتواك؟",
      sub: "تواصل معنا عبر واتساب لمناقشة مشروعك، والحصول على خطة مبنية على أهدافك.",
      cta: "تواصل عبر واتساب",
    },
    aiForm: {
      eyebrow: "بداية سريعة",
      title: "قولنا محتاج إيه، هياخد ٣٠ ثانية.",
      sub: "كام سؤال بسيط، وبعدها هنتواصل معاك بخطة واضحة.",
      thinking: "بيكتب...",
      restart: "ابدأ من جديد",
      submitted: {
        title: "تم الاستلام.",
        body: "هنتواصل معاك قريب على وسيلة التواصل اللي كتبتها.",
      },
      fallback: {
        name: "اسمك",
        namePlaceholder: "مثلاً: أحمد",
        serviceLabel: "محتاج إيه بالظبط؟",
        serviceOptions: [
          "مونتاج فيديوهات يوتيوب طويلة",
          "ريلز / شورتس",
          "إعلانات",
          "تصميم ثامبنيل",
          "كتابة سكريبت",
          "حاجة تانية",
        ],
        otherPlaceholder: "قولنا باختصار...",
        budgetLabel: "الميزانية اللي في بالك؟",
        budgetPlaceholder: "مثلاً: 20$ للفيديو",
        contactLabel: "أفضل طريقة نتواصل بيها معاك",
        contactMethods: ["واتساب", "مكالمة هاتفية", "إيميل", "حاجة تانية"],
        contactPlaceholder: "اكتب وسيلة التواصل",
        submit: "إرسال",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      tagline: "محتوى يبني الثقة، ويحول المشاهدين إلى عملاء.",
    },
  },
};

export type CopyType = {
  [K in keyof typeof copy.en]: typeof copy.en[K];
};