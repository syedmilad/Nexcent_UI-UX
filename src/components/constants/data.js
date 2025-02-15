import images from "./images";

const navLinks = [
  { label: "Home", name: "home" },
  { label: "Service", name: "Service" },
  { label: "Feature", name: "Feature" },
  { label: "Product", name: "Product" },
  { label: "Testimonial", name: "Testimonial" },
  { label: "FAQ", name: "FAQ" },
];

const memberShip = [
  {
    imageUrl: images.person1,
    title: "Membership Organisations",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    imageUrl: images.person2,
    title: "National Associations",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    imageUrl: images.person3,
    title: "Clubs And Groups",
    subTitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const memberDetails = [
  {
    imageUrl: images.member,
    number: "2,245,341",
    subTitle: "Members",
  },
  {
    imageUrl: images.event,
    number: "828,867",
    subTitle: "Event Bookings ",
  },
  {
    imageUrl: images.clubs,
    number: "46,328",
    subTitle: "Clubs",
  },
  {
    imageUrl: images.payments,
    number: "1,926,436",
    subTitle: "Payments",
  },
];

const readmoreClient = [
  {
    imageUrl: images.read1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    btntitle: "Readmore",
  },
  {
    imageUrl: images.read2,
    title:
      "What are your safeguarding responsibilities?",
    btntitle: "Readmore",
  },
  {
    imageUrl: images.read3,
    title: "Revamping the Membership Model with Triathlon Australia",
    btntitle: "Readmore",
  },
];

export default { navLinks, memberShip, memberDetails,readmoreClient };
