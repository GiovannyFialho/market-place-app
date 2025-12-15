import { SignInView } from "../../view-models/sign-in/sign-in.view";
import { useSignInSchemaViewModel } from "../../view-models/sign-in/useSignIn.viewModel";

export default function SignIn() {
  const props = useSignInSchemaViewModel();

  return <SignInView {...props} />;
}
