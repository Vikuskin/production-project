export interface ISidebarItem {
  onClick?: () => void;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}
