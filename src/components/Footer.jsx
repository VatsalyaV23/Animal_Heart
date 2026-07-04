import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-[1280px] mx-auto font-plus-jakarta-sans text-sm leading-relaxed">
        {/* Brand */}
        <div>
          <span className="text-xl font-bold text-slate-900 dark:text-white mb-4 block">
            Animal Heart
          </span>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs">
            Expert care for your beloved companions since 2012.
          </p>
        </div>

        {/* Pet Care Links */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Pet Care</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li>
              <a href="#cat-care" className="hover:underline hover:text-red-600 dark:hover:text-red-400">
                Cat Care
              </a>
            </li>
            <li>
              <a href="#dog-care" className="hover:underline hover:text-red-600 dark:hover:text-red-400">
                Dog Care
              </a>
            </li>
            <li>
              <a href="#bird-care" className="hover:underline hover:text-red-600 dark:hover:text-red-400">
                Bird Care
              </a>
            </li>
          </ul>
        </div>

        {/* Medical Links */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Medical</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li>
              <a href="#surgery" className="hover:underline hover:text-red-600 dark:hover:text-red-400">
                Medical Surgery
              </a>
            </li>
            <li>
              <a href="#wellness" className="hover:underline hover:text-red-600 dark:hover:text-red-400">
                Wellness
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li>
              <a href="#privacy" className="hover:underline hover:text-red-600 dark:hover:text-red-400">
                Privacy Policy
              </a>
            </li>
            <li className="mt-4 pt-4 border-t border-slate-200">
              <span className="block text-xs">
                © 2024 Animal Heart - Expert Caretaker Services
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;