import { Dispatch, SetStateAction } from "react";

type SideButtonProps = {
    icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    name: string;
    customColor?: string;
    href?: string;
} & (
    | {
          index?: undefined;
          subMenuShown?: undefined;
          setSubMenuShown?: undefined;
          hasChildren?: undefined;
          childrenButtons?: undefined;
      }
    | {
          index: number;
          subMenuShown: [boolean, boolean, boolean];
          setSubMenuShown: Dispatch<
              SetStateAction<[boolean, boolean, boolean]>
          >;
          hasChildren: true;
          childrenButtons: Array<{
              icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
              name: string;
              href: string;
          }>;
      }
);

export default SideButtonProps;
