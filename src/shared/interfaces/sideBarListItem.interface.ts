export interface SideBarListItem {
  title: string;
  path: string;
  icon: any;
  component?: any;
  onClick?: (e: React.MouseEvent) => void;
  layout?: string;
  section?: string;
}
