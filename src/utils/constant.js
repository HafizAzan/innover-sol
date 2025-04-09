import { Mail, Phone } from "lucide-react";
import { IMAGES } from "./img.constant";
import { SVG_ICONS } from "./svg.constant";

export const headerNavItems = [
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
];

export const cardItems = [
  {
    img: SVG_ICONS.checkIcon,
    title: "Preferred Over Competitors",
    paragraph:
      "Our new clients most often come from ADP Totalsource, Trinet, Paychex, Vensure, Justworks and Insperity.",
  },
  {
    img: SVG_ICONS.starIcon,
    title: "Top-Notch Service",
    paragraph:
      "The #1 response we get on our client reviews is that our service level is superior to their previous PEO",
  },
  {
    img: SVG_ICONS.handIcon,
    title: "$6.5 Billion of Payroll Processed",
    paragraph: "Over $6.5 Billion of payroll processed and rapidly growing.",
  },
  {
    img: SVG_ICONS.graphIcon,
    title: "$72K/annually in benefits savings",
    paragraph:
      "Amplify has saved our clients an average of $72K per year in benefits savings alone.",
  },
];

export const calculatorItems = [
  { title: "$6.5B", span: "+", paragraph: "Payroll Processed" },
  { title: "$72", span: "K", paragraph: "Average Annual Savings" },
  { title: "#1", paragraph: "In Service Quality" },
  { title: "95", span: "%", paragraph: "Client Satisfaction" },
];

export const serviceDetailInfo = [
  { label: "Hours Saved Monthly", number: "120" },
  { label: "Annual Cost Savings", number: "$24,000" },
  { label: "Healthcare Savings", number: "15%" },
];

const p1 =
  "“We came to Amplify HR after using another PEO for multiple years. We were ultimately looking for ways to enhance our service, get better support, and partner with a trusted PEO. Connor Wenzel and his team came in and showed us that they could help reduce our administrative burdens while providing us with excellent service we expect from our partners.”";

const p2 =
  "“Amplify helped move us from apercentage payroll admin fee to a flatadmin fee saving us a lot of money. We’ve now been an Amplify client for over 4 years and enjoy working with our dedicated contacts Karen for payroll, Tracy & Mark for Benefits and Francis for HR. It is with great pleasure that I recommend the team at Amplify and suggest you look at what they have to offer.”";

export const testimonialItems = [
  {
    img: IMAGES.annaImg,
    name: "Anna Z.",
    destination: "Controller in Texas",
    paragraph: p1,
  },
  {
    img: IMAGES.annaImg,
    name: "Anna Z.",
    destination: "Controller in Texas",
    paragraph:
      "“We came to Amplify HR after using another PEO for multiple years. We were ultimately looking for ways to enhance our service, get better support, and partner with a trusted PEO.",
  },
  {
    img: IMAGES.annaImg,
    name: "Anna Z.",
    destination: "Controller in Texas",
    paragraph: p1,
  },
  {
    img: IMAGES.annaImg,
    name: "Marc W.",
    destination: "Controller in Texas",
    paragraph: p2,
  },
  {
    img: IMAGES.annaImg,
    name: "Marc W.",
    destination: "Controller in Texas",
    paragraph: p2,
  },
  {
    img: IMAGES.annaImg,
    name: "Marc W.",
    destination: "Controller in Texas",
    paragraph:
      "“Amplify helped move us from apercentage payroll admin fee to a flatadmin fee saving us a lot of money.”",
  },
];

let ans =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const questionsAccordion = [
  {
    question: "How is pricing determined?",
    answer: ans,
    value: "item-1",
  },
  {
    question: "What's included in the service?",
    answer: ans,
    value: "item-2",
  },
  {
    question: "How long does implementation take?",
    answer: ans,
    value: "item-3",
  },
  {
    question: "Can I customize the service package?",
    answer: ans,
    value: "item-4",
  },
  {
    question: "What kind of support do you offer?",
    answer: ans,
    value: "item-5",
  },
];

export const subfooterItems = [
  { icon: SVG_ICONS.facebookIcon, href: "/facebook.com" },
  { icon: SVG_ICONS.instaIcon, href: "/instagram.com" },
  { icon: SVG_ICONS.XIcon, href: "/twiiter.com" },
  { icon: SVG_ICONS.linkedinIcon, href: "/linkedin.com" },
  { icon: SVG_ICONS.youtubeIcon, href: "/youtube.com" },
];

export const contactInfo = [
  {
    label: "224-424-5400",
    href: "tel+224-424-5400",
    icon: <Phone className="text-gray" />,
  },
  {
    label: "info@amplifyhrm.com",
    href: "mailto:info@amplifyhrm.com",
    icon: <Mail className="text-gray" />,
  },
];

export const peoAndPrdouct = [
  {
    title: "Core PEO Services",
    subItem: [
      { href: "/", label: "PEO Solutions" },
      { href: "/", label: "Co-Employment Benefits" },
      { href: "/", label: "HR Outsourcing" },
    ],
  },
  {
    title: "Product Features",
    subItem: [
      { href: "/", label: "PEO Solutions" },
      { href: "/", label: "Co-Employment Benefits" },
      { href: "/", label: "HR Outsourcing" },
      { href: "/", label: "HR Administration" },
      { href: "/", label: "Employee Onboarding" },
      { href: "/", label: "HR Compliance" },
      { href: "/", label: "Performance Management" },
      { href: "/", label: "Benefits Administration" },
      { href: "/", label: "Health Insurance" },
      { href: "/", label: "Retirement Plans" },
      { href: "/", label: "Workers' Compensation" },
      { href: "/", label: "HR Technology Platform" },
      { href: "/", label: "Payroll Processing" },
      { href: "/", label: "Time & Attendance" },
      { href: "/", label: "Reporting & Analytics" },
    ],
  },
];

export const company = [
  {
    title: "Our Company",
    subItem: [
      { href: "/", label: "hy AmplifyHRM" },
      { href: "/", label: "Our Story" },
      { href: "/", label: "Careers" },
    ],
  },
  {
    title: "Our Approach",
    subItem: [
      { href: "/", label: "How it works" },
      { href: "/", label: "PEO Explained" },
      { href: "/", label: "Technology & Innovation" },
    ],
  },
  {
    title: "Success Stories",
    subItem: [
      { href: "/", label: "Case Studies" },
      { href: "/", label: "Testimonials" },
      { href: "/", label: "Results & ROI" },
    ],
  },
  {
    title: "Contact Us",
    subItem: [
      { href: "/", label: "Book A Demo" },
      { href: "/", label: "Get A Quote" },
      { href: "/", label: "Customer Service" },
    ],
  },
];

export const companySize = [
  {
    title: "By Company Size",
    subItem: [
      { href: "/", label: "1-10 Employees" },
      { href: "/", label: "11-99 Employees" },
      { href: "/", label: "100+ Employees" },
      { href: "/", label: "Enterprise Solutions" },
    ],
  },
  {
    title: "By Industry",
    subItem: [
      { href: "/", label: "Technology" },
      { href: "/", label: "Healthcare" },
      { href: "/", label: "Professional Sevices" },
      { href: "/", label: "Manufacturing" },
      { href: "/", label: "Nonprofit" },
      { href: "/", label: "Retail" },
      { href: "/", label: "Startups" },
      { href: "/", label: "Financial Services" },
    ],
  },
  {
    title: "By Industry",
    subItem: [
      { href: "/", label: "Scaling & Growth" },
      { href: "/", label: "Compliance & Risk" },
      { href: "/", label: "Cost Reduction" },
      { href: "/", label: "Employee Experience" },
    ],
  },
];

export const contentLibrary = [
  {
    title: "Content Library",
    subItem: [
      { href: "/", label: "Blog Articles" },
      { href: "/", label: "PEO FAQs" },
      { href: "/", label: "CPEO vs PEO" },
      { href: "/", label: "HR Glossary" },
      { href: "/", label: "Resource Center" },
      { href: "/", label: "Downloads" },
    ],
  },
  {
    title: "Partners & Referrals",
    subItem: [
      { href: "/", label: "Refer Us" },
      { href: "/", label: "For Brokers" },
    ],
  },
  {
    title: "Pricing",
    subItem: [{ href: "/", label: "Pricing" }],
  },
];

export const footerItems = [
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Service", href: "/" },
  { label: "Cookies Settings", href: "/" },
];
