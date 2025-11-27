interface Product {
  productCode: string;
  title: string;
  description: string;
  images: ProductImage[];
  reviews: ProductReviews;
  duration: { fixedDurationInMinutes: number };
  confirmationType: 'INSTANT' | string;
  itineraryType: 'ACTIVITY' | string;
  pricing: Pricing;
  currency?: string;
  productUrl: string;
  destinations: Destination[];
  tags: number[];
  flags: string[];
  translationInfo: TranslationInfo;
}

interface ProductImage {
  imageSource: string;
  caption: string;
  isCover: boolean;
  variants: ImageVariant[];
}

interface ImageVariant {
  height: number;
  width: number;
  url: string;
}

interface ProductReviews {
  sources: ReviewSource[];
  totalReviews: number;
  combinedAverageRating: number;
}

interface ReviewSource {
  provider: string;
  totalCount: number;
  averageRating: number;
}

interface Pricing {
  summary: PriceSummary;
  currency: string;
}

interface PriceSummary {
  fromPrice: number;
  fromPriceBeforeDiscount: number;
}

interface Destination {
  ref: string;
  primary: boolean;
}

interface TranslationInfo {
  containsMachineTranslatedText: boolean;
  translationSource: string;
}
