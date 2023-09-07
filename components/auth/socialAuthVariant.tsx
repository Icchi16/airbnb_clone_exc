import { FaApple, FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export type SocialAuthVariant = {
  authType: "facebook" | "apple" | "google" | "email";
  icon: any;
  authText: "Facebook" | "Apple" | "Google" | "Email";
};

export const socialAuthVariant: SocialAuthVariant[] = [
  {
    authType: "facebook",
    icon: <FaFacebookSquare className="text-blue-600" />,
    authText: "Facebook",
  },
  {
    authType: "apple",
    icon: <FaApple />,
    authText: "Apple",
  },
  {
    authType: "google",
    icon: <FaGoogle className="text-red-400" />,
    authText: "Google",
  },
  {
    authType: "email",
    icon: <MdOutlineMail />,
    authText: "Email",
  },
];
