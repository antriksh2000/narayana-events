import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="display-lg mt-6">This page has moved on.</h1>
        <p className="lede mt-4">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn btn-dark">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
