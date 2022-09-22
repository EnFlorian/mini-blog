import { Tag } from "../../types/tag";
import { tags } from "./data";

export const fetchTags = (): Tag[] => {
  return tags;
};
