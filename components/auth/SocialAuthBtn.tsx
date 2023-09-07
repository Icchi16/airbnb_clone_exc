import { Button } from "@nextui-org/button";
import { find, propEq } from "ramda";
import { FaApple, FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { SocialAuthVariant, socialAuthVariant } from "./socialAuthVariant";

const SocialAuthBtn: React.FC<Partial<SocialAuthVariant>> = ({ authType }) => {
  const { icon, authText } = find<SocialAuthVariant>(
    propEq(authType, "authType")
  )(socialAuthVariant) as SocialAuthVariant;

  return (
    <Button
      variant="bordered"
      size="lg"
      startContent={<div className="absolute left-4 text-xl">{icon}</div>}
    >
      Continue with {authText}
    </Button>
  );
};

export default SocialAuthBtn;
