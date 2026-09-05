import { useState } from 'react'
import { Check, Wallet, TrendingUp, ShieldCheck, ChevronRight, Plus, Bell, Lock, Download, ShoppingCart, Landmark, Heart, Radio, Play } from "lucide-react";

/* ---------------------------------------------------------
   DESIGN TOKENS
   Claymorphism: soft putty surfaces, dual-tone shadows,
   coral (creator) / mint (earner) as the two poles of the app.
--------------------------------------------------------- */
const T = {
  cream: "#F6F1E6",
  clay: "#EFE7D8",
  clayLight: "#FBF7EE",
  coral: "#FF6F51",
  coralDeep: "#E8562F",
  coralSoft: "#FFDCCD",
  mint: "#2FB88A",
  mintDeep: "#1E9A71",
  mintSoft: "#CBEFDE",
  ink: "#2B241C",
  inkSoft: "rgba(43,36,28,0.62)",
  inkFaint: "rgba(43,36,28,0.4)",
  amber: "#D9A441",
  amberDeep: "#A9760F",
  amberSoft: "#F5E3BC",
  gray: "rgba(43,36,28,0.5)",
  graySoft: "rgba(43,36,28,0.08)",
};

const shadowOut = "8px 8px 18px rgba(120,95,60,0.22), -8px -8px 18px rgba(255,255,255,0.9)";
const shadowOutSm = "5px 5px 10px rgba(120,95,60,0.2), -5px -5px 10px rgba(255,255,255,0.9)";
const shadowIn = "inset 5px 5px 10px rgba(120,95,60,0.22), inset -5px -5px 10px rgba(255,255,255,0.85)";

function clayStyle({ bg = T.clay, radius = 24, shadow = shadowOut, extra = {} } = {}) {
  return { background: bg, borderRadius: radius, boxShadow: shadow, ...extra };
}

/* ---------------------------------------------------------
   TOGGLE — the signature element: a squishy clay pill switch
   that physically slides between Creator (coral) and Earner (mint)
--------------------------------------------------------- */
function ModeToggle({ mode, setMode }) {
  const isCreator = mode === "creator";
  return (
    <div
      role="tablist"
      aria-label="View app as"
      style={{
        position: "relative",
        display: "flex",
        width: 260,
        maxWidth: "100%",
        padding: 6,
        borderRadius: 999,
        background: T.clay,
        boxShadow: shadowIn,
        margin: "0 auto 22px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 6,
          bottom: 6,
          left: isCreator ? 6 : "50%",
          width: "calc(50% - 6px)",
          borderRadius: 999,
          background: isCreator
            ? `linear-gradient(135deg, ${T.coral}, ${T.coralDeep})`
            : `linear-gradient(135deg, ${T.mint}, ${T.mintDeep})`,
          boxShadow: shadowOutSm,
          transition: "left 0.38s cubic-bezier(.5,-0.3,.4,1.3), background 0.3s",
        }}
      />
      {["creator", "earner"].map((m) => (
        <button
          key={m}
          role="tab"
          aria-selected={mode === m}
          onClick={() => setMode(m)}
          style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            border: "none",
            background: "transparent",
            padding: "10px 0",
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 14.5,
            letterSpacing: "0.01em",
            color: mode === m ? "#FFF9F3" : T.inkSoft,
            cursor: "pointer",
            transition: "color 0.3s",
          }}
        >
          {m === "creator" ? "Creator" : "Earner"}
        </button>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------
   PHONE SCREENS
--------------------------------------------------------- */
function ProgressPips({ filled, total, color }) {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 16,
            height: 6,
            borderRadius: 4,
            background: i < filled ? color : "rgba(43,36,28,0.12)",
            transition: "background 0.3s",
          }}
        />
      ))}
    </div>
  );
}

function CreatorScreen() {
  const perks = [
    { title: "Summer Brand Deal", payout: "$2,500.00", status: "ACTIVE" },
    { title: "NFT Collab #04", payout: "$1,200.00", status: "PAUSED" },
  ];
  const activity = [
    { icon: Download, title: "Twitch Ad Revenue", time: "Today, 2:15 PM", amount: "+$842.00", positive: true },
    { icon: ShoppingCart, title: "Software Subscription", time: "Yesterday, 9:41 AM", amount: "-$49.99", positive: false },
    { icon: Landmark, title: "Bank Deposit", time: "Aug 14, 2023", amount: "+$5,000.00", positive: true },
  ];
  return (
    <div style={{ padding: "18px 16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.coral}, ${T.coralDeep})`,
            }}
          />
          <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 16, color: T.coral }}>
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
          <Bell size={15} color={T.inkSoft} strokeWidth={2.2} />
        </div>
      </div>

      <div
        style={clayStyle({
          bg: `linear-gradient(150deg, ${T.coral}, ${T.coralDeep})`,
          radius: 24,
          extra: { padding: "18px 20px", textAlign: "center" },
        })}
      >
        <div style={{ fontSize: 11, color: "rgba(255,249,243,0.85)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Available balance
        </div>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 30, color: "#FFF9F3", marginTop: 4 }}>
          $12,450.00
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            marginTop: 10,
            padding: "5px 12px",
            borderRadius: 999,
            background: "rgba(255,249,243,0.18)",
            fontSize: 11,
            fontWeight: 600,
            color: "#FFF9F3",
          }}
        >
          <ShieldCheck size={12} strokeWidth={2.5} /> Secure escrow active
        </div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          style={{
            ...clayStyle({ bg: T.clayLight, radius: 16, shadow: shadowOutSm }),
            flex: 1,
            border: "none",
            padding: "11px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            color: T.ink,
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 13.5,
            cursor: "pointer",
          }}
        >
          <Plus size={15} strokeWidth={3} /> Add
        </button>
        <button
          style={{
            ...clayStyle({ bg: `linear-gradient(135deg, ${T.coral}, ${T.coralDeep})`, radius: 16, shadow: shadowOutSm }),
            flex: 1,
            border: "none",
            padding: "11px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            color: "#FFF9F3",
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 13.5,
            cursor: "pointer",
          }}
        >
          <Wallet size={15} strokeWidth={2.5} /> Withdraw
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 2 }}>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 14, color: T.coral }}>Creator Perks</div>
        <div style={{ fontSize: 11.5, color: T.inkFaint, fontWeight: 600 }}>View All</div>
      </div>

      {perks.map((p) => (
        <div key={p.title} style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "13px 15px", display: "flex", alignItems: "center", justifyContent: "space-between" } })}>
          <div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 13.5, color: T.ink }}>{p.title}</div>
            <div style={{ fontSize: 11.5, color: T.inkFaint, marginTop: 2 }}>Payout {p.payout}</div>
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.03em",
              color: p.status === "ACTIVE" ? T.mintDeep : T.amberDeep,
              background: p.status === "ACTIVE" ? T.mintSoft : T.amberSoft,
              padding: "4px 9px",
              borderRadius: 999,
            }}
          >
            {p.status}
          </div>
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 4 }}>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 14, color: T.coral }}>Activity</div>
        <div style={{ fontSize: 11.5, color: T.inkFaint, fontWeight: 600 }}>History</div>
      </div>

      {activity.map((a) => {
        const Icon = a.icon;
        return (
          <div key={a.title} style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" } })}>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 12,
                  background: T.clay,
                  boxShadow: shadowIn,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={15} color={T.inkSoft} strokeWidth={2.2} />
              </div>
              <div>
                <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 12.5, color: T.ink }}>{a.title}</div>
                <div style={{ fontSize: 10.5, color: T.inkFaint, marginTop: 1 }}>{a.time}</div>
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: 12.5,
                color: a.positive ? T.mintDeep : T.coralDeep,
              }}
            >
              {a.amount}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function EarnerScreen() {
  const tasks = [
    { handle: "@stacey_style", type: "Follow & Like", reward: "2.50", cta: "Follow", icon: Heart },
    { handle: "@tech_wiz", type: "Join Live Stream", reward: "5.00", cta: "Join", icon: Radio },
    { handle: "@chef_kofi", type: "Watch Video", paid: true, icon: Play },
  ];
  return (
    <div style={{ padding: "18px 16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 16, color: T.mintDeep }}>
          Riser
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              ...clayStyle({ bg: T.clayLight, radius: 999, shadow: shadowOutSm }),
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={14} color={T.inkSoft} strokeWidth={2.2} />
          </div>
          <div
            style={{
              ...clayStyle({ bg: `linear-gradient(135deg, ${T.mint}, ${T.mintDeep})`, radius: 999, shadow: shadowOutSm }),
              padding: "6px 12px",
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 700,
              fontSize: 11.5,
              color: "#F4FFF9",
            }}
          >
            GH₵42.80
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "inline-block",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.03em",
            color: T.amberDeep,
            background: T.amberSoft,
            padding: "4px 10px",
            borderRadius: 999,
            marginBottom: 8,
          }}
        >
          🌱 FRESH TIER
        </div>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 19, color: T.ink }}>
          Good morning, Champ!
        </div>
      </div>

      <div style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "13px 15px" } })}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 9 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.inkSoft }}>Daily Progress</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.mintDeep }}>2 of 5 today 🔥</div>
        </div>
        <ProgressPips filled={2} total={5} color={T.mint} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 2 }}>
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 14, color: T.ink }}>Available Tasks</div>
        <div style={{ fontSize: 11.5, color: T.inkFaint, fontWeight: 600 }}>View all</div>
      </div>

      {tasks.map((t) => {
        const Icon = t.icon;
        return (
          <div key={t.handle} style={clayStyle({ bg: T.clayLight, radius: 20, extra: { padding: "13px 15px" } })}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: t.paid ? 0 : 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${T.mint}, ${T.mintDeep})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={14} color="#F4FFF9" strokeWidth={2.4} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 13, color: T.ink }}>{t.handle}</div>
                  <div style={{ fontSize: 11, color: T.inkFaint, marginTop: 1 }}>{t.type}</div>
                </div>
              </div>
              {!t.paid && (
                <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 12.5, color: T.mintDeep }}>
                  GH₵{t.reward}
                </div>
              )}
              {t.paid && (
                <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11.5, fontWeight: 700, color: T.mintDeep }}>
                  Paid <Check size={13} strokeWidth={3} />
                </div>
              )}
            </div>
            {!t.paid && (
              <button
                style={{
                  ...clayStyle({ bg: `linear-gradient(135deg, ${T.mint}, ${T.mintDeep})`, radius: 14, shadow: shadowOutSm }),
                  width: "100%",
                  border: "none",
                  padding: "9px 0",
                  color: "#F4FFF9",
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 700,
                  fontSize: 12.5,
                  cursor: "pointer",
                }}
              >
                {t.cta}
              </button>
            )}
          </div>
        );
      })}

      <div style={clayStyle({ bg: T.graySoft, radius: 20, extra: { padding: "13px 15px", opacity: 0.75 } })}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 13, color: T.ink }}>Premium Task</div>
            <div style={{ fontSize: 11, color: T.inkFaint, marginTop: 1 }}>Share to Story</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, fontWeight: 700, color: T.gray, textAlign: "right" }}>
            <Lock size={12} strokeWidth={2.4} /> Diamond tier needed
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   PHONE FRAME
--------------------------------------------------------- */
function PhoneMockup({ mode }) {
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
          <div key={mode} style={{ animation: "screenIn 0.4s ease" }}>
            {mode === "creator" ? <CreatorScreen /> : <EarnerScreen />}
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
   FEATURE CARD
--------------------------------------------------------- */
function FeatureCard({ icon, tint, title, body }) {
  return (
    <div
      style={clayStyle({
        bg: T.clay,
        radius: 26,
        extra: { padding: "26px 24px", flex: "1 1 220px" },
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
          background: tint,
          boxShadow: shadowOutSm,
          marginBottom: 16,
        }}
      >
        {icon}
      </div>
      <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 17, color: T.ink, marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: 13.5, color: T.inkSoft, lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

/* ---------------------------------------------------------
   MAIN
--------------------------------------------------------- */
export default function RiserLanding() {
  const [mode, setMode] = useState("creator");

  const accent = mode === "creator" ? T.coral : T.mint;
  const accentDeep = mode === "creator" ? T.coralDeep : T.mintDeep;

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
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 22, color: T.ink }}>
          riser<span style={{ color: T.coral }}>.</span>
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
          ● In development
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
              color: accentDeep,
              background: mode === "creator" ? T.coralSoft : T.mintSoft,
              padding: "6px 14px",
              borderRadius: 999,
              marginBottom: 18,
              transition: "color 0.3s, background 0.3s",
            }}
          >
            Follow-to-earn · Ghana &amp; West Africa
          </div>
          <h1
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px, 5.4vw, 58px)",
              lineHeight: 1.04,
              margin: "0 0 18px",
              letterSpacing: "-0.01em",
            }}
          >
            Real growth,<br />
            paid <span style={{ color: accent, transition: "color 0.3s" }}>instantly.</span>
          </h1>
          <p style={{ fontSize: 16.5, color: T.inkSoft, lineHeight: 1.6, maxWidth: 440, margin: "0 0 28px" }}>
            Creators post follow tasks and pay only for verified follows. Earners complete them
            and get paid straight to mobile money — no waiting, no guesswork.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              className="riser-cta"
              style={{
                border: "none",
                cursor: "pointer",
                ...clayStyle({ bg: `linear-gradient(135deg, ${T.coral}, ${T.coralDeep})`, radius: 16, shadow: shadowOut }),
                padding: "14px 24px",
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: 14.5,
                color: "#FFF9F3",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Join as creator <ChevronRight size={16} strokeWidth={3} />
            </button>
            <button
              className="riser-cta"
              style={{
                border: "none",
                cursor: "pointer",
                ...clayStyle({ bg: T.clayLight, radius: 16, shadow: shadowOut }),
                padding: "14px 24px",
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: 14.5,
                color: T.ink,
              }}
            >
              Start earning
            </button>
          </div>
        </div>

        <div style={{ flex: "1 1 320px", minWidth: 280 }} className="riser-reveal">
          <ModeToggle mode={mode} setMode={setMode} />
          <PhoneMockup mode={mode} />
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 24px 70px" }}>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <FeatureCard
            icon={<ShieldCheck size={20} color={T.coralDeep} strokeWidth={2.4} />}
            tint={T.coralSoft}
            title="Verified, not guessed"
            body="Follows are matched against exported follower lists — payouts only trigger once a match is confirmed."
          />
          <FeatureCard
            icon={<TrendingUp size={20} color={T.mintDeep} strokeWidth={2.4} />}
            tint={T.mintSoft}
            title="Growth tiers that look organic"
            body="Creators start small on the Fresh tier and unlock bigger batches over time — Premium, then Diamond."
          />
          <FeatureCard
            icon={<Wallet size={20} color={T.coralDeep} strokeWidth={2.4} />}
            tint={T.coralSoft}
            title="Instant MoMo payouts"
            body="Earnings move to mobile money or bank the moment a task verifies — no minimum withdrawal."
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
        <span>Riser — working title</span>
        <span>Built in Accra, for Ghana &amp; West Africa</span>
      </div>
    </div>
  );
}
