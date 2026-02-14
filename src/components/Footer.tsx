export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-br from-zinc-1000 via-zinc-900 to-blue-900/20 border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              FoodShare
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Made with ❤️ by Abhi Rajput.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/abhi-rajput-KRP"
              target="_"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub-Profile
            </a>
            <a
              href="https://github.com/abhi-rajput-KRP/FoodShare-React_Version"
              target="_"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub-Repo
            </a>
            <a
              href="mailto:kartarsinghabhi2007@gmail.com?subject=FoodShare%20Inquiry&body=Your%20Message%20Here"
              target="_"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact-Me
            </a>
          </nav>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-gray-400">
            © 2026 FoodShare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
