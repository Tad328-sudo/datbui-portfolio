/**
 * Bilingual dictionary. Project copy lives in src/data/projects.json (`en` field per project).
 * Keep `vi` and `en` in the same shape: components only ever read `t.<section>.<key>`.
 */
export const dictionary = {
  vi: {
    meta: {
      title: 'Bùi Thành Đạt | Video Editor Portfolio',
      langLabel: 'Chọn ngôn ngữ',
    },
    nav: {
      links: [
        { href: '#about', label: 'Giới thiệu' },
        { href: '#projects', label: 'Dự án' },
        { href: '#skills', label: 'Công cụ' },
        { href: '#experience', label: 'Kinh nghiệm' },
      ],
      brand: 'Bùi Thành Đạt',
      contact: 'Liên hệ',
      openMenu: 'Mở menu',
      closeMenu: 'Đóng menu',
    },
    hero: {
      status: 'Đang nhận dự án freelance và hợp tác dài hạn (GMT+7)',
      eyebrow: 'Bùi Thành Đạt',
      title: 'Dựng video giữ chân người xem đến giây cuối.',
      sub: 'Video Editor & Content Creator. Nhận talkshow, TVC và short-form, từ footage thô đến bản master 4K.',
      ctaPrimary: 'Xem dự án',
      ctaSecondary: 'Liên hệ',
      scrollAria: 'Cuộn xuống xem dự án',
    },
    showreel: {
      title: 'Showreel 2026',
      aria: 'Xem showreel trên Google Drive',
      alt: 'Showreel của Bùi Thành Đạt',
      desc: 'Tuyển chọn từ talkshow, sự kiện Metta, Vie Beauty và các dự án concept.',
      cursor: 'Xem',
    },
    about: {
      title: 'Dựng có nhịp, kể có cảm xúc.',
      intro:
        'Mình là Đạt, Video Editor & Content Creator ở TP. Thủ Đức. Mình làm talkshow, video thương hiệu và short-form cho TikTok/Reels.',
      value: null,
      portraitAlt: 'Chân dung Bùi Thành Đạt',
      stats: [
        { value: '50+', label: 'video đã xuất bản' },
        { value: '8+', label: 'đối tác & thương hiệu' },
      ],
      principles: [
        {
          title: 'Nhịp dựng đi cùng cảm xúc',
          body: 'Từ footage RAW/ProRes đến master 4K chuẩn màu. Mình kiểm soát pacing để người xem không rời video giữa chừng.',
        },
        {
          title: 'Thẩm mỹ phục vụ mục tiêu của thương hiệu',
          body: 'Mình bắt đầu từ creative brief, đi qua tối ưu source thô và hoàn thiện đúng tinh thần nhận diện của khách hàng.',
        },
        {
          title: 'Đúng hạn và nhận phản hồi thẳng thắn',
          body: 'Mình tôn trọng deadline và xử lý revision nhanh, rõ ràng.',
        },
      ],
    },
    projects: {
      heading: (n) => `${n} dự án tiêu biểu`,
      filterAria: 'Lọc theo thể loại dự án',
      categories: {
        all: 'Tất cả',
        'long-form': 'Long-form',
        'short-form': 'Short-form',
        commercial: 'Commercial & Concept',
        training: 'Training & Y Khoa',
      },
      cardCategories: {
        'long-form': 'Long-form',
        'short-form': 'Short-form',
        commercial: 'Commercial & Concept',
        training: 'Training & Y Khoa',
      },
      modalCategories: {
        'long-form': 'Long-form (Talkshow)',
        'short-form': 'Short-form (TikTok / Reels)',
        commercial: 'Commercial & Concept',
        training: 'Training & Y Khoa',
      },
      episodesCount: (n) => `${n} tập`,
      episodeList: 'Danh sách tập',
      role: 'Vai trò:',
      view: 'Xem',
      closeModal: 'Đóng cửa sổ chi tiết',
      openDrive: 'Xem video trên Google Drive',
      openDocs: 'Mở tài liệu Google Docs',
    },
    skills: {
      title: 'Công cụ & thiết bị',
      groupTitles: ['Phần mềm', 'Cách làm việc', 'Thiết bị'],
      levelLabel: (n) => `Mức thành thục ${n}/10`,
      software: [
        'Short-form cho TikTok/Reels: nhịp nhanh, viral sound, dynamic typography.',
        'Dựng chính: talkshow multi-cam, TVC sự kiện, sync âm thanh timeline phức tạp.',
        'Hậu kỳ nhiếp ảnh: xử lý file RAW, cân sáng và đồng bộ preset màu lookbook, sản phẩm.',
        'Chỉnh màu, cân da, tạo tone phim nhựa 35mm.',
        'Lower-thirds, intro/outro, tracking và hiệu ứng cơ bản.',
      ],
      workflow: [
        { name: 'Hiểu brief', note: 'Chuyển mục tiêu truyền thông của nhãn hàng thành nhịp dựng và ngôn ngữ hình ảnh.' },
        { name: 'Nhận phản hồi', note: 'Phân tích đúng ý đạo diễn/khách hàng và sửa nhanh, chính xác.' },
        { name: 'Quản lý tiến độ', note: 'Tối ưu quy trình ingest, proxy, render để bàn giao đúng hạn.' },
        { name: 'Phối hợp nhóm', note: 'Làm việc cùng Director, Content Writer, Sound Designer và Client.' },
      ],
      gear: [
        { name: 'Canon 5D Mark IV', note: 'Full-frame 4K, giữ chi tiết da và bối cảnh.' },
        { name: 'Godox V1c', note: 'Đèn đầu tròn, ánh sáng mịn cho phỏng vấn và chân dung.' },
        { name: 'PC dựng phim', note: 'Core i7, 32GB RAM, GPU RTX, màn hình 100% sRGB.' },
        { name: 'Tai nghe kiểm âm', note: 'Nghe rõ tạp âm và cân EQ chính xác.' },
      ],
    },
    experience: {
      title: 'Kinh nghiệm',
      items: [
        {
          period: '2024 – nay',
          title: 'Senior Video Editor & Content Post-Production',
          place: 'Freelance & đối tác chiến lược',
          desc: 'Hậu kỳ trọn gói talkshow "Check In Cùng Phúc" (8 tập), chuỗi video thương hiệu Metta Spa Quận 1 và nội dung TikTok cho Phương Tuấn Mobile, Vie Beauty.',
          highlight: '50+ video xuất bản đa nền tảng',
        },
        {
          period: '2025 – 2026',
          title: 'Video Editor & Colorist',
          place: 'Wolf Label',
          desc: 'Biên tập recap sự kiện doanh nghiệp và quảng cáo ngành y khoa, chăm sóc mẹ và bé (ST.PARK Care). Color grading trên DaVinci Resolve, đồng bộ âm thanh phòng thu, xử lý timeline multi-cam.',
          highlight: 'Multi-cam và chuẩn hóa âm thanh phòng thu',
        },
        {
          period: '2022 – 2023',
          title: 'Visual Creator',
          place: 'Quay dựng & nhiếp ảnh (dự án độc lập)',
          desc: 'Làm trọn quy trình các dự án độc lập: concept, chụp lookbook/sản phẩm, quay tại hiện trường và dựng.',
          highlight: 'Concept, nhiếp ảnh và dựng',
          linkLabel: 'Xem lookbook Áo Dài Tết',
        },
      ],
    },
    contact: {
      title: 'Có dự án video? Nói với mình.',
      sub: 'Đang nhận dự án freelance và hợp tác dài hạn.',
      emailLabel: 'Email',
      phoneLabel: 'Điện thoại / Zalo',
      phoneDisplay: '0785 329 667',
      phoneHref: 'tel:0785329667',
      messenger: { label: 'Mở Zalo', href: 'https://zalo.me/0785329667' },
      phoneCopyValue: '0785329667',
      copy: 'Sao chép',
      copied: 'Đã sao chép',
      copyEmail: 'Sao chép email',
      copyPhone: 'Sao chép số điện thoại',
      location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    },
  },

  en: {
    meta: {
      title: 'Bui Thanh Dat | Video Editor & Post-Production Specialist',
      langLabel: 'Select language',
    },
    nav: {
      links: [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Tools' },
        { href: '#experience', label: 'Experience' },
      ],
      brand: 'Bui Thanh Dat',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      status: 'Available for Global Remote Projects & Retainers (GMT+7)',
      eyebrow: 'BUI THANH DAT • VIDEO EDITOR & POST-PRODUCTION SPECIALIST',
      title: 'Turning raw footage into high-retention 4K visual stories.',
      sub: 'Specializing in Multi-Cam Podcasts, High-Converting Short-Form (TikTok/Reels), Commercial Recaps, and Cinematic Color Grading. Advantageous GMT+7 timezone for overnight turnaround.',
      ctaPrimary: 'Explore Projects',
      ctaSecondary: 'Book a Discovery Call',
      scrollAria: 'Scroll down to projects',
    },
    showreel: {
      title: 'Showreel 2026',
      aria: 'Watch the showreel on Google Drive',
      alt: 'Bui Thanh Dat showreel',
      desc: 'Selected cuts from talkshows, Metta events, Vie Beauty campaigns and concept projects.',
      cursor: 'Watch',
    },
    about: {
      title: 'Cut with rhythm. Tell with emotion.',
      intro:
        'As a Video Editor with a strong foundation in commercial photography and studio lighting, I obsess over pacing, rhythm, and emotional resonance. My goal is to transform raw footage into crisp, high-retention 4K narratives tailored for each platform.',
      value:
        'Great editing balances visual aesthetics with audience retention. From decoding creative briefs and managing multi-cam proxies to sound design and film-emulation grading, I deliver broadcast-ready cuts on schedule.',
      portraitAlt: 'Portrait of Bui Thanh Dat',
      stats: [
        { value: '50+', label: 'Published Videos Across Platforms' },
        { value: '8+', label: 'Brand & Creator Partnerships' },
        { value: '4K', label: 'Color-Managed & Proxy Workflow' },
      ],
      principles: [
        {
          title: 'Pacing that follows emotion',
          body: 'From RAW/ProRes footage to color-managed 4K masters, I control pacing so viewers do not drop off mid-video.',
        },
        {
          title: 'Aesthetics in service of the brand',
          body: "I start from the creative brief, optimize the raw source, and finish in line with the client's visual identity.",
        },
        {
          title: 'On time, with direct feedback',
          body: 'I respect deadlines and turn revisions around quickly and clearly.',
        },
      ],
    },
    projects: {
      heading: (n) => `${n} featured projects`,
      filterAria: 'Filter projects by category',
      categories: {
        all: 'All',
        'long-form': 'Long-form & Podcasts',
        'short-form': 'Short-form & Reels',
        commercial: 'Commercial & Events',
        training: 'Training & Medical',
      },
      cardCategories: {
        'long-form': 'Long-form & Podcasts',
        'short-form': 'Short-form & Reels',
        commercial: 'Commercial & Events',
        training: 'Training & Medical',
      },
      modalCategories: {
        'long-form': 'Long-form & Podcasts',
        'short-form': 'Short-form & Reels',
        commercial: 'Commercial & Events',
        training: 'Training & Medical',
      },
      episodesCount: (n) => `${n} episodes`,
      episodeList: 'Episode list',
      role: 'Role:',
      view: 'Watch',
      closeModal: 'Close project details',
      openDrive: 'Watch on Google Drive',
      openDocs: 'Open Google Docs',
    },
    skills: {
      title: 'Tools & Equipment',
      groupTitles: ['Software', 'Remote Workflow', 'Hardware & Studio Gear'],
      levelLabel: (n) => `Proficiency ${n}/10`,
      software: [
        'High-velocity short-form editing for TikTok, Reels & Shorts: 3-second hooks, trending audio sync, and kinetic captions.',
        'Primary NLE: multi-cam podcast syncing, commercial cuts, J/L-cut pacing, and complex timeline management.',
        'RAW photo development, exposure matching, and custom color presets for lookbooks & product stills.',
        'Node-based color grading, skin-tone balancing, shot matching, and 35mm film emulation.',
        'Custom lower-thirds, motion titles, basic planar tracking, and visual transitions.',
      ],
      workflow: [
        {
          name: 'Brief Comprehension',
          note: 'Translating brand guidelines and creator styles into high-retention visual pacing and hooks.',
        },
        {
          name: 'Frame-Accurate Revisions',
          note: 'Fast, structured turnaround on client feedback via Frame.io, Notion, and Slack.',
        },
        {
          name: 'Overnight Turnaround (GMT+7)',
          note: 'Streamlined ingest, proxy, and render pipeline. Send raw files at EOD, wake up to the first cut.',
        },
        {
          name: 'Cross-Team Collaboration',
          note: 'Seamless async communication with Creative Directors, Scriptwriters, and Thumbnail Designers.',
        },
      ],
      gear: [
        {
          name: 'Canon 5D Mark IV',
          note: 'Full-frame 4K capture with rich dynamic range and natural skin-tone reproduction.',
        },
        {
          name: 'Godox V1c Lighting',
          note: 'Round-head studio flash & modifiers for soft, dimensional interview and portrait lighting.',
        },
        {
          name: '4K Editing Workstation',
          note: 'Intel Core i7, 32GB RAM, NVIDIA RTX GPU handling RAW/ProRes timelines on a 100% sRGB calibrated display.',
        },
        {
          name: 'Studio Monitoring Headphones',
          note: 'Flat-response acoustic monitoring for dialogue cleanup, EQ balancing, and immersive SFX.',
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: '2024 – Present',
          title: 'Senior Video Editor & Post-Production Specialist',
          place: 'Freelance & Strategic Partners',
          desc: "Led post-production for the 8-episode 'Check In With Phuc' talkshow, Metta Spa campaigns, and viral short-form pipelines for tech & beauty brands (50+ published videos).",
          highlight: '50+ videos published across platforms',
        },
        {
          period: '2025 – 2026',
          title: 'Video Editor & Colorist',
          place: 'Wolf Label',
          desc: 'Produced corporate event recaps and healthcare campaigns (ST.PARK Care). Standardized DaVinci Resolve color workflows, studio audio mastering, and multi-cam editing.',
          highlight: 'Multi-cam and studio audio standardization',
        },
        {
          period: '2022 – 2023',
          title: 'Visual Creator (Cinematography & Photography)',
          place: 'Independent Projects',
          desc: 'Directed end-to-end visual production from concept development and studio lighting to shooting and editing commercial product stills & fashion lookbooks.',
          highlight: 'Concept, photography and editing',
          linkLabel: 'View Ao Dai Tet lookbook',
        },
      ],
    },
    contact: {
      title: 'Ready to turn raw footage into high-performing videos?',
      sub: 'Available for freelance projects, YouTube creator retainers, and agency partnerships worldwide.',
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp / Phone',
      phoneDisplay: '+84 785 329 667',
      phoneHref: 'tel:+84785329667',
      messenger: { label: 'Open WhatsApp', href: 'https://wa.me/84785329667' },
      phoneCopyValue: '+84785329667',
      copy: 'Copy',
      copied: 'Copied',
      copyEmail: 'Copy email',
      copyPhone: 'Copy phone number',
      location: 'Ho Chi Minh City, Vietnam (GMT+7 • Remote Worldwide)',
    },
  },
}
