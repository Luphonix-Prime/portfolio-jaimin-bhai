import { Link } from "wouter";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Jaimin Somani</h3>
            <p className="text-white/70 mb-6">
              Cybersecurity professional dedicated to protecting organizations
              from digital threats through expert consulting, training, and
              security assessments.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/jaimin-somani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/jaimin-somani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/jaimin-somani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Penetration Testing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Risk Assessment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/">
                  <a className="hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="hover:text-white transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>
            &copy; 2023 Jaimin Somani. All rights reserved. | Built with
            security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
