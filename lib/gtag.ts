export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID ?? '';

type url =  string | undefined

export const pageview = (url: url) => {
  if (GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};