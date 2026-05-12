import { useRef, useState, useCallback, useEffect } from "react";

interface AnimatedAvatarProps {
  className?: string;
}

const AnimatedAvatar = ({ className = "" }: AnimatedAvatarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverSide, setHoverSide] = useState<"none" | "left" | "right">("none");
  const [waveAngle, setWaveAngle] = useState(0);

  // Wave animation loop
  useEffect(() => {
    if (hoverSide === "none") {
      setWaveAngle(0);
      return;
    }
    let frame: number;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      // Wave back and forth: oscillate between -15 and 15 degrees
      const angle = Math.sin(elapsed * 0.008) * 15;
      setWaveAngle(angle);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hoverSide]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const relativeX = e.clientX - centerX;

      if (relativeX > 20) {
        setHoverSide("right");
      } else if (relativeX < -20) {
        setHoverSide("left");
      } else {
        setHoverSide("none");
      }
    },
    []
  );

  const handleMouseLeave = () => {
    setHoverSide("none");
  };

  // Arm raise angles
  const leftArmRaise = hoverSide === "left" ? -55 : 0;
  const rightArmRaise = hoverSide === "right" ? 55 : 0;
  // Wave rotation on the raised forearm
  const leftWave = hoverSide === "left" ? waveAngle : 0;
  const rightWave = hoverSide === "right" ? waveAngle : 0;
  // Smile
  const isSmiling = hoverSide !== "none";
  // Slight body lean towards hover
  const bodyLean =
    hoverSide === "left" ? -3 : hoverSide === "right" ? 3 : 0;

  return (
    <div
      ref={containerRef}
      className={`select-none cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        viewBox="0 0 300 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
        }}
      >
        {/* Whole body group with lean */}
        <g
          style={{
            transform: `rotate(${bodyLean}deg)`,
            transformOrigin: "150px 400px",
            transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {/* === LEGS === */}
          {/* Left leg */}
          <path
            d="M120 330 L110 420 L100 440 Q95 450 105 450 L125 448 Q132 447 130 440 L135 330"
            fill="#2d2d2d"
            stroke="#222"
            strokeWidth="1"
          />
          {/* Right leg */}
          <path
            d="M165 330 L170 420 L172 440 Q175 450 185 450 L200 448 Q207 447 205 440 L195 330"
            fill="#2d2d2d"
            stroke="#222"
            strokeWidth="1"
          />
          {/* Shoes */}
          <ellipse cx="113" cy="449" rx="18" ry="7" fill="#3a3a3a" />
          <ellipse cx="190" cy="449" rx="18" ry="7" fill="#3a3a3a" />

          {/* === BODY / TORSO (white shirt) === */}
          <path
            d="M110 200 Q108 210 108 230 L105 330 L195 330 L192 230 Q192 210 190 200 Q175 185 150 183 Q125 185 110 200Z"
            fill="#f0ece8"
            stroke="#ddd"
            strokeWidth="0.5"
          />
          {/* Shirt collar */}
          <path
            d="M130 195 Q150 205 170 195"
            fill="none"
            stroke="#d4d0cc"
            strokeWidth="1.5"
          />
          {/* Shirt sleeves */}
          <path
            d="M108 210 Q95 215 92 235 L105 240 Q108 225 110 215Z"
            fill="#f0ece8"
            stroke="#ddd"
            strokeWidth="0.5"
          />
          <path
            d="M192 210 Q205 215 208 235 L195 240 Q192 225 190 215Z"
            fill="#f0ece8"
            stroke="#ddd"
            strokeWidth="0.5"
          />

          {/* === LEFT ARM === */}
          <g
            style={{
              transform: `rotate(${leftArmRaise}deg)`,
              transformOrigin: "100px 220px",
              transition:
                "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            {/* Upper arm */}
            <path
              d="M100 235 L88 290 L98 295 L108 240Z"
              fill="#f5c5a3"
              stroke="#e8b08d"
              strokeWidth="0.5"
            />
            {/* Forearm + hand with wave */}
            <g
              style={{
                transform: `rotate(${leftWave}deg)`,
                transformOrigin: "93px 290px",
                transition:
                  hoverSide === "left"
                    ? "none"
                    : "transform 0.3s ease",
              }}
            >
              <path
                d="M88 290 L78 340 L90 343 L98 295Z"
                fill="#f5c5a3"
                stroke="#e8b08d"
                strokeWidth="0.5"
              />
              {/* Hand */}
              <circle cx="84" cy="345" r="12" fill="#f5c5a3" stroke="#e8b08d" strokeWidth="0.5" />
              {/* Fingers */}
              <path
                d="M76 338 L70 330 M78 336 L73 327 M82 335 L78 326 M86 336 L84 327"
                stroke="#e8b08d"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  opacity: hoverSide === "left" ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
              />
            </g>
          </g>

          {/* === RIGHT ARM === */}
          <g
            style={{
              transform: `rotate(${rightArmRaise}deg)`,
              transformOrigin: "200px 220px",
              transition:
                "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            {/* Upper arm */}
            <path
              d="M200 235 L212 290 L202 295 L192 240Z"
              fill="#f5c5a3"
              stroke="#e8b08d"
              strokeWidth="0.5"
            />
            {/* Forearm + hand with wave */}
            <g
              style={{
                transform: `rotate(${rightWave}deg)`,
                transformOrigin: "207px 290px",
                transition:
                  hoverSide === "right"
                    ? "none"
                    : "transform 0.3s ease",
              }}
            >
              <path
                d="M212 290 L222 340 L210 343 L202 295Z"
                fill="#f5c5a3"
                stroke="#e8b08d"
                strokeWidth="0.5"
              />
              {/* Hand */}
              <circle cx="216" cy="345" r="12" fill="#f5c5a3" stroke="#e8b08d" strokeWidth="0.5" />
              {/* Fingers */}
              <path
                d="M224 338 L230 330 M222 336 L227 327 M218 335 L222 326 M214 336 L216 327"
                stroke="#e8b08d"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  opacity: hoverSide === "right" ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
              />
            </g>
          </g>

          {/* === HEAD === */}
          <g>
            {/* Neck */}
            <rect
              x="140"
              y="175"
              width="20"
              height="18"
              rx="5"
              fill="#f5c5a3"
            />

            {/* Head shape */}
            <ellipse
              cx="150"
              cy="140"
              rx="55"
              ry="60"
              fill="#f5c5a3"
            />

            {/* Hair */}
            <path
              d="M95 130 Q95 75 150 70 Q205 75 205 130 Q205 105 190 95 Q175 85 150 82 Q125 85 110 95 Q95 105 95 130Z"
              fill="#3d2b1f"
            />
            {/* Side hair */}
            <path d="M95 130 Q92 115 95 100" fill="#3d2b1f" stroke="#3d2b1f" strokeWidth="5" />
            <path d="M205 130 Q208 115 205 100" fill="#3d2b1f" stroke="#3d2b1f" strokeWidth="5" />
            {/* Hair swoosh */}
            <path
              d="M120 85 Q140 72 165 80"
              fill="#3d2b1f"
              stroke="#3d2b1f"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Ears */}
            <ellipse cx="95" cy="140" rx="8" ry="12" fill="#f0b890" />
            <ellipse cx="205" cy="140" rx="8" ry="12" fill="#f0b890" />

            {/* Glasses frame */}
            <rect
              x="115"
              y="125"
              width="30"
              height="25"
              rx="5"
              fill="none"
              stroke="#333"
              strokeWidth="2.5"
            />
            <rect
              x="155"
              y="125"
              width="30"
              height="25"
              rx="5"
              fill="none"
              stroke="#333"
              strokeWidth="2.5"
            />
            {/* Bridge */}
            <path
              d="M145 137 L155 137"
              stroke="#333"
              strokeWidth="2"
            />
            {/* Temple arms */}
            <path d="M115 133 L97 130" stroke="#333" strokeWidth="2" />
            <path d="M185 133 L203 130" stroke="#333" strokeWidth="2" />

            {/* Eyes */}
            <ellipse cx="130" cy="137" rx="6" ry="7" fill="white" />
            <ellipse cx="170" cy="137" rx="6" ry="7" fill="white" />
            {/* Pupils - shift slightly toward hover side */}
            <circle
              cx={130 + (hoverSide === "right" ? 2 : hoverSide === "left" ? -2 : 0)}
              cy="138"
              r="3.5"
              fill="#5c3a1e"
              style={{ transition: "cx 0.3s" }}
            />
            <circle
              cx={170 + (hoverSide === "right" ? 2 : hoverSide === "left" ? -2 : 0)}
              cy="138"
              r="3.5"
              fill="#5c3a1e"
              style={{ transition: "cx 0.3s" }}
            />
            {/* Eye highlights */}
            <circle cx="128" cy="135" r="1.5" fill="white" opacity="0.8" />
            <circle cx="168" cy="135" r="1.5" fill="white" opacity="0.8" />

            {/* Eyebrows */}
            <path
              d="M118 120 Q130 114 142 120"
              stroke="#3d2b1f"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              style={{
                transform: hoverSide !== "none" ? "translateY(-2px)" : "none",
                transition: "transform 0.3s",
              }}
            />
            <path
              d="M158 120 Q170 114 182 120"
              stroke="#3d2b1f"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              style={{
                transform: hoverSide !== "none" ? "translateY(-2px)" : "none",
                transition: "transform 0.3s",
              }}
            />

            {/* Nose */}
            <path
              d="M148 148 Q150 155 152 148"
              stroke="#e0a07a"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Mouth */}
            {isSmiling ? (
              /* Big smile */
              <path
                d="M132 165 Q150 182 168 165"
                stroke="#c0705a"
                strokeWidth="2.5"
                fill="#c0705a"
                strokeLinecap="round"
                style={{ transition: "d 0.3s" }}
              />
            ) : (
              /* Neutral smile */
              <path
                d="M138 167 Q150 175 162 167"
                stroke="#c0705a"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            )}
            {/* Teeth when smiling */}
            {isSmiling && (
              <path
                d="M138 167 Q150 172 162 167"
                fill="white"
                opacity="0.9"
              />
            )}

            {/* Cheek blush */}
            <circle
              cx="112"
              cy="155"
              r="8"
              fill="#f0a0a0"
              opacity={isSmiling ? 0.4 : 0.15}
              style={{ transition: "opacity 0.3s" }}
            />
            <circle
              cx="188"
              cy="155"
              r="8"
              fill="#f0a0a0"
              opacity={isSmiling ? 0.4 : 0.15}
              style={{ transition: "opacity 0.3s" }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedAvatar;
