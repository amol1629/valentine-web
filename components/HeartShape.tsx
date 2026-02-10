"use client";

export default function HeartShape({ children }) {
  return (
    <svg
      viewBox="0 0 200 180"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="heart-clip">
          <path
            d="
              M100 170
              C100 170 15 115 15 65
              C15 30 45 15 70 30
              C90 40 100 60 100 60
              C100 60 110 40 130 30
              C155 15 185 30 185 65
              C185 115 100 170 100 170
            "
          />
        </clipPath>
      </defs>

      <foreignObject
        width="100%"
        height="100%"
        clipPath="url(#heart-clip)"
      >
        <div className="w-full h-full">{children}</div>
      </foreignObject>
    </svg>
  );
}
