import React from 'react';
import './footer.css';
import { FooterData } from '../../data';

const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <div className="footer_inr">
          <div className="footer_menu">

            <ul className="d-flex align-items-center justify-content-center wow fadeInUp">
              {FooterData && FooterData.length > 0 && FooterData.map((data, index) => {
                return (
                  <li><a href="#.">{data.text}</a></li>
                )
              })}
            </ul>
            <p className="wow fadeInUp">© Copyright 2022 Trescon . All Rights Reserved. The information in this website/document is for promotional purposes only and not contractual. No part of this website/document may be reproduced or transmitted in any form or by any means without the prior written permission of Trescon</p>

          </div>

          <div className="ft_social wow fadeInUp">
            <ul className="d-flex align-items-center justify-content-center">
              <li><a href="#.">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.59293 3.8014C7.62358 4.3071 7.54654 4.81354 7.36692 5.28725C7.18729 5.76097 6.90917 6.19116 6.55093 6.5494C6.19269 6.90764 5.7625 7.18576 5.28879 7.36539C4.81507 7.54501 4.30863 7.62205 3.80293 7.5914C3.31615 7.61148 2.83027 7.53391 2.37393 7.36325C1.9176 7.19258 1.50005 6.93229 1.14591 6.59771C0.791756 6.26314 0.508172 5.86104 0.311873 5.41514C0.115573 4.96923 0.0105293 4.48854 0.00293457 4.0014C-0.0171407 3.48751 0.0659441 2.97481 0.247284 2.49357C0.428624 2.01232 0.704543 1.57228 1.05875 1.19943C1.41296 0.826576 1.83828 0.528468 2.3096 0.322704C2.78092 0.116939 3.28869 0.00768831 3.80293 0.00140134C4.30526 -0.012446 4.80512 0.0764539 5.27187 0.26265C5.73861 0.448847 6.16241 0.728416 6.51728 1.08422C6.87214 1.44002 7.15059 1.86455 7.33556 2.33179C7.52052 2.79902 7.60811 3.29911 7.59293 3.8014V3.8014Z" fill="#F3F3F3" />
                  <path d="M7.59293 9.4917H0.00292969V34.1617H7.59293V9.4917Z" fill="#F3F3F3" />
                  <path d="M25.8129 9.87133C24.387 9.83201 22.975 10.16 21.7124 10.8237C20.4498 11.4874 19.379 12.4645 18.6029 13.6613H18.4129L18.0029 10.4413H11.2029C11.2029 12.5213 11.3929 14.9913 11.3929 17.8413V34.1613H19.0029V20.6813C18.9623 20.0452 19.0265 19.4067 19.1929 18.7913C19.7629 17.4613 20.7029 15.7913 22.7929 15.7913C25.4529 15.7913 26.5929 18.0713 26.5929 21.1013V34.2013H34.1829V20.2013C34.1629 13.0913 30.5529 9.87133 25.8129 9.87133Z" fill="#F3F3F3" />
                </svg>
              </a>
              </li>
              <li><a href="#.">
                <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 30.1546C4.3695 30.6086 8.75135 29.4178 12.29 26.8146C11.48 26.6046 10.8 26.4746 10.14 26.2646C8.96568 25.9019 7.88475 25.2871 6.97275 24.4632C6.06075 23.6393 5.3397 22.6262 4.86 21.4946C4.53 20.7746 4.6 20.7146 5.39 20.7246C6.2665 20.8317 7.15573 20.7533 8 20.4946C6.63292 20.1346 5.37358 19.4483 4.33 18.4946C2.73231 17.0609 1.75058 15.0652 1.59 12.9246C1.52 12.0246 1.59 11.9246 2.44 12.3246C3.2424 12.7104 4.11974 12.9152 5.01 12.9246C4.39169 12.3279 3.80743 11.6969 3.26 11.0346C2.35023 9.81059 1.78739 8.36389 1.63076 6.84687C1.47413 5.32985 1.72951 3.79867 2.37 2.4146C2.71 1.6046 2.85 1.5746 3.43 2.2246C6.21612 5.42342 9.79139 7.83681 13.8 9.2246C15.5878 9.8534 17.4443 10.2663 19.33 10.4546C20.33 10.5546 20.38 10.4546 20.27 9.4546C20.1223 7.74229 20.4816 6.02436 21.3031 4.51474C22.1246 3.00511 23.372 1.77049 24.89 0.9646C26.426 0.170728 28.1648 -0.144055 29.8816 0.0609623C31.5984 0.265979 33.2142 0.981365 34.52 2.1146C34.7197 2.32198 34.9746 2.46794 35.2545 2.53527C35.5345 2.6026 35.8278 2.58849 36.1 2.4946C37.4221 2.12553 38.6998 1.61246 39.91 0.9646C40.09 0.8646 40.26 0.6646 40.61 0.7946C40.0056 2.53647 38.8991 4.06048 37.43 5.1746C38.8558 4.9816 40.2507 4.60515 41.58 4.0546C41.5798 4.24359 41.5395 4.43039 41.462 4.60274C41.3844 4.77508 41.2713 4.92908 41.13 5.0546C40.2999 6.15845 39.3167 7.13831 38.21 7.9646C37.975 8.12882 37.7875 8.35212 37.6663 8.61196C37.5452 8.87181 37.4947 9.15902 37.52 9.4446C37.5981 14.9765 35.7808 20.3686 32.37 24.7246C30.4777 27.3077 28.0642 29.4649 25.2857 31.0565C22.5072 32.6482 19.4255 33.6389 16.24 33.9646C10.8822 34.6504 5.44826 33.539 0.79 30.8046C0.61 30.7046 0.44 30.5846 0.28 30.4746C0.177458 30.3764 0.0837635 30.2693 0 30.1546H0Z" fill="#F3F3F3" />
                </svg>
              </a>
              </li>
              <li><a href="#.">
                <svg width="24" height="46" viewBox="0 0 24 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.05 8.21H23.82V0H18.15C10.15 0 6.29 4.78 6.29 11.59V18.05H0V25.84H6.29V45.65H15.74V25.84H22L23.79 18.05H15.74V12.73C15.74 10.55 16.93 8.21 20.05 8.21Z" fill="#F3F3F3" />
                </svg>
              </a>
              </li>
              <li><a href="#.">
                <svg width="45" height="34" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.12 0C0.380001 0 0 1.93 0 17C0 32.07 0.380001 34 22.12 34C43.86 34 44.24 32.06 44.24 17C44.24 1.94 43.86 0 22.12 0ZM29.17 18.15L19.19 23C19.0054 23.09 18.8009 23.1314 18.5958 23.1205C18.3907 23.1096 18.1917 23.0467 18.0176 22.9377C17.8436 22.8286 17.7001 22.6771 17.6008 22.4973C17.5015 22.3175 17.4496 22.1154 17.45 21.91V12.45C17.4512 12.2473 17.5033 12.0481 17.6016 11.8708C17.6998 11.6935 17.8411 11.5437 18.0123 11.4352C18.1835 11.3267 18.3793 11.2629 18.5815 11.2498C18.7838 11.2367 18.9862 11.2746 19.17 11.36L29.17 15.96C29.3443 16.0391 29.4966 16.1598 29.6134 16.3115C29.7302 16.4632 29.808 16.6412 29.84 16.83C29.8697 16.9312 29.8697 17.0388 29.84 17.14C29.829 17.3529 29.7611 17.559 29.6432 17.7367C29.5254 17.9144 29.3619 18.0571 29.17 18.15Z" fill="#F3F3F3" />
                </svg>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer;