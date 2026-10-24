/**
 * Site copy and media.
 *
 * PHOTOGRAPHY: images below are licensed Unsplash photographs used
 * as representative art direction only. They do not show Best Barber
 * Shop, Daniel, or work performed at the shop. Replace them with real
 * shop photography (and customer photos only with permission).
 */

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export function img(id: string, width: number) {
  return `${unsplash(id)}?w=${width}&q=75&auto=format&fit=crop`;
}

export function srcSet(id: string, widths: number[]) {
  return widths.map((w) => `${img(id, w)} ${w}w`).join(', ');
}

export const photos = {
  hero: '1585747860715-2ba37e788b70',
  chair: '1512690459411-b9245aed614b',
  classic: '1590540179852-2110a54f813a',
  fade: '1578390432942-d323db577792',
  beard: '1532710093739-9470acff878f',
  kids: '1521490683712-35a1cb235d1c',
  toolsCounter: '1621605815971-fbc98d665033',
};

export type Service = {
  id: string;
  name: string;
  short: string;
  menu: string;
  photo: string;
  alt: string;
  /** Leave null until the owner confirms current pricing. */
  price: string | null;
};

export const services: Service[] = [
  {
    id: 'classic',
    name: 'Classic Haircuts',
    short: 'Clean, timeless cuts tailored to your style.',
    menu: 'A traditional, carefully finished haircut.',
    photo: photos.classic,
    alt: 'Barber combing through a client’s hair before a classic cut',
    price: null,
  },
  {
    id: 'fade',
    name: 'Fades & Tapers',
    short: 'Sharp transitions, clean edges, and careful attention to detail.',
    menu: 'Detailed cutting and blending for a clean finish.',
    photo: photos.fade,
    alt: 'Profile of a man with a clean, tapered fade haircut',
    price: null,
  },
  {
    id: 'beard',
    name: 'Beard Trims',
    short: 'Neat, polished grooming that complements your haircut.',
    menu: 'Professional beard shaping and cleanup.',
    photo: photos.beard,
    alt: 'Barber applying lather to a client’s beard with a shaving brush',
    price: null,
  },
  {
    id: 'kids',
    name: 'Kids’ Haircuts',
    short: 'Patient, friendly service for the next generation.',
    menu: 'Friendly, attentive haircuts for younger customers.',
    photo: photos.kids,
    alt: 'Young boy sitting calmly for a traditional barbershop haircut',
    price: null,
  },
];

/** Excerpts from public Google reviews — wording preserved. */
export const reviews = [
  {
    name: 'Patrick Berger',
    text: 'Daniel is a phenomenal barber with knowing exactly what your hair should look like based off the shape of your head.',
  },
  {
    name: 'Josh West',
    text: 'Daniel is the best barber that I have had. I couldn’t recommend this place more. Very fair pricing as well. 10/10',
  },
  {
    name: 'Luke Dary',
    text: 'When you just need a haircut from someone who remembers how you like it, this is the place.',
  },
  {
    name: 'James David',
    text: 'He takes his time to make sure you receive the best cut possible.',
  },
  {
    name: 'Chris Moore',
    text: 'I drive an hour just for a haircut with Daniel.',
  },
  {
    name: 'Stan Narewski',
    text: 'After one visit he knew my name and how I wanted my hair cut.',
  },
  {
    name: 'Adam Stanley',
    text: 'Good price, great cut, fun conversation! Great local place, would recommend.',
  },
  {
    name: 'Bobby Salmon',
    text: 'Regardless of how many are waiting he never rushes.',
  },
];

export type GalleryItem = { id: string; alt: string; tall?: boolean };

export const gallery: GalleryItem[] = [
  { id: '1622286342621-4bd786c2447c', alt: 'Barber detailing the top of a textured fade', tall: true },
  { id: '1587909209111-5097ee578ec3', alt: 'Straight razor, comb and pomade tins on a wooden shelf', tall: true },
  { id: '1512690459411-b9245aed614b', alt: 'Vintage tufted leather barber chair under warm light' },
  { id: '1596728325488-58c87691e9af', alt: 'Barber shaping a beard line with a straight razor' },
  { id: '1599351431613-18ef1fdd27e1', alt: 'Rows of clippers and guards laid out on a walnut counter', tall: true },
  { id: '1493256338651-d82f7acb2b38', alt: 'Clipper work along the neckline of a classic cut' },
  { id: '1647140655214-e4a2d914971f', alt: 'Barber lifting hair with a comb while cutting with scissors', tall: true },
  { id: '1503951914875-452162b0f3f1', alt: 'Hot towel shave in a dimly lit barbershop' },
  { id: '1621607512214-68297480165e', alt: 'Scissors, comb and dryer on a dark wooden surface' },
];

export const faqs = [
  {
    q: 'Do I need an appointment?',
    a: 'No appointment needed — it’s a traditional walk-in shop. Just stop by during business hours and take a seat.',
  },
  {
    q: 'How much does a haircut cost?',
    a: 'The shop is known for fair, honest pricing. Give us a call for current service prices.',
  },
  {
    q: 'Do you offer fades?',
    a: 'Yes. Customers specifically praise Daniel’s fades — clean blends and sharp edges.',
  },
  {
    q: 'Can I bring my kids?',
    a: 'Absolutely. Customers regularly bring their children and grandchildren in for haircuts.',
  },
  {
    q: 'Do you offer beard trims?',
    a: 'Customers have received beard trims from Daniel. Call ahead to confirm current availability.',
  },
  {
    q: 'How long will I have to wait?',
    a: 'It depends on how many people are ahead of you. It’s a single-chair shop, so call ahead if you’d like to check.',
  },
  {
    q: 'Where is the shop located?',
    a: 'Best Barber Shop is in North Durham, North Carolina. See the Visit section for the address and directions.',
  },
];
