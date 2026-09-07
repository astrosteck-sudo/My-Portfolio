import { TrendingUp, ShieldCheck, ChevronRight, BarChart3, Users, Zap, Target, Eye, Heart, MessageCircle, Play } from "lucide-react";

/* ---------------------------------------------------------
   DESIGN TOKENS
   Claymorphism: soft putty surfaces, dual-tone shadows,
   professional blue accent for B2B analytics platform.
--------------------------------------------------------- */
const T = {
  cream: "#F6F1E6",
  clay: "#EFE7D8",
  clayLight: "#FBF7EE",
  blue: "#4A90E2",
  blueDeep: "#357ABD",
  blueSoft: "#E3F2FD",
  ink: "#2B241C",
  inkSoft: "rgba(43,36,28,0.62)",
  inkFaint: "rgba(43,36,28,0.4)",
};

const shadowOut = "8px 8px 18px rgba(120,95,60,0.22), -8px -8px 18px rgba(255,255,255,0.9)";
const shadowOutSm = "5px 5px 10px rgba(120,95,60,0.2), -5px -5px 10px rgba(255,255,255,0.9)";
const shadowIn = "inset 5px 5px 10px rgba(120,95,60,0.22), inset -5px -5px 10px rgba(255,255,255,0.85)";

function clayStyle({ bg = T.clay, radius = 24, shadow = shadowOut, extra = {} } = {}) {
  return { background: bg, borderRadius: radius, boxShadow: shadow, ...extra };
}

/* ---------------------------------------------------------
   ANALYTICS SCREEN — Creator profile lookup result showing
   audience quality, engagement metrics, and AI insights
--------------------------------------------------------- */
function AnalyticsScreen() {
  return (
    <div style={{ padding: "18px 16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Header with creator profile */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.blue}, ${T.blueDeep})`,
            }}
          />
          <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 16, color: T.blue }}>
            Riser
          </div>
        </div>
        <div
          style={{
            ...clayStyle({ bg: T.clayLight, radius: 999, shadow: shadowOutSm }),
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarChart3 size={15} color={T.inkSoft} strokeWidth={2.2} />
        </div>
      </div>

      {/* Creator profile card */}
      <div style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "16px" } })}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.blue}, ${T.blueDeep})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "#FFF",
            }}
          >
            @
          </div>
          <div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 15, color: T.ink }}>
              @creative_studio
            </div>
            <div style={{ fontSize: 11, color: T.inkFaint, marginTop: 2 }}>Lifestyle & Fashion Creator</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
          <div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 16, color: T.ink }}>125.4K</div>
            <div style={{ fontSize: 10, color: T.inkFaint, fontWeight: 600 }}>Followers</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 16, color: T.ink }}>892</div>
            <div style={{ fontSize: 10, color: T.inkFaint, fontWeight: 600 }}>Following</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 16, color: T.ink }}>2.1M</div>
            <div style={{ fontSize: 10, color: T.inkFaint, fontWeight: 600 }}>Likes</div>
          </div>
        </div>
      </div>

      {/* Audience Strength Score */}
      <div
        style={clayStyle({
          bg: `linear-gradient(150deg, ${T.blue}, ${T.blueDeep})`,
          radius: 20,
          extra: { padding: "16px", textAlign: "center" },
        })}
      >
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.85)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Audience Strength
        </div>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 36, color: "#FFF", marginTop: 4 }}>
          87
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            marginTop: 8,
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.2)",
            fontSize: 11,
            fontWeight: 600,
            color: "#FFF",
          }}
        >
          <ShieldCheck size={12} strokeWidth={2.5} /> High Authenticity
        </div>
      </div>

      {/* AI Insight */}
      <div style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "14px" } })}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <Zap size={14} color={T.blueDeep} strokeWidth={2.4} />
          <div style={{ fontSize: 12, fontWeight: 700, color: T.inkSoft }}>AI Insight</div>
        </div>
        <div style={{ fontSize: 12, color: T.ink, lineHeight: 1.5 }}>
          This creator's average video reaches ~70% of their follower count, indicating a highly engaged audience suitable for brand partnerships.
        </div>
      </div>

      {/* Engagement Trend */}
      <div style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "14px" } })}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.inkSoft }}>Engagement Trend</div>
          <div style={{ fontSize: 11, color: T.blueDeep, fontWeight: 600 }}>Last 30 days</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${height}%`,
                background: `linear-gradient(180deg, ${T.blue}, ${T.blueDeep})`,
                borderRadius: 4,
                minHeight: 8,
              }}
            />
          ))}
        </div>
      </div>

      {/* Best Performing Content */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 2 }}>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 14, color: T.ink }}>Top Content</div>
        <div style={{ fontSize: 11.5, color: T.inkFaint, fontWeight: 600 }}>View all</div>
      </div>

      <div style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "12px" } })}>
        <div style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: T.clay,
              boxShadow: shadowIn,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Play size={20} color={T.inkSoft} strokeWidth={2.2} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 12, color: T.ink, marginBottom: 4 }}>
              Summer Fashion Haul 2024
            </div>
            <div style={{ display: "flex", gap: 12, fontSize: 10.5, color: T.inkFaint }}>
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Eye size={11} strokeWidth={2.4} /> 342K
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Heart size={11} strokeWidth={2.4} /> 28.5K
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <MessageCircle size={11} strokeWidth={2.4} /> 1.2K
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   PHONE FRAME — Device chrome containing the analytics screen
--------------------------------------------------------- */
function PhoneMockup() {
  return (
    <div
      style={{
        width: "min(300px, 78vw)",
        aspectRatio: "300 / 612",
        margin: "0 auto",
        borderRadius: 46,
        background: `linear-gradient(155deg, #2a2a2a, #0a0a0a)`,
        boxShadow: "16px 16px 34px rgba(120,95,60,0.28), -14px -14px 30px rgba(255,255,255,0.95)",
        padding: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 36,
          background: T.cream,
          boxShadow: shadowIn,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* dynamic island */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 84,
            height: 22,
            borderRadius: 14,
            background: T.ink,
            border: "1px solid rgba(255,255,255,0.08)",
            zIndex: 5,
          }}
        />
        {/* status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px 4px", fontSize: 11, fontWeight: 700, color: T.ink, fontFamily: "'Baloo 2', sans-serif" }}>
          <span>9:41</span>
          <span>●●● 5G 🔋</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ animation: "screenIn 0.4s ease" }}>
            <AnalyticsScreen />
          </div>
        </div>
        {/* home indicator */}
        <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 10px" }}>
          <div style={{ width: 110, height: 4, borderRadius: 4, background: "rgba(43,36,28,0.25)" }} />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   FEATURE CARD — Analytics capability cards for the feature grid
--------------------------------------------------------- */
function FeatureCard({ icon, title, body }) {
  return (
    <div
      style={clayStyle({
        bg: T.clay,
        radius: 26,
        extra: { padding: "26px 24px", flex: "1 1 280px" },
      })}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: T.blueSoft,
          boxShadow: shadowOutSm,
          marginBottom: 16,
        }}
      >
        {icon}
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 17, color: T.ink, marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: 13.5, color: T.inkSoft, lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

/* ---------------------------------------------------------
   MAIN COMPONENT — Riser landing page for B2B analytics platform
--------------------------------------------------------- */
export default function RiserLanding() {
  return (
    <div
      style={{
        background: T.cream,
        minHeight: "100%",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: T.ink,
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        @keyframes screenIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .riser-reveal { animation: floatUp 0.7s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .riser-reveal, [style*="screenIn"] { animation: none !important; }
        }
        .riser-cta:hover { transform: translateY(-2px); }
        .riser-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
      `}</style>

      {/* NAV */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "26px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 22, color: T.ink }}>
          riser<span style={{ color: T.blue }}>.</span>
        </div>
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            color: T.inkSoft,
            padding: "7px 14px",
            borderRadius: 999,
            background: T.clay,
            boxShadow: shadowIn,
          }}
        >
          ● Beta
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "56px 24px 40px",
          display: "flex",
          gap: 48,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 380px" }} className="riser-reveal">
          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.03em",
              color: T.blueDeep,
              background: T.blueSoft,
              padding: "6px 14px",
              borderRadius: 999,
              marginBottom: 18,
            }}
          >
            Creator analytics for brands
          </div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px, 5.4vw, 58px)",
              lineHeight: 1.04,
              margin: "0 0 18px",
              letterSpacing: "-0.01em",
            }}
          >
            Know who's worth<br />
            the <span style={{ color: T.blue }}>partnership.</span>
          </h1>
          <p style={{ fontSize: 16.5, color: T.inkSoft, lineHeight: 1.6, maxWidth: 440, margin: "0 0 28px" }}>
            Riser analyzes a creator's public TikTok data — followers, engagement, content performance, and growth trends — to surface an audience-quality verdict. Stop guessing before you pay for promotion.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              className="riser-cta"
              style={{
                border: "none",
                cursor: "pointer",
                ...clayStyle({ bg: `linear-gradient(135deg, ${T.blue}, ${T.blueDeep})`, radius: 16, shadow: shadowOut }),
                padding: "14px 24px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 14.5,
                color: "#FFF",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Analyze a creator <ChevronRight size={16} strokeWidth={3} />
            </button>
            <button
              className="riser-cta"
              style={{
                border: "none",
                cursor: "pointer",
                ...clayStyle({ bg: T.clayLight, radius: 16, shadow: shadowOut }),
                padding: "14px 24px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 14.5,
                color: T.ink,
              }}
            >
              See a sample report
            </button>
          </div>
        </div>

        <div style={{ flex: "1 1 320px", minWidth: 280 }} className="riser-reveal">
          <PhoneMockup />
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 24px 70px" }}>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <FeatureCard
            icon={<Users size={20} color={T.blueDeep} strokeWidth={2.4} />}
            title="Audience Quality"
            body="Real engagement metrics, not just follower counts. Understand if a creator's audience is authentic and active."
          />
          <FeatureCard
            icon={<TrendingUp size={20} color={T.blueDeep} strokeWidth={2.4} />}
            title="Engagement Metrics"
            body="Deep dive into likes, comments, shares, and more. See how audiences truly interact with content."
          />
          <FeatureCard
            icon={<BarChart3 size={20} color={T.blueDeep} strokeWidth={2.4} />}
            title="Growth Trends"
            body="Track progress and consistency over time. Identify sustainable growth patterns vs. sudden spikes."
          />
          <FeatureCard
            icon={<Target size={20} color={T.blueDeep} strokeWidth={2.4} />}
            title="Niche & Audience Analysis"
            body="Understand who a creator really reaches. Demographics, interests, and alignment with your brand."
          />
          <FeatureCard
            icon={<Zap size={20} color={T.blueDeep} strokeWidth={2.4} />}
            title="AI-Powered Recommendations"
            body="Clear, actionable verdicts for campaign decisions. Get AI insights on partnership potential."
          />
          <FeatureCard
            icon={<Eye size={20} color={T.blueDeep} strokeWidth={2.4} />}
            title="Content Performance"
            body="See what's working and what isn't. Analyze top-performing content to inform collaboration strategy."
          />
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          borderTop: `1px solid rgba(43,36,28,0.1)`,
          padding: "22px 24px",
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 12.5,
          color: T.inkFaint,
        }}
      >
        <span>Riser — Creator Analytics Platform</span>
        <span>Data-driven decisions for brand partnerships</span>
      </div>
    </div>
  );
}
