import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// component
export default function Footer() {
  // render
  return (
    <footer
      className="py-12 text-center relative overflow-hidden"
      style={{ background: "#1a0e05" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          className="animate-heartbeat inline-block mb-4"
          whileHover={{ scale: 1.3 }}
        >
          <Heart size={24} style={{ fill: "#c4845a", stroke: "#c4845a" }} />
        </motion.div>
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(201, 169, 110, 0.4)",
            letterSpacing: "0.08em",
          }}
        >
          Made with ♡ for our special day
        </p>
      </div>
    </footer>
  );
}
