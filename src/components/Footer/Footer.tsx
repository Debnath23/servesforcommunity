export default function Footer() {
  return (
    <footer className="text-slate-900 bg-gray-200 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-slate-700 text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-slate-700 text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/home"
                className="hover:text-slate-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-slate-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/subjects"
                className="hover:text-slate-500 transition-colors duration-300"
              >
                Subjects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-slate-500 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-slate-700 text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/debnath.mahapatra.39"
                  className="hover:text-slate-500 transition-colors duration-300"
                  target="blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/debnathmahapatra14/"
                  className="hover:text-slate-500 transition-colors duration-300"
                  target="blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-500 transition-colors duration-300"
                  target="blank"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-slate-700 text-lg font-semibold mb-4">Contact Us</h2>
          <p>Kolkata, India</p>
          <p>Midnapore 721101</p>
          <p>Email:debnathmahapatra740@gmail.com</p>
          <p>Phone: (91+) 7319358180</p>
        </div>
      </div>
      <p className="text-center text-slate-700 text-xs pt-8">
        © 2024 Help for Community. All rights reserved.
      </p>
    </footer>
  );
}
