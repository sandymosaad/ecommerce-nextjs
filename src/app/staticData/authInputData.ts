import { SvgIconComponent } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export interface AuthInput {
  label: string;
  type: string;
  inputType: string;
  inputName: string;
  placeholder: string;
  icon: SvgIconComponent;

}

export const inputLoginData: AuthInput[] = [
  {
    label: "Email Address",
    type: "input",
    inputType: "email",
    inputName: "email",
    placeholder: "you@example.com",
    icon: EmailIcon,
  },
  {
    label: "Password",
    type: "input",
    inputType: "password",
    inputName: "password",
    placeholder: "*********",
    icon: LockIcon,
  }
];

export const inputSignupData: AuthInput[] = [
  {
    label: "Full Name",
    type: "input",
    inputType: "text",
    inputName: "name",
    placeholder: "Sandy Mosaad",
    icon: PersonIcon,
  },
  ...inputLoginData,
  {
    label: "Re-Password",
    type: "input",
    inputType: "password",
    inputName: "rePassword",
    placeholder: "*********",
    icon: LockIcon,
  }
];