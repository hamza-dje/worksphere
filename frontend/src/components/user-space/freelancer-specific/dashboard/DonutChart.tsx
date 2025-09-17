import React from "react";

type DonutArcsProps = {
    data: [number, number, number]; // 3 values
    colors?: [string, string, string]; // optional colors
    size?: number; // px
    strokeWidth?: number; // px
    gapDeg?: number; // gap between segments in degrees
    startAngleDeg?: number; // where to start (default top)
    trackColor?: string; // optional background ring
    rounded?: boolean; // rounded ends
};

const DonutArcs: React.FC<DonutArcsProps> = ({
    data,
    colors = ["#FF6B6B", "#4CAF50", "#00BFFF"],
    size = 200,
    strokeWidth = 12,
    gapDeg = 6,
    startAngleDeg = -90, // start at 12 o'clock
    trackColor,
    rounded = true,
}) => {
    const cx = size / 2;
    const cy = size / 2;
    const r = (size - strokeWidth) / 2;

    // guard against negatives and total=0
    const safe = data.map((v) => Math.max(0, v)) as [number, number, number];
    const total = safe.reduce((a, b) => a + b, 0) || 1;

    const gapsTotal = gapDeg * safe.length;
    const usableDeg = Math.max(0, 360 - gapsTotal);

    let angle = startAngleDeg;

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="max-lg:size-[100px]"
            role="img"
            aria-label="Donut arcs chart"
        >
            {trackColor && (
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
            )}

            {safe.map((value, i) => {
                const segDeg = usableDeg * (value / total);
                if (segDeg <= 0.0001) {
                    // skip empty
                    angle += gapDeg;
                    return null;
                }
                const d = describeArc(cx, cy, r, angle, angle + segDeg);
                angle += segDeg + gapDeg;

                return (
                    <path
                        key={i}
                        d={d}
                        fill="none"
                        stroke={`var(--color-${colors[i]})`}
                        strokeWidth={strokeWidth}
                        strokeLinecap={rounded ? "round" : "butt"}
                    />
                );
            })}
        </svg>
    );
};

export default DonutArcs;

// --- helpers ---
function describeArc(
    cx: number,
    cy: number,
    r: number,
    startDeg: number,
    endDeg: number
) {
    const start = polarToCartesian(cx, cy, r, startDeg);
    const end = polarToCartesian(cx, cy, r, endDeg);
    const sweep = 1;
    const largeArc = normalize(endDeg - startDeg) > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`;
}

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
    const rad = (deg * Math.PI) / 180; // 0° = 3 o'clock, increases clockwise (SVG coords)
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function normalize(deg: number) {
    return ((deg % 360) + 360) % 360;
}
