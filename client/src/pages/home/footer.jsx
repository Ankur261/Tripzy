import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#00008f] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold mb-3">Tripzy</h2>
          <p className="text-sm">
            Tripzy is a modern flight booking app built with React and Express. Search, compare, and book flights easily — more features coming soon!
          </p>
        </div>

        {/* General Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-200"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Tripzy. All rights reserved.
      </div>
    </footer>
  );
}
