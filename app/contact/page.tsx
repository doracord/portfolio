import Link from "next/link";

export default function Contact() {
  return (
    <div className="space-y-4 m-4">
      <h1 className="text-4xl">Contact</h1>
      <div className="space-y-2">
        <p className="text-xl">
          X (twitter):{" "}
          <Link
            href="https://x.com/@dora_cord"
            target="_blank"
            className="text-blue-600"
          >
            @dora_cord
          </Link>
        </p>
        <p className="text-xl">
          Discord ID: <span className="text-blue-600">dora_cord</span>
        </p>
      </div>
      <div>
        <p>Please make requests for site creation, etc. via DM on Discord.</p>
        <p>We usually reply within 48 hours.</p>
      </div>
    </div>
  );
}
