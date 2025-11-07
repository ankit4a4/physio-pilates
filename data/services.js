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
    description1:
      "Our physiotherapy treatments are designed to help you regain mobility, reduce pain, and restore your physical strength using proven techniques.",
    description2: [
      "We offer personalized sessions to address specific injuries and chronic conditions.",
      "Our certified physiotherapists use modern methods to ensure effective recovery.",
    ],
    gallery: [
      phy2,
      phy3,
      phy4,
      phy5,
      
    ],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/services/physiotherapy",
  },
  {
    slug: "pilates",
    title: "Pilates",
    mainimg: Pilate1,
    description1:
      "Experience the power of movement through Pilates — a system that enhances flexibility, strength, and balance.",
    description2: [
      "Our expert instructors guide you through core-strengthening exercises.",
      "Perfect for individuals of all fitness levels, from beginners to advanced.",
    ],
    gallery: [
      Pilate2,
      Pilate3,
      Pilate4,
      Pilate5,
      
    ],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/services/pilates",
  },
  {
    slug: "yog",
    title: "Yoga",
    mainimg: Yog1,
    description1:
      "Find harmony between body and mind through our customized yoga programs.",
    description2: [
      "We combine traditional asanas with mindfulness techniques.",
      "Perfect for stress relief, flexibility, and inner balance.",
    ],
    gallery: [
      Yog2,
      Yog3,
      Yog4,
      Yog5,
      
    ],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/services/yog",
  },
  {
    slug: "dry-needling-and-cup-therapy",
    title: "Dry Needling & Cup Therapy",
    mainimg: Therapy1,
    description1:
      "Targeted therapies to release muscle tension, improve circulation, and enhance recovery.",
    description2: [
      "Our specialists use advanced dry needling and cupping methods.",
      "These treatments are ideal for athletes and chronic pain management.",
    ],
    gallery: [
      Therapy2,
      Therapy3,
      Therapy4,
      Therapy5,
     
    ],
    levels: ["Beginner", "Intermediate", "Expert"],
    button: "/services/dry-needling-and-cup-therapy",
  },
];
