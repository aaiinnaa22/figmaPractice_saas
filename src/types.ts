type ImagePosition = "top" | "bottom" | "none"
type BackgroundVariant = "dark" | "light"
export type PricePlanItem = {
	title: string;
	price: string;
	description: string;
	bulletPoints: string[];
	buttonText: string;
}

export type ContentSectionData = {
  title: string;
  description: string;
  buttonText?: string;
  imgSrc?: string;
  imgPosition?: ImagePosition;
  horizontalScrollItems?: PricePlanItem[];
  backgroundVariant?: BackgroundVariant;
};