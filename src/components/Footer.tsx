export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://jyc-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            조영찬
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
