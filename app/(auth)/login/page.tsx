import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Connectez-vous</h1>
        <div className="space-y-4 mt-5"></div>
        <Input
          type="email"
          name="email"
          placeholder="email"
          className="bg-[#333]"
        />
        <Button
          type="submit"
          variant="destructive"
          className="w-full bg-[#e50914] mt-2"
        >
          Connectez-vous
        </Button>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Enregisyrez-vous ?{" "}
        <Link className="text-white hover:underline" href="/sign-up">
          Créer un compte
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
}
