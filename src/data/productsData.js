 import annot8 from "../assets/annot8.png";
import vision8 from "../assets/vision8.png";
import control8 from "../assets/control8.png";
import swarm8 from "../assets/swarm8.png";
 export const productsData = [
  {
    id: "annot8",
    title: "ANNOT8",
    subtitle: "Training Data",
    description:
      "High-speed data annotation pipelines for perception models.",
    metric: "60% faster annotation workflows",
     image: annot8,
    longDescription:
      "ANNOT8 provides an end-to-end data annotation and training pipeline designed for autonomous perception systems operating at scale. It supports multi-modal data ingestion, labeling, validation, and training acceleration.",

    features: [
      "Multi-sensor annotation (RGB, LiDAR, IR)",
      "Human-in-the-loop validation",
      "Automated dataset versioning",
      "Scalable cloud-native pipelines",
    ],
  },

  {
    id: "vision8",
    title: "VISION8",
    subtitle: "Perception & SLAM",
    description:
      "Real-time 3D mapping and object understanding.",
    metric: "Real-time spatial intelligence",
     image: vision8,
    longDescription:
      "VISION8 enables real-time perception and mapping for autonomous systems using advanced SLAM and sensor fusion techniques.",

    features: [
      "Real-time 3D reconstruction",
      "Sensor fusion pipelines",
      "Dynamic obstacle detection",
      "Edge-optimized inference",
    ],
  },

  {
    id: "control8",
    title: "CONTROL8",
    subtitle: "Autonomy Core",
    description:
      "Decision-making, planning, and autonomous control systems.",
    metric: "Sub-millisecond response time",
     image: control8,
    longDescription:
      "CONTROL8 acts as the brain of the autonomous stack, handling planning, control, and real-time decision making under constraints.",

    features: [
      "Trajectory planning",
      "Real-time control loops",
      "Fail-safe autonomy logic",
      "Low-latency execution",
    ],
  },

  {
    id: "swarm8",
    title: "SWARM8",
    subtitle: "Multi-Agent Systems",
    description:
      "Distributed coordination across autonomous agents.",
    metric: "Scales to 1000+ agents",
     image: swarm8,
    longDescription:
      "SWARM8 enables coordinated behavior across large numbers of autonomous agents with decentralized communication.",

    features: [
      "Multi-agent coordination",
      "Decentralized decision making",
      "Fault-tolerant communication",
      "Scales to large fleets",
    ],
  },
];
