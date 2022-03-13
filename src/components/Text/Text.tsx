import { ReactElement } from "react";
import { IconType } from "react-icons";

type Props = {
  children: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  style?: "display" | "subdisplay" | "title" | "subtitle" | "text" | "caption";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "white"
    | "black"
    | "transparent";
};

export const Text = ({
  children,
  tag = "span",
  style = "text",
  color = "black",
}: Props) => {
  const Tag = tag;
  let className;

  switch (style) {
    case "display":
      className = "text-6xl font-light";
      break;
    case "subdisplay":
      className = "text-4xl font-light";
      break;
    case "title":
      className = "text-4xl font-bold";
      break;
    case "subtitle":
      className = "text-2xl font-bold";
      break;
    case "text":
      className = "text-base";
      break;
    case "caption":
      className = "text-sm font-normal";
      break;
  }

  switch (color) {
    case "primary":
      className += " text-primary";
      break;
    case "secondary":
      className += " text-secondary";
      break;
    case "success":
      className += " text-success";
      break;
    case "danger":
      className += " text-danger";
      break;
    case "warning":
      className += " text-warning";
      break;
    case "info":
      className += " text-info";
      break;
    case "light":
      className += " text-light";
      break;
    case "dark":
      className += " text-dark";
      break;
    case "black":
      className += " text-black";
      break;
    case "white":
      className += " text-white";
      break;
    case "transparent":
      className += " text-transparent";
      break;
  }

  return <Tag className={className}>{children}</Tag>;
};
