import { ReactComponent as Wash } from "images/car-wash.svg";
import { ReactComponent as GasStation } from "images/gas-station.svg";
import { ReactComponent as Park } from "images/car-parking.svg";
import { ReactComponent as Blob1 } from "images/blobs/Blob-1.svg";
import { ReactComponent as Blob2 } from "images/blobs/Blob-2.svg";
import { ReactComponent as Blob3 } from "images/blobs/Blob-3.svg";
const data = [
  {
    id: 1,
    title: "شست و شوی ماشین",
    description:
      "این یک متن ساختگی با هدف سادگی و نامفهوم بودن  برای استفاده ی طراحان گرافیک است. از صنعت چاپ متون روزنامه و مجله در ستون و سطر",
    img: <Wash />,
    alt: "ماشین تمیز",
    background: <Blob1 />,
    colors: {
      background: "#D9FFEA",
      button: "#D9FFEA",
      text: "#40BA78",
    },
  },
  {
    id: 2,
    title: "سوخت گیری سیار",
    description:
      "این یک متن ساختگی با هدف سادگی و نامفهوم بودن  برای استفاده ی طراحان گرافیک است. از صنعت چاپ متون روزنامه و مجله در ستون و سطر",
    img: <GasStation />,
    alt: "پمپ بنزین",
    background: <Blob2 />,
    colors: {
      background: "#FFEAED",
      button: "#FF8596",
      text: "#FFFFFF",
    },
  },
  {
    id: 3,
    title: "پارک ماشین",
    description:
      "این یک متن ساختگی با هدف سادگی و نامفهوم بودن  برای استفاده ی طراحان گرافیک است. از صنعت چاپ متون روزنامه و مجله در ستون و سطر",
    img: <Park />,
    alt: "پارکینگ",
    background: <Blob3 />,
    colors: {
      background: "#DEEDFF",
      button: "#DEEDFF",
      text: "#257CE4",
    },
  },
];
export default data;
