import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from 'react-dom'
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getRandom } from "../helper/helper";

let mount = false
export function SiteHeader() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  let isActive = false;

  if (location.pathname == '' || location.pathname == '/') {
    isActive = true;
  }

  const [text, setText] = useState([
    ['...', '...'], // new one
    ['...', '...'] // old one
  ]);
  const text1BoxRef = useRef<HTMLSpanElement>(null);
  const text2BoxRef = useRef<HTMLSpanElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

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
    const t = setInterval(() => {
      const newA = text1[getRandom(0, text1.length - 1)];
      const newB = text2[getRandom(0, text2.length - 1)];

      setText((text) => {
        return [[newA, newB], text[0]]
      });
    }, 1000)
    return () => clearInterval(t)
  }, []);

  useLayoutEffect(() => {
    const exiting: Keyframe[] = [{ transform: 'translateY(0px)', opacity: 1 }, { transform: 'translateY(10px)', opacity: 0 }];
    const entering: Keyframe[] = [{ transform: 'translateY(-10px)', opacity: 0 }, { transform: 'translateY(0px)', opacity: 1 }];

    text1BoxRef.current!.children[0].animate(exiting, { duration: 300, easing: 'ease-in-out', fill: 'forwards' }).play()
    text1BoxRef.current!.children[1].animate(entering, { duration: 300, easing: 'ease-in-out', fill: 'forwards' }).play()

    text2BoxRef.current!.children[0].animate(exiting, { duration: 300, easing: 'ease-in-out', fill: 'forwards' }).play()
    text2BoxRef.current!.children[1].animate(entering, { duration: 300, easing: 'ease-in-out', fill: 'forwards' }).play()
    text1BoxRef.current!.style.width = text1Ref.current!.offsetWidth + 'px';
    text2BoxRef.current!.style.width = text2Ref.current!.offsetWidth + 'px';
  }, [text])

  return (
    <div className={`site-header ${isActive ? 'active' : ''}`}>
      <div className="">{isActive ? 'active' : ''}</div>
      <div className="container">
        <div className="slogan">
          <span className="text-box" ref={text1BoxRef}>
            <b>{text[1][0]}</b>
            <b ref={text1Ref}>{text[0][0]}</b>
          </span>
          <span className="dot">for</span>
          <span className="text-box" ref={text2BoxRef}>
            <b>{text[1][1]}</b>
            <b ref={text2Ref}>{text[0][1]}</b>
          </span>
        </div>
      </div>
    </div>
  );
}