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

export default { navLinks,memberShip };
