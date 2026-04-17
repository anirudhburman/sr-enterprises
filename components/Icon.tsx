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
  | "map";

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
    default:
      return <svg {...common}><path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.8" /></svg>;
  }
}
