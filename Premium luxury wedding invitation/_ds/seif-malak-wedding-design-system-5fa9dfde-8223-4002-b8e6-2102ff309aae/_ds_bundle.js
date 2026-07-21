/* @ds-bundle: {"format":4,"namespace":"SeifMalakWeddingDesignSystem_5fa9df","components":[{"name":"Botanical","sourcePath":"components/invitation/Botanical.jsx"},{"name":"Countdown","sourcePath":"components/invitation/Countdown.jsx"},{"name":"DateBlock","sourcePath":"components/invitation/DateBlock.jsx"},{"name":"Divider","sourcePath":"components/invitation/Divider.jsx"},{"name":"FrameCard","sourcePath":"components/invitation/FrameCard.jsx"},{"name":"MapLink","sourcePath":"components/invitation/MapLink.jsx"},{"name":"Monogram","sourcePath":"components/invitation/Monogram.jsx"}],"sourceHashes":{"components/invitation/Botanical.jsx":"f93257ac88eb","components/invitation/Countdown.jsx":"b09182bd7bf5","components/invitation/DateBlock.jsx":"9f8f095e3305","components/invitation/Divider.jsx":"093ab8c683cf","components/invitation/FrameCard.jsx":"549c76057e17","components/invitation/MapLink.jsx":"6d5fe80545e4","components/invitation/Monogram.jsx":"0ee8d7bfa7ba","ui_kits/invitation/Envelope.jsx":"f56f08f4719e","ui_kits/invitation/Invitation.jsx":"0b2b6c413214","ui_kits/invitation/ShareBar.jsx":"c3114e349465"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeifMalakWeddingDesignSystem_5fa9df = window.SeifMalakWeddingDesignSystem_5fa9df || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/invitation/Botanical.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Botanical — the embossed leaf sprig from the invitation, as a decorative
 * image. `variant` picks the tall side sprig or the small gold ornament.
 */
function Botanical({
  variant = "sprig",
  src,
  height,
  opacity = 1,
  style,
  ...rest
}) {
  const file = src || (variant === "ornament" ? "assets/sprig.png" : "assets/botanical.png");
  const h = height ?? (variant === "ornament" ? 40 : 480);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: file,
    alt: "",
    "aria-hidden": "true",
    draggable: false,
    style: {
      display: "block",
      height: h,
      width: "auto",
      opacity,
      userSelect: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Botanical });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/Botanical.jsx", error: String((e && e.message) || e) }); }

// components/invitation/Countdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Next occurrence of a given month/day at or after now. */
function nextDate(month, day) {
  const now = new Date();
  let y = now.getFullYear();
  let target = new Date(y, month - 1, day, 0, 0, 0);
  if (target.getTime() < now.getTime()) target = new Date(y + 1, month - 1, day, 0, 0, 0);
  return target;
}

/**
 * Countdown — live days/hours/minutes/seconds to the wedding date.
 * Defaults to the next 18 September.
 */
function Countdown({
  month = 9,
  day = 18,
  target,
  label = "UNTIL WE SAY \u201CI DO\u201D",
  style,
  ...rest
}) {
  const targetDate = React.useMemo(() => target ? new Date(target) : nextDate(month, day), [target, month, day]);
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetDate.getTime() - now);
  const s = Math.floor(diff / 1000);
  const units = [{
    v: Math.floor(s / 86400),
    l: "DAYS"
  }, {
    v: Math.floor(s % 86400 / 3600),
    l: "HOURS"
  }, {
    v: Math.floor(s % 3600 / 60),
    l: "MINUTES"
  }, {
    v: s % 60,
    l: "SECONDS"
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: "center",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-muted)",
      marginBottom: 18
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 28
    }
  }, units.map((u, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: u.l
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      color: "var(--accent)",
      opacity: 0.4,
      lineHeight: 1.2
    }
  }, ":") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: 54,
      lineHeight: 1,
      color: "var(--text-heading)",
      fontVariantNumeric: "tabular-nums"
    }
  }, String(u.v).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: "0.22em",
      color: "var(--text-caption)",
      marginTop: 8
    }
  }, u.l))))));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/invitation/DateBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DateBlock — the "MONTH | DD | YYYY" row with the big center numeral,
 * flanked by vertical gold rules. Mirrors the invitation's date treatment.
 */
function DateBlock({
  weekday = "THURSDAY",
  month = "SEPTEMBER",
  day = "18",
  year = "2026",
  style,
  ...rest
}) {
  const rule = {
    width: 1,
    height: 52,
    background: "var(--accent)",
    opacity: 0.6
  };
  const side = {
    fontFamily: "var(--font-body)",
    fontSize: 24,
    letterSpacing: "var(--ls-wide)",
    color: "var(--text-body)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: "center",
      ...style
    }
  }, rest), weekday ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-muted)",
      marginBottom: 10
    }
  }, weekday) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: side
  }, month), /*#__PURE__*/React.createElement("span", {
    style: rule
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-numeral)",
      color: "var(--text-heading)",
      lineHeight: 1
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: rule
  }), /*#__PURE__*/React.createElement("span", {
    style: side
  }, year)));
}
Object.assign(__ds_scope, { DateBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/DateBlock.jsx", error: String((e && e.message) || e) }); }

// components/invitation/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a thin gold rule with an optional centered ornament.
 * Matches the ruled divider under the couple's names.
 */
function Divider({
  ornament = "❧",
  width = 220,
  style,
  ...rest
}) {
  const line = {
    flex: 1,
    height: 1,
    background: "var(--accent)",
    opacity: 0.55
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.7em",
      width,
      maxWidth: "100%",
      color: "var(--accent)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: line
  }), ornament ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.9em",
      lineHeight: 1,
      opacity: 0.85
    }
  }, ornament) : null, /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/Divider.jsx", error: String((e && e.message) || e) }); }

// components/invitation/FrameCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FrameCard — the ivory paper card with the signature double-line frame.
 * Wrap invitation content in this to get the wedding-stationery look.
 */
function FrameCard({
  children,
  ratio = "5 / 7",
  maxWidth = 620,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: "100%",
      maxWidth,
      aspectRatio: ratio,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "var(--frame-inset)",
      border: "1px solid var(--border-frame)",
      borderRadius: "var(--radius-sm)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "calc(var(--frame-inset) + var(--frame-gap))",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%"
    }
  }, children));
}
Object.assign(__ds_scope, { FrameCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/FrameCard.jsx", error: String((e && e.message) || e) }); }

// components/invitation/MapLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MapLink — a small-caps location line that links out to the venue on Google Maps.
 * Styled as an understated gold link, matching the stationery voice.
 */
function MapLink({
  venue = "CASAMARIA",
  city = "",
  href = "#",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      color: "var(--text-heading)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 22,
      letterSpacing: "var(--ls-wide)",
      color: "var(--text-heading)"
    }
  }, venue), city ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-muted)",
      marginTop: 6
    }
  }, city) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: "0.24em",
      color: "var(--text-caption)",
      marginTop: 10,
      borderBottom: "1px solid var(--border-hairline)",
      paddingBottom: 3,
      display: "inline-block"
    }
  }, "VIEW ON MAP"));
}
Object.assign(__ds_scope, { MapLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/MapLink.jsx", error: String((e && e.message) || e) }); }

// components/invitation/Monogram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Monogram — the couple's initials separated by a vertical rule.
 * Mirrors the "A | R" mark at the top of the invitation.
 */
function Monogram({
  left = "S",
  right = "M",
  size = 44,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.42em",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: size,
      letterSpacing: "0.08em",
      color: "var(--text-heading)",
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, left), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: "1.15em",
      background: "var(--accent)",
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("span", null, right));
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/Monogram.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/Envelope.jsx
try { (() => {
/* global React */
// Envelope intro — tap to reveal the invitation.
function Envelope({
  open,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    "aria-label": "Open invitation",
    style: {
      position: "relative",
      width: 340,
      height: 240,
      border: "none",
      cursor: "pointer",
      background: "var(--paper-1)",
      borderRadius: 8,
      boxShadow: "var(--shadow-card)",
      transition: "transform .5s var(--ease-soft), opacity .5s var(--ease-soft)",
      transform: open ? "translateY(18px) scale(.96)" : "none",
      opacity: open ? 0 : 1,
      pointerEvents: open ? "none" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 16,
      border: "1px solid var(--border-hairline)",
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 0,
      borderLeft: "170px solid transparent",
      borderRight: "170px solid transparent",
      borderTop: "132px solid var(--paper-2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "46%",
      transform: "translate(-50%,-50%)",
      width: 66,
      height: 66,
      borderRadius: "50%",
      background: "var(--gold-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px -4px rgba(69,63,53,.6)",
      color: "var(--paper-0)",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: ".06em"
    }
  }, "S\xA0|\xA0M"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 20,
      left: 0,
      right: 0,
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: ".26em",
      color: "var(--text-muted)"
    }
  }, "TAP TO OPEN"));
}
Object.assign(window, {
  Envelope
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/Envelope.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/Invitation.jsx
try { (() => {
/* global React */
// The framed invitation card — composes the design-system primitives.
const DS = window.SeifMalakWeddingDesignSystem_5fa9df;
const {
  Monogram,
  Divider,
  DateBlock,
  Countdown,
  MapLink,
  Botanical,
  FrameCard
} = DS;
const MAP_URL = "https://maps.app.goo.gl/VnjDr62nBN9V5aYX8";
function Lead({
  children,
  size = 16
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: size,
      letterSpacing: "0.24em",
      color: "var(--text-muted)",
      lineHeight: 1.9
    }
  }, children);
}
function InvitationCard({
  compact = false
}) {
  const s = compact ? 0.82 : 1;
  return /*#__PURE__*/React.createElement(FrameCard, {
    ratio: "5 / 7",
    maxWidth: compact ? 460 : 560,
    style: {
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Botanical, {
    variant: "sprig",
    src: "../../assets/botanical.png",
    style: {
      position: "absolute",
      left: 14,
      bottom: 24,
      height: "58%",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: `${52 * s}px 40px ${44 * s}px`,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22 * s
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    left: "S",
    right: "M",
    size: 40 * s
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lead, null, "TOGETHER WITH OUR FAMILIES"), /*#__PURE__*/React.createElement(Lead, null, "WE INVITE YOU TO OUR WEDDING"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 76 * s,
      letterSpacing: "0.14em",
      color: "var(--text-heading)",
      lineHeight: 1
    }
  }, "SEIF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 52 * s,
      color: "var(--text-heading)",
      lineHeight: 0.7,
      margin: `${2 * s}px 0`
    }
  }, "&"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 76 * s,
      letterSpacing: "0.14em",
      color: "var(--text-heading)",
      lineHeight: 1
    }
  }, "MALAK"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22 * s
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    width: 210 * s
  }))), /*#__PURE__*/React.createElement(DateBlock, {
    weekday: "FRIDAY",
    month: "SEPTEMBER",
    day: "18",
    year: "2026"
  }), /*#__PURE__*/React.createElement(Lead, null, "AT SEVEN O\u2019CLOCK IN THE EVENING"), /*#__PURE__*/React.createElement(MapLink, {
    venue: "CASAMARIA",
    href: MAP_URL
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12 * s
    }
  }, /*#__PURE__*/React.createElement(Botanical, {
    variant: "ornament",
    src: "../../assets/sprig.png",
    height: 40 * s
  }), /*#__PURE__*/React.createElement(Lead, {
    size: 13
  }, "RECEPTION TO FOLLOW"))));
}
Object.assign(window, {
  InvitationCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/Invitation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/ShareBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Actions that make the invitation shareable on WhatsApp & phones.
const MAP_URL_SB = "https://maps.app.goo.gl/VnjDr62nBN9V5aYX8";
function IconBtn({
  href,
  onClick,
  children,
  primary
}) {
  const [h, setH] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    letterSpacing: ".16em",
    cursor: "pointer",
    padding: "13px 24px",
    borderRadius: 2,
    transition: "all .2s var(--ease-soft)",
    border: "1px solid"
  };
  const style = primary ? {
    ...base,
    background: h ? "var(--gold-3)" : "var(--gold-2)",
    color: "var(--paper-0)",
    borderColor: "transparent"
  } : {
    ...base,
    background: h ? "var(--paper-1)" : "transparent",
    color: "var(--text-heading)",
    borderColor: "var(--border-frame)"
  };
  const props = {
    style,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  };
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), children) : /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick
  }, props), children);
}
function ShareBar() {
  const text = encodeURIComponent("\uD83E\uDD0D Seif & Malak are getting married!\nFriday, 18 September 2026 \u00B7 Casamaria\n\nWith love, please join us. Location: " + MAP_URL_SB);
  const wa = "https://wa.me/?text=" + text;
  const cal = "https://calendar.google.com/calendar/render?action=TEMPLATE" + "&text=" + encodeURIComponent("Seif & Malak's Wedding") + "&dates=20260918T160000Z/20260918T230000Z" + "&location=" + encodeURIComponent("Casamaria") + "&details=" + encodeURIComponent("We invite you to celebrate our wedding. " + MAP_URL_SB);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    href: wa,
    primary: true
  }, "SHARE ON WHATSAPP"), /*#__PURE__*/React.createElement(IconBtn, {
    href: MAP_URL_SB
  }, "VIEW ON MAP"), /*#__PURE__*/React.createElement(IconBtn, {
    href: cal
  }, "ADD TO CALENDAR"));
}
Object.assign(window, {
  ShareBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/ShareBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Botanical = __ds_scope.Botanical;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.DateBlock = __ds_scope.DateBlock;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FrameCard = __ds_scope.FrameCard;

__ds_ns.MapLink = __ds_scope.MapLink;

__ds_ns.Monogram = __ds_scope.Monogram;

})();
