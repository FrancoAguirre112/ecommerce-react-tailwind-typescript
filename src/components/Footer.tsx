import { Twitter, Instagram, Facebook } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-footer py-5 grid grid-cols-2 gap-4 px-2 mt-10">
      <div className="space-y-2 text-center w-full">
        <h3 className="text-white font-bold">Follow us!</h3>
        <div className="space-x-2">
          <Twitter />
          <Instagram />
          <Facebook />
        </div>
      </div>
      <div className="text-white justify-center flex items-center w-full">
        <p>&copy; {new Date().getFullYear()} Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}
