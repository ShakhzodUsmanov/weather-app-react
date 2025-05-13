import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { theme } = useContext(AppContext);

  const languages = ['en', 'ru', 'uz'];

  const getLabel = (lang) => {
    switch (lang) {
      case 'en': return 'EN';
      case 'ru': return 'RU';
      case 'uz': return 'UZ';
      default: return lang.toUpperCase();
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className='rounded-2xl shadow-xl bg-white dark:bg-gray-600 dark:text-white flex items-center justify-center w-fit'>
        {languages.map(lang => (
          <div
            key={lang}
            className={`px-3 h-8 text-sm rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-200
              ${i18n.language === lang
                ? 'bg-indigo-400 text-white'
                : 'bg-white dark:bg-gray-600'
              }`}
            onClick={() => i18n.changeLanguage(lang)}
          >
            {getLabel(lang)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;