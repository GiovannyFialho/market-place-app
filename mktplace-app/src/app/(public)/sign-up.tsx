import { useSignUpSchemaViewModel } from "@/view-models/sign-up/sign-up.model";
import SignUpView from "@/view-models/sign-up/sign-up.view";

export default function SignUp() {
  const props = useSignUpSchemaViewModel();

  return <SignUpView {...props} />;
}
