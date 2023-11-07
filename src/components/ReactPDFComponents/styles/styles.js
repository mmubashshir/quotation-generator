const colorDark = "#222";
const colorDark2 = "#666";
const colorGray = "#e3e3e3";
const colorWhite = "#fff";
const colorBlack = "#000";

const styles = {
  dark: {
    color: colorDark,
  },

  white: {
    color: colorWhite,
  },

  "bg-black": {
    backgroundColor: colorBlack,
  },

  "bg-dark": {
    backgroundColor: colorDark2,
  },

  "bg-gray": {
    backgroundColor: colorGray,
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },

  "flex-col": {
    flexDirection: "column",
  },

  "items-center": {
    alignItems: "center",
  },

  "w-auto": {
    flex: 1,
    paddingRight: "8px",
  },

  "ml-30": {
    flex: 1,
  },

  "w-100": {
    width: "100%",
  },

  "w-90": {
    width: "90%",
  },

  "w-50": {
    width: "50%",
  },

  "w-55": {
    width: "55%",
  },

  "w-45": {
    width: "45%",
  },

  "w-60": {
    width: "60%",
  },

  "w-40": {
    width: "40%",
  },

  "w-48": {
    width: "48%",
  },

  "w-17": {
    width: "17%",
  },

  "w-18": {
    width: "18%",
  },

  "w-10": {
    width: "10%",
  },

  "h-1": {
    height: "1px",
  },

  "h-20": {
    height: "25px",
  },

  row: {
    borderBottom: `1px solid ${colorGray}`,
  },

  "mt-40": {
    marginTop: "40px",
  },

  "mt-30": {
    marginTop: "30px",
  },

  "mt-20": {
    marginTop: "20px",
  },

  "mt-10": {
    marginTop: "10px",
  },

  "mb-5": {
    marginBottom: "5px",
  },

  "p-4-8": {
    padding: "4px 8px",
  },

  "p-5": {
    padding: "5px",
  },

  "pb-10": {
    paddingBottom: "10px",
  },

  "pl-8": {
    paddingRight: 8,
  },

  "px-35": {
    padding: "0 35px",
  },

  "py-10": {
    padding: "8px 0",
  },

  "padding-none": {
    paddingBottom: 0,
    paddingTop: 0,
  },

  right: {
    textAlign: "right",
  },

  bold: {
    fontWeight: "bold",
  },

  medium: {
    fontWeight: "600",
  },

  "text-xs": {
    fontSize: "12px",
  },

  "text-sm": {
    fontSize: "14px",
  } /* 20px */,

  "text-base": {
    fontSize: "16px",
  },

  "text-lg": {
    fontSize: "18px",
  },

  "text-xl": {
    fontSize: "20px",
  },

  "text-2xl": {
    fontSize: "24px",
  },

  "text-3xl": {
    fontSize: "30px",
  },

  "text-4xl": {
    fontSize: "36px",
  },

  "text-5xl": {
    fontSize: "48px",
  },

  "text-6xl": {
    fontSize: "60px",
  },

  "text-7xl": {
    fontSize: "72px",
  },
  "text-8xl": {
    fontSize: "96px",
  },

  "text-9xl": {
    fontSize: "128px",
  },

  "tracking-tighter": { letterSpacing: -8 },
  "tracking-tight": { letterSpacing: -4 },
  "tracking-normal": { letterSpacing: 0 },
  "tracking-wide": { letterSpacing: 4 },
  "tracking-wider": { letterSpacing: 8 },
  "tracking-widest": { letterSpacing: 12 },

  page: {
    fontFamily: "Inter",
    fontSize: "13px",
    color: colorBlack,
    paddingTop: "40px",
    // padding: "40px 35px",
  },

  span: {
    padding: "4px 12px 4px 0",
  },

  logo: {
    display: "block",
  },
};

export default styles;
