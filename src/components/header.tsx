import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getRandom } from "../helper/helper";

export function SiteHeader() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  let isActive = false;

  if(location.pathname == '' || location.pathname == '/') {
    isActive = true;
  }

  const [text, setText] = useState([
    ['...', '...'], // next one
    ['...', '...'] // last one
  ]);
  const [timer, setTimer] = useState<number | null>(null);
  const text1BoxRef = useRef<any>(null);
  const text2BoxRef = useRef<any>(null);
  const text1Ref = useRef<any>(null);
  const text2Ref = useRef<any>(null);

  const text1 = [
    t('sloganText1.Livestream software'),
    t('sloganText1.3D animation engine')
  ];
  const text2 = [
    t('sloganText2.Avatars'),
    t('sloganText2.Virtual youtuber'),
    t('sloganText2.Motion capture'),
    t('sloganText2.Broad casting')
  ];

  useEffect(() => {
    if(timer) return;
    const t = setInterval(() => {
      setText((text) => {
        return [
          [
            text1[getRandom(0, text1.length-1)],
            text2[getRandom(0, text2.length-1)]
          ],
          text[0]
        ]
      });
      const replay = (el) => {
        el.className = 'text-item';
        let name = el.getAttribute('data-animate');
        window.requestAnimationFrame(function(time) {
          window.requestAnimationFrame(function(time) {
            el.className = name;
          });
        });
      }
      console.log(text1BoxRef.current.children);
      Array.from(text1BoxRef.current.children).forEach(replay);
      Array.from(text2BoxRef.current.children).forEach(replay);
    }, 1000)
    setTimer(t);
    
  }, []);

  useEffect(() => {
    if(!text1BoxRef.current || !text1Ref.current || !text2BoxRef.current || !text2Ref.current) return;
    text1BoxRef.current.style.width = text1Ref.current.offsetWidth + 'px';
    text2BoxRef.current.style.width = text2Ref.current.offsetWidth + 'px';
  }, [text])

  return (
    <div className={`site-header ${isActive ? 'active' : ''}`}>
      <div className="">{isActive ? 'active' : ''}</div>
      <div className="container">
        <div className="slogan">
          <span className="text-box" ref={text1BoxRef}>
            <b className={`animate-exiting`} data-animate='animate-exiting'>{text[0][0]}</b>
            <b className={`animate-entering`} data-animate='animate-entering' ref={text1Ref}>{text[1][0]}</b>
          </span>
          <span className="dot">for</span>
          <span className="text-box" ref={text2BoxRef}>
            <b className={`animate-exiting`} data-animate='animate-exiting'>{text[0][1]}</b>
            <b className={`animate-entering`} data-animate='animate-entering' ref={text2Ref}>{text[1][1]}</b>
          </span>
        </div>
      </div>
    </div>
  );
}