// navbar
export const navitem = [
  {
    item: "Home",
    href: "/",
  },
  {
    item: "Why Me",
    href: "#whyme",
  },
  {
    item: "Testimonials",
    href: "#testimonials",
  },
  {
    item: "Recent work",
    href: "#recentWork",
  },
  {
    item: "Get In Touch",
    href: "#getintouch",
  },
];

import {
  client_img1,
  client_img2,
  client_img3,
  client_img4,
  help_you_with,
  how,
  programe1_image,
  programe2_image,
  programe_1_banner_image,
  what_i_provide,
  why_me_img1_prg1,
  why_me_img2_prg2,
  why_me_img3_prg3,
} from "@/utils";
import { Program, TestimonialsData, WhyMeDataI } from "@/types";

export const whyMeData: WhyMeDataI = {
  title: "Why Me?",
  description:
    "Solving user & business problems since last 15+ years. I can help you get desired results in Personal, Professional and Spiritual realms.",
  sections: [
    {
      title: "What I Provide",
      bullets: [
        "Understand You – Dig into You a little bit - old habits, influences, bias, culture, known/unknown gaps, basically uncover The Stuck in You.",
        "Focus on the Now – Be completely aware of what is Really causing you to not move forward in life.",
        "Come up with a Vision and an Executable Plan for the future.",
      ],
      imageSrc: what_i_provide,
    },
    {
      title: "Help You With",
      bullets: [
        "A deeper understanding of how fear is wired in your brain and body, and how you can take control back from fear to stop it from holding you back.",
        "A sense of acceptance and appreciation for who you are, allowing you to relax and fully enjoy your life.",
        "Healing from the past and releasing feelings of guilt, shame, blame, and regret.",
        "To transform difficult workspace relationships.",
      ],
      imageSrc: help_you_with,
    },
    {
      title: "How",
      bullets: [
        "Individual Coaching - 1 on 1 Virtual or In-Person Coaching",
        "Group Coaching",
        "Create a Strong Team",
        "Enable your Associates",
        "Build Confidence",
        "Organizational Goals",
      ],
      imageSrc: how,
    },
  ],
};

export const testimonialsData: TestimonialsData = {
  title: "Testimonials",
  description:
    "Here are some testimonials from my clients. sharing their experiences with me.",
  testimonials: [
    {
      id: 1,
      text: "Saurabh has a great way with people. He can easily put you at ease and has a font of knowledge to share on many topics. He gives excellent perspective on work situations, and offers alternative ways to view things. Every session was actionable , and he kept me accountable by assigning homework. His advice is sound and his personal attention makes you feel valued as an individual.He is very approachable and has intuitive, sensitive listening skills.He was extremely effective in nailing down my personality traits, uncovering what provided me with positive vibes and what I should stay away from. I can highly recommend coaching with Saurabh.",
      clientName: "Disha Gupta",
      clientImage: client_img1,
    },
    {
      id: 2,
      text: "I started coaching under Saurabh 10 months ago. Saurabh is an active listener and gave me enough time to put my thoughts together and communicate and made me feel at ease. He helped me set up my goals and follow through on them and his positive attitude helped me move forward despite setbacks. He is very knowledgeable and gives sound advice on personal and professional matters. I would definitely recommend Saurabh as a coach.",
      clientName: "Marigold Hayes",
      clientImage: client_img1,
    },
  ],
};

export const programsData: Program[] = [
  {
    id: 1,
    image: programe1_image,
    title: "Slow down to pace up! (Intensive)",
    description:
      "This is a short, but foundational, journey for you to start transforming your mindset - because it all starts there!",
    buttonText: "Know more",
    slug: "Slow-down-to-pace-up",
    pageDetails: {
      pageTitle: "Slow down to pace up!",
      bannerImage: programe_1_banner_image,
      subheading:
        "This is a short, but foundational, journey for you to start transforming your mindset - because it all starts there!",
      whyMeData: {
        title: "Why Choose This Program?",
        description:
          "I am a Certified Personal and Executive Coach (fancy way of saying that I am a Life Coach++). A Certified Mindfulness-Based Stress Reduction(MBSR) practitioner which empowers me to help you cope with stress and improve your well-being. And a proud Meditator!",
        sections: [
          {
            title: "I can help You",
            bullets: [
              "understand and control fear to stop it from holding you back",
              "Understand the importance of a balanced approach.",
              "heal from the past and release guilt, shame, and regret",
              "build a supportive network and set healthy boundaries",
            ],
            imageSrc: why_me_img1_prg1,
          },
          {
            title: "Simple 3-step Plan",
            bullets: [
              "Understand You - Dig into You a little bit - old habits, influences, bias, culture, known/unknown gaps, basically uncover the Stuck in You.",
              "Focus on the Now - Be completely aware of what is Really causing you to not move forward in life.",
              "Plan the Future - Come up with a Vision and an Executable Plan for the future.",
            ],
            imageSrc: why_me_img2_prg2,
          },
          {
            title: "Put in Action through",
            bullets: [
              "Individual Coaching - 1 on 1 Virtual or In-Person Coaching",
              "Group Coaching",
              "Create a Strong Team",
              "Enable your Associates",
              "Build Confidence",
            ],
            imageSrc: why_me_img3_prg3,
          },
        ],
      },
    },
  },
  {
    id: 2,
    image: programe2_image,
    title: "Handle life challenges intentionally",
    description:
      "Life is full of challenges that test our resilience, decision-making, and inner strength.",
    buttonText: "Know more",
    slug: "Handle-life-challenges-intentionally",
    pageDetails: {
      pageTitle: "Handle Life Challenges Intentionally",
      bannerImage: programe_1_banner_image,
      subheading:
        'Life is full of challenges that test our resilience, decision-making, and inner strength. Our course, "Handle Life Challenges Intentionally," is designed to help you navigate these obstacles with purpose and confidence.',
      whyMeData: {
        title: "Why Choose This Program?",
        description:
          "I am a Certified Personal and Executive Coach (fancy way of saying that I am a Life Coach++). A Certified Mindfulness-Based Stress Reduction(MBSR) practitioner which empowers me to help you cope with stress and improve your well-being. And a proud Meditator!",
        sections: [
          {
            title: "I can help You",
            bullets: [
              "Shift Your Mindset: Embrace a proactive approach to life's challenges, turning obstacles into opportunities for growth.",
              "Enhance Decision-Making: Develop strategies for making thoughtful and intentional decisions that align with your personal and professional goals.",
              "Operate with Purpose: Cultivate habits and practices that enable you to handle stress, uncertainty, and adversity with grace and effectiveness.",
            ],
            imageSrc: what_i_provide,
          },
          {
            title: "4 key Capabilities that you'll Gain",
            bullets: [
              "Resilience: Build the inner strength to face challenges head-on and bounce back stronger than ever.",
              "Clarity: Gain a clear understanding of your values and priorities, which will guide your decision-making process.",
              "Confidence: Learn to trust your instincts and make decisions that reflect your true self.",
              "Balance: Achieve harmony between your personal and professional life, creating a fulfilling and purposeful existence.",
            ],
            imageSrc: help_you_with,
          },
          {
            title: "Who Benefits:",
            bullets: [
              "Professionals seeking to improve their leadership and decision-making skills.",
              "Entrepreneurs looking to navigate the complexities of running a business with confidence.",
              "Individuals wanting to live a more intentional and purpose-driven life.",
              "Through: Interactive Workshops, Personalized Coaching, Community Support",
              ' Enroll Today: Take the first step towards a more intentional, empowered, and balanced life. Join us in "Handle Life Challenges Intentionally" and transform the way you think, decide, and live.',
            ],
            imageSrc: how,
          },
        ],
      },
    },
  },
];
