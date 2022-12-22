import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  background-color: ${(props) => props.theme.footerBg};
`;

const Wrap = styled.div`
  display: flex;
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  padding: 32px 12px 12px 12px;
`;

const FooterLogo = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 0;
`;

const FooterNav = styled.nav`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
`;

const FooterTitle = styled.h5`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 12px;
  color: ${(props) => props.theme.footerTitle};
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.footerTitle};
`;

const FooterLink2 = styled.a`
  color: ${(props) => props.theme.footerLink};
  padding: 4px 0;
  display: inline-block;
`;

const FooterList = styled.ul`
  margin: 0;
  list-style: none;
`;

const FooterLi = styled.li`
  margin-top: 16px;
`;

const FooterCopyright = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
`;

const FooterSocial = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SocialLi = styled.li`
  margin-left: 12px;
`;

const FooterCol = styled.div`
  flex: 1 0 auto;
  padding: 0 12px 24px 0;
`;

const ColP = styled.p`
  margin-top: auto;
  margin-bottom: 24px;
  color: ${(props) => props.theme.footerLink};
`;

const ColLink = styled.a`
  line-height: inherit;
  padding: 0;
  color: ${(props) => props.theme.footerLink};
  text-decoration: underline;
`;

export default function Footer() {
  return (
    <FooterBox>
      <Wrap>
        <FooterLogo>
          <a href="https://stackoverflow.com" aria-label="Stack Overflow">
            <svg
              aria-hidden="true"
              class="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </a>
        </FooterLogo>
        <FooterNav>
          <FooterCol>
            <FooterTitle>
              <FooterLink href="https://stackoverflow.com">
                Stack Overflow
              </FooterLink>
            </FooterTitle>
            <FooterList>
              <li>
                <FooterLink2 href="/">Questions</FooterLink2>
              </li>
              <li>
                <FooterLink2 href="/help">Help</FooterLink2>
              </li>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>
              <FooterLink href="https://stackoverflow.co/">Products</FooterLink>
            </FooterTitle>
            <FooterList>
              <li>
                <FooterLink2 href="https://stackoverflow.co/teams">
                  Teams
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.co/advertising">
                  Advertising
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.co/collectives">
                  Collectives
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.co/talent">
                  Talent
                </FooterLink2>
              </li>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>
              <FooterLink href="https://stackoverflow.co/">Company</FooterLink>
            </FooterTitle>
            <FooterList>
              <li>
                <FooterLink2 href="https://stackoverflow.co/">
                  About
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.co/company/press">
                  Press
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.co/company/work-here">
                  Work Here
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.com/legal">
                  Legal
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.com/legal/privacy-policy">
                  Privacy Policy
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.com/legal/terms-of-service">
                  Terms of Service
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.co/company/contact">
                  Contact Us
                </FooterLink2>
              </li>
              <li>
                <FooterLink2 href="#">Cookie Settings</FooterLink2>
              </li>
              <li>
                <FooterLink2 href="https://stackoverflow.com/legal/cookie-policy">
                  Cookie Policy
                </FooterLink2>
              </li>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <div>
              <FooterTitle>
                <FooterLink href="https://stackexchange.com">
                  Stack Exchange Network
                </FooterLink>
              </FooterTitle>
              <FooterList>
                <li>
                  <FooterLink2 href="https://stackexchange.com/sites#technology">
                    Technology
                  </FooterLink2>
                </li>
                <li>
                  <FooterLink2 href="https://stackexchange.com/sites#culturerecreation">
                    Culture &amp; recreation
                  </FooterLink2>
                </li>
                <li>
                  <FooterLink2 href="https://stackexchange.com/sites#lifearts">
                    Life &amp; arts
                  </FooterLink2>
                </li>
                <li>
                  <FooterLink2 href="https://stackexchange.com/sites#science">
                    Science
                  </FooterLink2>
                </li>
                <li>
                  <FooterLink2 href="https://stackexchange.com/sites#professional">
                    Professional
                  </FooterLink2>
                </li>
                <li>
                  <FooterLink2 href="https://stackexchange.com/sites#business">
                    Business
                  </FooterLink2>
                </li>

                <FooterLi>
                  <FooterLink2 href="https://api.stackexchange.com/">
                    API
                  </FooterLink2>
                </FooterLi>

                <li>
                  <FooterLink2 href="https://data.stackexchange.com/">
                    Data
                  </FooterLink2>
                </li>
              </FooterList>
            </div>
          </FooterCol>
        </FooterNav>
        <FooterCopyright>
          <FooterSocial>
            <li>
              <FooterLink2 href="https://stackoverflow.blog?blb=1">
                Blog
              </FooterLink2>
            </li>
            <SocialLi>
              <FooterLink2 href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </FooterLink2>
            </SocialLi>
            <SocialLi>
              <FooterLink2 href="https://twitter.com/stackoverflow">
                Twitter
              </FooterLink2>
            </SocialLi>
            <SocialLi>
              <FooterLink2 href="https://linkedin.com/company/stack-overflow">
                LinkedIn
              </FooterLink2>
            </SocialLi>
            <SocialLi>
              <FooterLink2 href="https://www.instagram.com/thestackoverflow">
                Instagram
              </FooterLink2>
            </SocialLi>
          </FooterSocial>

          <ColP>
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under{" "}
            <span>
              <ColLink href="https://stackoverflow.com/help/licensing">
                CC BY-SA
              </ColLink>
            </span>
            . <span>rev&nbsp;2022.12.21.43126</span>
          </ColP>
        </FooterCopyright>
      </Wrap>
    </FooterBox>
  );
}

// tailwind
// export default function Footer() {
//   return (
//     <footer>
//       <div>
//         <div>
//           <a href="https://stackoverflow.com" aria-label="Stack Overflow">
//             <svg
//               aria-hidden="true"
//               class="native svg-icon iconLogoGlyphMd"
//               width="32"
//               height="37"
//               viewBox="0 0 32 37"
//             >
//               <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
//               <path
//                 d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
//                 fill="#F48024"
//               ></path>
//             </svg>
//           </a>
//         </div>
//         <nav>
//           <div>
//             <h5>
//               <a href="https://stackoverflow.com">Stack Overflow</a>
//             </h5>
//             <ul>
//               <li>
//                 <a href="/">Questions</a>
//               </li>
//               <li>
//                 <a href="/help">Help</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h5>
//               <a href="https://stackoverflow.co/">Products</a>
//             </h5>
//             <ul>
//               <li>
//                 <a href="https://stackoverflow.co/teams">Teams</a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.co/advertising">Advertising</a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.co/collectives">Collectives</a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.co/talent">Talent</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h5>
//               <a href="https://stackoverflow.co/">Company</a>
//             </h5>
//             <ul>
//               <li>
//                 <a href="https://stackoverflow.co/">About</a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.co/company/press">Press</a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.co/company/work-here">
//                   Work Here
//                 </a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.com/legal">Legal</a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.com/legal/privacy-policy">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.com/legal/terms-of-service">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.co/company/contact">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#">Cookie Settings</a>
//               </li>
//               <li>
//                 <a href="https://stackoverflow.com/legal/cookie-policy">
//                   Cookie Policy
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <div>
//               <h5>
//                 <a href="https://stackexchange.com">Stack Exchange Network</a>
//               </h5>
//               <ul>
//                 <li>
//                   <a href="https://stackexchange.com/sites#technology">
//                     Technology
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://stackexchange.com/sites#culturerecreation">
//                     Culture &amp; recreation
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://stackexchange.com/sites#lifearts">
//                     Life &amp; arts
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://stackexchange.com/sites#science">Science</a>
//                 </li>
//                 <li>
//                   <a href="https://stackexchange.com/sites#professional">
//                     Professional
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://stackexchange.com/sites#business">
//                     Business
//                   </a>
//                 </li>

//                 <li>
//                   <a href="https://api.stackexchange.com/">API</a>
//                 </li>

//                 <li>
//                   <a href="https://data.stackexchange.com/">Data</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div>
//           <ul>
//             <li>
//               <a href="https://stackoverflow.blog?blb=1">Blog</a>
//             </li>
//             <li>
//               <a href="https://www.facebook.com/officialstackoverflow/">
//                 Facebook
//               </a>
//             </li>
//             <li>
//               <a href="https://twitter.com/stackoverflow">Twitter</a>
//             </li>
//             <li>
//               <a href="https://linkedin.com/company/stack-overflow">LinkedIn</a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/thestackoverflow">Instagram</a>
//             </li>
//           </ul>

//           <p>
//             Site design / logo © 2022 Stack Exchange Inc; user contributions
//             licensed under{" "}
//             <span>
//               <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>
//             </span>
//             . <span>rev&nbsp;2022.12.21.43126</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
