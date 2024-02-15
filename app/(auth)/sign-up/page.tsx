import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import GoogleIcon from "@/public/google.svg";

export default function SignUp() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Enregistrez-vous</h1>
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
          Créer un compte
        </Button>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Avez-vous un compte?{" "}
        <Link className="text-white hover:underline" href="/login">
          Se connecter
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="logo">
          {" "}
          <Github />{" "}
        </Button>
        <Button variant="outline" size="logo">
          <Image src={GoogleIcon} alt="google" className="w-6 h-8" />
        </Button>
      </div>
    </div>
  );
}
