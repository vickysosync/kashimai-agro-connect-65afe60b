const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const make = (paths) =>
  function Icon({ className = "h-5 w-5" }) {
    return (
      <svg {...base} className={className}>
        {paths}
      </svg>
    );
  };

export const LeafIcon = make(<><path d="M11 20A7 7 0 0 1 4 13c0-6 7-10 16-10 0 9-4 16-10 16" /><path d="M4 21c4-6 8-9 12-11" /></>);
export const SproutIcon = make(<><path d="M12 21v-9" /><path d="M12 12c0-4-3-7-8-7 0 4 3 7 8 7Z" /><path d="M12 10c0-3 3-6 8-6 0 4-3 6-8 6Z" /></>);
export const TreeIcon = make(<><path d="M12 22v-6" /><path d="M12 2a6 6 0 0 0-6 6c0 1 .2 1.8.6 2.6A5 5 0 0 0 8 20h8a5 5 0 0 0 1.4-9.4c.4-.8.6-1.6.6-2.6a6 6 0 0 0-6-6Z" /></>);
export const UsersIcon = make(<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7" /><path d="M18 14a6 6 0 0 1 3.5 6" /></>);
export const DropIcon = make(<path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z" />);
export const ChartIcon = make(<><path d="M3 21h18" /><path d="M6 17v-5" /><path d="M11 17V8" /><path d="M16 17v-7" /><path d="M21 4l-5 4-5-3-6 5" /></>);
export const ClipboardIcon = make(<><rect x="6" y="4" width="12" height="17" rx="1.5" /><path d="M9 4V3h6v1" /><path d="M9 10h6M9 14h6M9 18h3" /></>);
export const BoxIcon = make(<><path d="M3 7l9-4 9 4-9 4-9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></>);
export const MapPinIcon = make(<><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></>);
export const PhoneIcon = make(<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />);
export const MailIcon = make(<><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3 7 9 6 9-6" /></>);
export const CopyIcon = make(<><rect x="9" y="9" width="12" height="12" rx="1.5" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></>);
export const CheckIcon = make(<path d="m5 12 5 5L20 7" />);
export const MenuIcon = make(<path d="M4 6h16M4 12h16M4 18h16" />);
export const CloseIcon = make(<path d="M6 6l12 12M18 6 6 18" />);
export const ArrowRightIcon = make(<path d="M5 12h14m-6-6 6 6-6 6" />);
export const ChevronLeftIcon = make(<path d="m15 6-6 6 6 6" />);
export const ChevronRightIcon = make(<path d="m9 6 6 6-6 6" />);
export const ChevronUpIcon = make(<path d="m6 15 6-6 6 6" />);
export const ChevronDownIcon = make(<path d="m6 9 6 6 6-6" />);
export const EyeIcon = make(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>);
export const EyeOffIcon = make(<><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.8M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7a9.6 9.6 0 0 0 5.4-1.6" /><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" /></>);
export const TrashIcon = make(<><path d="M4 7h16" /><path d="M10 11v6M14 11v6" /><path d="M6 7l1 13h10l1-13" /><path d="M9 7V4h6v3" /></>);
export const EditIcon = make(<><path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m14 6 4 4" /></>);
export const PlusIcon = make(<path d="M12 5v14M5 12h14" />);
export const HomeIcon = make(<><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /></>);
export const ImageIcon = make(<><rect x="3" y="4" width="18" height="16" rx="1.5" /><circle cx="9" cy="10" r="2" /><path d="m21 16-5-5-9 9" /></>);
export const InboxIcon = make(<><path d="M3 13h5l1.5 3h5L16 13h5" /><path d="M5 5h14l2 8v6H3v-6l2-8Z" /></>);
export const SettingsIcon = make(<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></>);
export const BuildingIcon = make(<><path d="M4 21V5l8-3 8 3v16" /><path d="M9 21v-4h6v4" /><path d="M8 8h2M14 8h2M8 12h2M14 12h2" /></>);
export const RouteIcon = make(<><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8" /></>);
export const LogoutIcon = make(<><path d="M9 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></>);
export const ResetIcon = make(<><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></>);
export const ExternalIcon = make(<><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>);

const serviceIconMap = {
  "Crop Production": SproutIcon,
  Horticulture: TreeIcon,
  Advisory: ClipboardIcon,
  "Farmer Support": UsersIcon,
  Sustainability: LeafIcon,
  Planning: ChartIcon,
  "Post-Harvest": BoxIcon,
  "Business Development": BuildingIcon,
};

export function ServiceIcon({ category, className }) {
  const Icon = serviceIconMap[category] || LeafIcon;
  return <Icon className={className} />;
}

export function LogoMark({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" className="fill-primary" />
      <path d="M10 33c5-2 9-2 14 0s9 2 14 0" fill="none" className="stroke-harvest" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 31V15" fill="none" className="stroke-primary-foreground" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 21c0-4-3-7-8-7 0 4 3 7 8 7Z" className="fill-leaf" />
      <path d="M24 18c0-3.5 3-6.5 8-6.5 0 4-3 6.5-8 6.5Z" className="fill-primary-foreground" />
    </svg>
  );
}
