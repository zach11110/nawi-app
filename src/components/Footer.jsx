import React from "react";
import nawi from "../assets/Images/nawi_logo.png";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: 'footer_sell',
      items: ['footer_sell1', 'footer_sell2', 'footer_sell3'],
      secondTitle: 'footer_buy',
      secondItems: ['footer_buy1', 'footer_buy2'],
    },
    {
      title: 'footer_sbr',
      items: ['footer_sbr1', 'footer_sbr2', 'footer_sbr3'],
      secondTitle: 'footer_travel',
      secondItems: ['footer_travel1', 'footer_travel2', 'footer_travel3'],
    },
    {
      title: 'footer_company',
      items: ['footer_company1', 'footer_company2', 'footer_company3'],
      secondTitle: 'footer_sources',
      secondItems: ['footer_sources1', 'footer_sources2', 'footer_sources3'],
    },
  ];

  const socialLinks = [
    { icon: FaFacebookSquare, url: 'https://www.facebook.com/', hoverColor: 'hover:text-blue-600' },
    { icon: FaInstagram, url: 'https://www.instagram.com/', hoverColor: 'hover:text-[#a54565]' },
    { icon: FaTwitterSquare, url: 'https://www.twitter.com/', hoverColor: 'hover:text-blue-600' },
    { icon: FaGithubSquare, url: 'https://www.github.com/', hoverColor: 'hover:text-black' },
  ];

  return (
    <footer className="bg-[#800080] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img src={nawi} alt="Logo" className="h-24 w-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {footerSections.map((section, index) => (
            <div key={index}>
              <FooterSection {...section} />
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-4 mb-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className={`text-gray-400 ${link.hoverColor} transition-colors duration-300`}>
                <link.icon size={30} />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            {t('footer_all_rights')} <span className="text-[#a681eb] font-bold italic">TMP</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, items, secondTitle, secondItems }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <h6 className="font-medium text-white mb-4">{t(title)}</h6>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm">{t(item)}</li>
        ))}
      </ul>
      {secondTitle && (
        <>
          <h6 className="font-medium text-white mt-6 mb-4">{t(secondTitle)}</h6>
          <ul className="space-y-2">
            {secondItems.map((item, index) => (
              <li key={index} className="text-sm">{t(item)}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Footer;