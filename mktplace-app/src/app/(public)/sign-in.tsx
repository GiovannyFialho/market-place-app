import { useSignInSchemaViewModel } from "@/view-models/sign-in/sign-in.model";
import { SignInView } from "@/view-models/sign-in/sign-in.view";

export default function SignIn() {
  const props = useSignInSchemaViewModel();

  return <SignInView {...props} />;
}
