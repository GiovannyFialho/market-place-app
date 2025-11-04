import SignUpView from "../view-models/sign-up/sign-up.view";
import { useSignUpSchemaViewModel } from "../view-models/sign-up/useSignUp.viewModel";

export default function SignUp() {
  const props = useSignUpSchemaViewModel();

  return <SignUpView {...props} />;
}
