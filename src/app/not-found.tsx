export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-white flex items-center justify-center px-6 py-20">
      <div className="mx-auto w-full max-w-3xl text-center">

        {/* Security Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50">
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-600"
          >
            <path
              d="M12 3L19 6V11.5C19 16.1 16.1 19.9 12 21C7.9 19.9 5 16.1 5 11.5V6L12 3Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 12L11.2 13.7L14.8 10.1"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 404 */}
        <p className="text-[90px] font-extrabold leading-none tracking-tight text-blue-600 sm:text-[120px]">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          Page Not Found
        </h1>

        {/* Blue line */}
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-600" />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to a secure place.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/"
            className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Back to Home
            <span className="text-lg">→</span>
          </a>

          <a
            href="/contact"
            className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
          >
            Contact Us
            <span className="text-lg">→</span>
          </a>

        </div>

        {/* Small security message */}
        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-2 text-sm text-slate-500">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-500"
          >
            <path
              d="M12 3L19 6V11.5C19 16.1 16.1 19.9 12 21C7.9 19.9 5 16.1 5 11.5V6L12 3Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12H15"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>

          <span>Cyber Trishul • Secure. Protect. Defend.</span>
        </div>

      </div>
    </main>
  );
}