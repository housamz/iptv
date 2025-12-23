export interface Channel {
  id: string;
  name: string;
  country?: string;
  categories?: string[];
  alt_names?: string[];
  website?: string;
}

export interface Stream {
  channel: string | null;
  feed: string | null;
  title: string;
  url: string;
  referrer: string | null;
  user_agent: string | null;
  quality: string | null;
}

export interface AppButtonProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export interface ChannelCardProps {
  channel: Channel;
  setPlayingChannel: (channel: Channel) => void;
}

export interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  tab: string;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  countries: Array<{ code: string; name: string }>;
  categories: Array<{ id: string; name: string }>;
  setPage: (value: number) => void;
}
