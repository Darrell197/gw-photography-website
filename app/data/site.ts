export const galleries = {
  weddings: [
    "4O1A5526.jpg","4O1A8487.jpg","IMG_1194.JPG","IMG_4565.JPG"
  ],
  events: [
    "IMG_2228.JPG","IMG_0321.JPG","IMG_4520.JPG","IMG_4521.JPG"
  ],
  studio: [
    "4O1A1726.jpg","4O1A2033.jpg","4O1A2380.jpg","4O1A0328.jpg"
  ],
  lifestyle: [
    "girlsout.JPG","girls tan.JPG","3girlsout.JPG","board.jpg","hug.jpg","point.jpg"
  ],
} as const;

export const galleryMeta = {
  weddings: { label: "Weddings", title: "The day, as it felt.", intro: "Elegant portraits, honest moments and the details that make a wedding unmistakably yours.", path: "/portfolio/weddings" },
  events: { label: "Events", title: "Energy, atmosphere, people.", intro: "Discreet event coverage with an editorial eye — from private celebrations to lively nights and live performance.", path: "/portfolio/events" },
  lifestyle: { label: "Lifestyle", title: "Life, beautifully observed.", intro: "Natural portraits and relaxed stories with a little fashion in the frame.", path: "/portfolio/lifestyle" },
  studio: { label: "Studio", title: "Clean. Modern. Considered.", intro: "Fashion, brand and portrait imagery shaped by light, composition and a strong visual point of view.", path: "/portfolio/studio" },
} as const;
