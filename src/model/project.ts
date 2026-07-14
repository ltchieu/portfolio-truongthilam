export interface ProjectFeature {
  text: string;
  icon: string; // key of the icon in ICON_MAP
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  tools: string[];
  image?: string;
  images?: string[]; // multiple screenshots/pages of the project
  video?: string; // path to video asset (e.g. .mov or .mp4)
  subtitle?: string;
  summary?: string;
  features?: ProjectFeature[]; // list of core topics with icons
  message?: string;
  projectLink?: string; // Link to root project (e.g. Google Drive view/download)
  color?: string; // used for secondary projects grid if needed
}
