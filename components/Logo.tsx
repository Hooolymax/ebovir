import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";

/**
 * Ebovir brand logo (horizontal lockup). Source asset lives in
 * public/assets/logo.png — swap that file to update the logo everywhere.
 */
export function Logo({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Ebovir — home"
      className="inline-flex items-center"
    >
      <Image
        src={logo}
        alt="Ebovir Biotechnologie Inc."
        className={className}
        priority={priority}
      />
    </Link>
  );
}
