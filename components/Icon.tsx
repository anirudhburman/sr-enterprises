type IconName =
  | "home"
  | "about"
  | "services"
  | "gallery"
  | "contact"
  | "spark"
  | "rocket"
  | "shield"
  | "industry"
  | "clock"
  | "phone"
  | "mail"
  | "map"
  | "acrylic"
  | "cnc"
  | "uvprint"
  | "signage"
  | "trophy"
  | "gift"
  | "menu"
  | "close";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "icon-sm" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  };

  switch (name) {
    case "home":
      return <svg {...common}><path d="M3 11.5L12 4L21 11.5V20H14V14H10V20H3V11.5Z" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "about":
      return <svg {...common}><circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" /><path d="M5 20C5.7 16.7 8.4 15 12 15C15.6 15 18.3 16.7 19 20" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "services":
      return <svg {...common}><path d="M4 8H20M4 16H20M8 4V20M16 4V20" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "gallery":
      return <svg {...common}><rect x="3.5" y="4.5" width="17" height="15" rx="2.4" stroke="currentColor" strokeWidth="1.8" /><path d="M7 15L10.2 11.8L13 14.6L16.4 11.2L19 13.8" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "contact":
      return <svg {...common}><path d="M4.5 7.5H19.5V18.5H4.5V7.5Z" stroke="currentColor" strokeWidth="1.8" /><path d="M5.5 8.5L12 13.3L18.5 8.5" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "spark":
      return <svg {...common}><path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "rocket":
      return <svg {...common}><path d="M14.5 4.5C12 4.8 9.2 7.1 8 9.7L6.2 13.5L10.5 12L14.3 10.2C16.9 9 19.2 6.2 19.5 3.7C17 4 15.8 4.2 14.5 4.5Z" stroke="currentColor" strokeWidth="1.8" /><path d="M8.3 13.7L6.2 15.8M7 18L9.5 17" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3.5L19 6V11.5C19 16 15.8 19.2 12 20.5C8.2 19.2 5 16 5 11.5V6L12 3.5Z" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "industry":
      return <svg {...common}><path d="M3.5 20V11L9 14V11L14.5 14V6L20.5 9V20H3.5Z" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7.5V12.5L15.5 14.5" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "phone":
      return <svg {...common}><path d="M7.2 4.5L10 7.3L8.6 9.9C9.5 11.6 10.9 13 12.6 13.9L15.2 12.5L18 15.3L16.4 18.4C15.8 19.6 14.5 20.2 13.2 19.9C7.5 18.5 3 14 1.6 8.3C1.3 7 1.9 5.7 3.1 5.1L6.2 3.5L7.2 4.5Z" stroke="currentColor" strokeWidth="1.6" /></svg>;
    case "mail":
      return <svg {...common}><rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.8" /><path d="M4.7 7L12 12.2L19.3 7" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "map":
      return <svg {...common}><path d="M12 20C15.7 16.2 18 13.4 18 10.5C18 7 15.3 4.5 12 4.5C8.7 4.5 6 7 6 10.5C6 13.4 8.3 16.2 12 20Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10.5" r="2.1" stroke="currentColor" strokeWidth="1.8" /></svg>;
    case "acrylic":
      return <svg {...common}><path d="M12 4L20 8.5V10L12 14.5L4 10V8.5L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M4 13.5L12 18L20 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>;
    case "cnc":
      return <svg {...common}><circle cx="10" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.8" /><path d="M13.5 13.5L19.5 19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M10 7.5V10H12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "uvprint":
      return <svg {...common}><rect x="4" y="8.5" width="16" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><path d="M7 8.5V5H17V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8 13.5H16M8 16.5H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="17.5" cy="11.5" r="0.9" fill="currentColor" /></svg>;
    case "signage":
      return <svg {...common}><rect x="3" y="3.5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><path d="M12 15.5V20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M7 8H17M7 11H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
    case "trophy":
      return <svg {...common}><path d="M8 3H16V11C16 14.2 14.2 17 12 17C9.8 17 8 14.2 8 11V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8 5.5H5.5C5.5 5.5 5.5 10.5 8 10.5M16 5.5H18.5C18.5 5.5 18.5 10.5 16 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M12 17V20M9 21H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
    case "gift":
      return <svg {...common}><rect x="3" y="9" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><path d="M3 9H21V13H3V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12 9V21" stroke="currentColor" strokeWidth="1.8" /><path d="M12 9C12 9 9.5 9 9.5 6.5C9.5 5 10.5 4.2 12 5.5C13.5 4.2 14.5 5 14.5 6.5C14.5 9 12 9 12 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
    case "close":
      return <svg {...common}><path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
    default:
      return <svg {...common}><path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.8" /></svg>;
  }
}
