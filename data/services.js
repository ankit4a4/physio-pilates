import phy1 from "../assets/services/physio/phy-1.jpg";
import phy2 from "../assets/services/physio/phy-2.jpg";
import phy3 from "../assets/services/physio/phy-3.jpg";
import phy4 from "../assets/services/physio/phy-4.jpg";
import phy5 from "../assets/services/physio/phy-5.jpg";
//------------------------ Pilates--------------------------//
import Pilate1 from "../assets/services/pilate/pilate-1.jpg";
import Pilate2 from "../assets/services/pilate/pilate-2.jpg";
import Pilate3 from "../assets/services/pilate/pilate-3.jpg";
import Pilate4 from "../assets/services/pilate/pilate-4.jpg";
import Pilate5 from "../assets/services/pilate/pilate-5.jpg";
//----------------------- yog-------------------------------- //
import Yog1 from "../assets/services/yog/yog-1.jpg";
import Yog2 from "../assets/services/yog/yog-2.jpg";
import Yog3 from "../assets/services/yog/yog-3.jpg";
import Yog4 from "../assets/services/yog/yog-4.jpg";
import Yog5 from "../assets/services/yog/yog-5.jpg";
//---------------------- therapy--------------------------------- //
import Therapy1 from "../assets/services/therapy/therapy-1.jpg";
import Therapy2 from "../assets/services/therapy/therapy-2.jpg";
import Therapy3 from "../assets/services/therapy/therapy-3.jpg";
import Therapy4 from "../assets/services/therapy/therapy-4.jpg";
import Therapy5 from "../assets/services/therapy/therapy-5.jpg";

export const services = [
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    mainimg: phy1,
    heroDescription:
      "Rebuild strength, restore movement, and relieve pain through expert physiotherapy tailored to your body’s needs.",
    description1:
      "Our physiotherapy sessions are designed to restore your physical health, relieve pain, and enhance movement using scientifically proven therapeutic techniques. We focus on long-term recovery, not just temporary relief, ensuring your body regains its full potential.",
    description2: [
      "Personalized treatment plans for sports injuries, joint pain, post-surgical rehabilitation, and mobility issues.",
      "Combination of manual therapy, electrotherapy, and exercise rehabilitation tailored to your condition.",
      "Focus on correcting posture, improving strength, and rebuilding functional movement patterns.",
      "Our physiotherapists work closely with you to track progress and prevent future injuries.",
    ],
    gallery: [phy2, phy3, phy4, phy5],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/contact",
  },
  {
    slug: "pilates",
    title: "Pilates",
    mainimg: Pilate1,
    heroDescription:
      "Build strength, flexibility, and balance with Pilates — a mindful movement practice for every body.",
    description1:
      "Pilates is a low-impact, full-body workout that enhances flexibility, strengthens core muscles, and improves posture. Our classes are guided by trained instructors who ensure each session aligns your body and mind for optimal performance and balance.",
    description2: [
      "Focus on developing a strong, stable core through controlled breathing and precise movement.",
      "Rehabilitation-based Pilates designed for pain management, injury prevention, and improved mobility.",
      "Enhances coordination, posture, and balance while promoting relaxation and body awareness.",
      "Suitable for all ages and fitness levels — from beginners to professional athletes.",
    ],
    gallery: [Pilate2, Pilate3, Pilate4, Pilate5],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/contact",
  },
  {
    slug: "yog",
    title: "Yoga",
    mainimg: Yog1,
    heroDescription:
      "Discover peace, flexibility, and inner strength through yoga — where body, breath, and mind unite.",
    description1:
      "Our yoga sessions combine traditional practices with modern science to bring balance to your body, mind, and spirit. From beginners seeking flexibility to advanced practitioners looking for mindfulness, each class helps you cultivate inner peace and physical strength.",
    description2: [
      "Guided sessions including Hatha, Vinyasa, and restorative yoga styles suited to all levels.",
      "Incorporates breathing techniques (Pranayama) and meditation to promote relaxation and focus.",
      "Helps improve flexibility, stability, and muscle tone while reducing anxiety and fatigue.",
      "Experience the benefits of holistic healing through movement, breath, and mindfulness.",
    ],
    gallery: [Yog2, Yog3, Yog4, Yog5],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/contact",
  },
  {
    slug: "dry-needling-and-cup-therapy",
    title: "Dry Needling & Cup Therapy",
    mainimg: Therapy1,
    heroDescription:
      "Unlock deep muscle relief and restore circulation with our advanced dry needling and cupping therapies.",
    description1:
      "Our Dry Needling and Cupping Therapy sessions are advanced treatment methods aimed at relieving chronic pain, muscle stiffness, and tension. These therapies promote deep tissue healing, better circulation, and quicker recovery from physical stress or injury.",
    description2: [
      "Dry needling targets trigger points to release muscle knots and improve functional movement.",
      "Cupping therapy enhances blood flow, reduces inflammation, and relieves soreness naturally.",
      "Recommended for athletes, active individuals, and patients with long-standing pain or tightness.",
      "These treatments complement physiotherapy for faster healing and better overall recovery.",
    ],
    gallery: [Therapy2, Therapy3, Therapy4, Therapy5],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/contact",
  },
];
