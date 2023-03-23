import ZXNineDesk from "/assets/home/desktop/image-speaker-zx9.png"
import ZXNineMobile from "/assets/home/mobile/image-speaker-zx9.png"
import ZXNineTab from "/assets/home/tablet/image-speaker-zx9.png"

import ZXSevenDesk from "/assets/home/desktop/image-speaker-zx7.jpg"
import ZXSevenMobile from "/assets/home/mobile/image-speaker-zx7.jpg"
import ZXSevenTab from "/assets/home/tablet/image-speaker-zx7.jpg"

import YXOneDesk from "/assets/home/desktop/image-earphones-yx1.jpg"
import YXOneMobile from "/assets/home/mobile/image-earphones-yx1.jpg"
import YXOneTab from "/assets/home/tablet/image-earphones-yx1.jpg"

import PresImageDesk from "/assets/shared/desktop/image-best-gear.jpg"
import PresImageMobile from "/assets/shared/mobile/image-best-gear.jpg"
import PresImageTab from "/assets/shared/tablet/image-best-gear.jpg"

import Headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png"
import Speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png"
import Earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png"

export const zx9 = [
  {
    name: "ZX9 SPEAKER",
    desc: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    image: {
      desktop: ZXNineDesk,
      mobile: ZXNineMobile,
      tablet: ZXNineTab
    },
  }
];

export const zx7 = [
  {
    name: "ZX7 SPEAKER",
    image: {
      desktop: ZXSevenDesk,
      tablet: ZXSevenTab,
      mobile: ZXSevenMobile,
    },
  }
];

export const yx1 = [
  {
    name: "YX1 EARPHONES",
    image: {
      desktop: YXOneDesk,
      mobile: YXOneMobile,
      tablet: YXOneTab
    },
  }
];

export const presentation = [
  {
    image: {
      desktop: PresImageDesk,
      mobile: PresImageMobile,
      tablet: PresImageTab
    }
  }
];


export const categoryImages = [
  {
    id: 1,
    image: Headphones,
    title: "Headphones", 
  },
  {
    id: 2,
    image: Speakers,
    title: "Speakers", 
  },
  {
    id: 3,
    image: Earphones,
    title: "Earphones", 
  },
]

