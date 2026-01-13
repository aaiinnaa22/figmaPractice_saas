type ImagePosition = "top" | "bottom" | "none"
type BackgroundVariant = "dark" | "light"
export type PricePlanItem = {
	title: string;
	price: string;
	description: string;
	bulletPoints: string[];
	buttonText: string;
}

export type ClientQuoteItem = {
	quote: string;
	profile: string;
	name: string;
	role: string;
	location: string;
}

type HorizontalScrollItems =
  | { type: 'pricePlan'; items: PricePlanItem[] }
  | { type: 'clientQuotes'; items: ClientQuoteItem[] };

export type ContentSectionData = {
  title: string;
  description?: string;
  buttonText?: string;
  imgSrc?: string;
  imgPosition?: ImagePosition;
  horizontalScrollItems?: HorizontalScrollItems;
  backgroundVariant?: BackgroundVariant;
};