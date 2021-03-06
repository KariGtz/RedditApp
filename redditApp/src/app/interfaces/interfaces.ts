
export interface ResponsePostSubreddit {
  kind: string;
  data: ResponsePosts;
}

export interface ResponsePosts {
  modhash: string;
  dist: number;
  children: Child[];
  after: string;
  before?: any;
}

export interface Child {
  kind?: string;
  data?: Post;
}

export interface Post {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class?: any;
  downs: number;
  thumbnail_height?: number;
  top_awarded_type?: any;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color?: string;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: Mediaembed;
  thumbnail_width?: number;
  author_flair_template_id?: string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media?: Securemedia;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  secure_media_embed: Securemediaembed;
  link_flair_text?: any;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class?: string;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint?: string;
  content_categories?: any;
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category?: any;
  banned_by?: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html?: string;
  likes?: any;
  suggested_sort?: any;
  banned_at_utc?: any;
  url_overridden_by_dest?: string;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview;
  all_awardings: (Allawarding | Allawardings2 | Allawardings3)[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: string;
  treatment_tags: any[];
  visited: boolean;
  removed_by?: any;
  num_reports?: any;
  distinguished?: any;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: any;
  author: string;
  discussion_type?: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color?: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media?: Securemedia;
  is_video: boolean;
  is_gallery?: boolean;
  media_metadata?: any;
  gallery_data?: Gallerydata;
  crosspost_parent_list?: Crosspostparentlist[];
  crosspost_parent?: string;
  author_cakeday?: boolean;
}

export interface Crosspostparentlist {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: Linkflairrichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls?: number;
  link_flair_css_class?: string;
  downs: number;
  thumbnail_height?: number;
  top_awarded_type?: any;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color?: any;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: Variants;
  thumbnail_width?: number;
  author_flair_template_id?: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media?: Securemedia2;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  secure_media_embed: Variants;
  link_flair_text?: string;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class?: any;
  author_flair_richtext: any[];
  gildings: Variants;
  post_hint?: string;
  content_categories?: any;
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls?: number;
  removed_by_category?: any;
  banned_by?: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html?: any;
  likes?: any;
  suggested_sort?: string;
  banned_at_utc?: any;
  url_overridden_by_dest?: string;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview2;
  all_awardings: (Allawarding | Allawardings2)[];
  awarders: any[];
  media_only: boolean;
  link_flair_template_id?: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: any;
  treatment_tags: any[];
  visited: boolean;
  removed_by?: any;
  num_reports?: any;
  distinguished?: any;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: any;
  author: string;
  discussion_type?: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status?: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color?: any;
  permalink: string;
  parent_whitelist_status?: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media?: Securemedia2;
  is_video: boolean;
}

export interface Preview2 {
  images: Image[];
  enabled: boolean;
}

export interface Securemedia2 {
  reddit_video: Redditvideo;
}

export interface Linkflairrichtext {
  e: string;
  t: string;
}

export interface Gallerydata {
  items: Item[];
}

export interface Item {
  media_id: string;
  id: number;
}

export interface Allawardings3 {
  giver_coin_reward: number;
  subreddit_id?: any;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: string;
  penny_donate: number;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  resized_icons: Source[];
  icon_width: number;
  static_icon_width: number;
  start_date?: any;
  is_enabled: boolean;
  description: string;
  end_date?: any;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: Source[];
  icon_format: string;
  icon_height: number;
  penny_price: number;
  award_type: string;
  static_icon_url: string;
}

export interface Allawardings2 {
  giver_coin_reward?: number;
  subreddit_id?: any;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: string;
  penny_donate?: number;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  resized_icons: Source[];
  icon_width: number;
  static_icon_width: number;
  start_date?: any;
  is_enabled: boolean;
  description: string;
  end_date?: any;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: Source[];
  icon_format?: string;
  icon_height: number;
  penny_price?: number;
  award_type: string;
  static_icon_url: string;
}

export interface Allawarding {
  giver_coin_reward?: any;
  subreddit_id?: any;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: string;
  penny_donate?: any;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  resized_icons: Source[];
  icon_width: number;
  static_icon_width: number;
  start_date?: any;
  is_enabled: boolean;
  description: string;
  end_date?: any;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: Source[];
  icon_format?: any;
  icon_height: number;
  penny_price?: any;
  award_type: string;
  static_icon_url: string;
}

export interface Preview {
  images?: Image[];
  enabled?: boolean;
}

export interface Image {
  source: Source;
  resolutions: Source[];
  variants: Variants;
  id: string;
}

export interface Variants {
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Gildings {
  gid_2?: number;
  gid_1?: number;
}

export interface Securemediaembed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  media_domain_url?: string;
  height?: number;
}

export interface Securemedia {
  reddit_video?: Redditvideo;
  type?: string;
  oembed?: Oembed;
}

export interface Oembed {
  provider_url: string;
  version: string;
  title: string;
  type: string;
  thumbnail_width: number;
  height: number;
  width: number;
  html: string;
  author_name: string;
  provider_name: string;
  thumbnail_url: string;
  thumbnail_height: number;
  author_url: string;
}

export interface Redditvideo {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface Mediaembed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  height?: number;
}
