import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { IoOpenOutline } from 'react-icons/io5';

export function SiteNav() {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="site-nav">
      <div className="container">
        <div className="left">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'active' : undefined
        }
      >
        <div className="item">{t('nav.index')}</div>
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          isActive ? 'active' : undefined
        }
      ><div className="item">{t('nav.pricing')}</div>
      </NavLink>
      <NavLink
        to="/faq"
        className={({ isActive }) =>
          isActive ? 'active' : undefined
        }
      >
        <div className="item">{t('nav.faq')}</div>
      </NavLink>
      <a href=""><div className="item">{t('nav.document')}
      <span className="icon">
        <IoOpenOutline />
        </span></div></a>
      </div>
      <div className="right">
        <div className="item item-button">{t('nav.download')}</div>
      </div>
      </div>
    </div>
  );
}