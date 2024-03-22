import { useNavigate } from "react-router-dom";
import { GHFlag, NGFlag, USFlag } from "../components/icons/Icons";

export const depositData = [
  {
    id: 1,
    date: "1/12/24",
    details: [
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
    ],
  },
  {
    id: 2,
    date: "1/12/24",
    details: [
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
    ],
  },
];

export const withdrawalData = [
  {
    id: 1,
    date: "1/12/24",
    details: [
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
    ],
  },
  {
    id: 2,
    date: "1/12/24",
    details: [
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
    ],
  },
];

export const historyData = [
  {
    id: 1,
    date: "1/12/24",
    details: [
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
    ],
  },
  {
    id: 2,
    date: "1/12/24",
    details: [
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Withdrawal",
        time: "2:03 PM",
        amount: "$2400",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
      },
    ],
  },
];

export const allTransactionData = [
  {
    id: 1,
    date: "1/12/24",
    details: [
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
        channel: "Deposit Via Paychant",
        status: "Success",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
        channel: "Deposit Via Paychant",
        status: "Pending",
      },
    ],
  },
  {
    id: 2,
    date: "1/12/24",
    details: [
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
        channel: "Deposit Via Paychant",
        status: "Failed",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
        channel: "Deposit Via Paychant",
        status: "Success",
      },
    ],
  },
  {
    id: 3,
    date: "1/12/24",
    details: [
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
        channel: "Deposit Via Paychant",
        status: "Success",
      },
      {
        label: "Local Transfer",
        time: "2:03 PM",
        amount: "$2400",
        channel: "Deposit Via Paychant",
        status: "Success",
      },
    ],
  },
];

export const notificationsData = [
  {
    text: "Scheduled maintenance | between  now and may 2020",
    subText: "Lorem Ipsum is a dummy text...",
    date: "18 Jan",
  },
  {
    text: "Scheduled maintenance | between  now and may 2020",
    subText: "Lorem Ipsum is a dummy text...",
    date: "18 Jan",
  },
  {
    text: "Scheduled maintenance | between  now and may 2020",
    subText: "Lorem Ipsum is a dummy text...",
    date: "18 Jan",
  },
  {
    text: "Scheduled maintenance | between  now and may 2020",
    subText: "Lorem Ipsum is a dummy text...",
    date: "18 Jan",
  },
];

export const SettingsData = () => {
  const navigate = useNavigate();
  return [
    {
      text: "Welcome to Greybox",
      subText: "Lorem Ipsum is a dummy text...",
      onClick: () => navigate(""),
    },
    {
      text: "Update Wallet Details",
      subText: "Lorem Ipsum is a dummy text...",
      onClick: () => navigate("/update-wallet-details"),
    },
    {
      text: "Change Pin",
      subText: "Lorem Ipsum is a dummy text...",
      onClick: () => navigate(""),
    },
    {
      text: "Export Private Key",
      subText: "Lorem Ipsum is a dummy text...",
      onClick: () => navigate(""),
    },
    {
      text: "About Greybox",
      subText: "Lorem Ipsum is a dummy text...",
      onClick: () => navigate("/about-greybox"),
    },
    {
      text: "Sign Out",
      subText: "Lorem Ipsum is a dummy text...",
      onClick: () => navigate("/"),
    },
  ];
};

export const banksData = [
  {
    name: "First Bank of Nigeria",
  },
  {
    name: "United Bank for Africa",
  },
  {
    name: "Zenith Bank PLC",
  },
  {
    name: "Kuda Bank",
  },
];

export const countryData = [
  {
    name: "Ghana",
    logo: GHFlag(),
  },
  {
    name: "Nigeria",
    logo: NGFlag(),
  },
  {
    name: "United States of America",
    logo: USFlag(),
  },
];

export const currencyData = [
  {
    name: "Ghanaian Cedi",
    logo: GHFlag(),
    code: "GHS",
  },
  {
    name: "Nigerian Naira",
    logo: NGFlag(),
    code: "NGN",
  },
  {
    name: "United States Dollar",
    logo: USFlag(),
    code: "USD",
  },
];
