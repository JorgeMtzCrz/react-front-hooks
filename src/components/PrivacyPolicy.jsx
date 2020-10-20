import React from 'react'
import NavbarSolid from './NavbarSolid';
import BannerEmail from './BannerEmail';
import Footer from './Footer';
import TextSection from './TextSection';


function PrivacyPolicy(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  const paragraph1 = 'Best Deal in Town Denver (“BDIT”) values its customers and respects their privacy.'
  const paragraph2 = 'This privacy policy (this “Policy”) describes the personal information we may collect from you, the purposes for which we collect it, how we use it and when we may share it with third parties. This Policy also describes the choices you can make about how we collect, use and disclose your information. BDIT will not collect, use or disclose your personal information other than in compliance with this Policy.'
  const paragraph3 = 'By using the bestdealdenver.com website, you agree to the terms and conditions of BDIT’s Policy. If our Policy changes in the future, we will notify our customers and website users of any such changes by posting an updated Policy on our website.'
  const paragraph4 = `Following the posting of such changes, your continued use of the bestdealdenver.com website will constitute your acceptance of these changes and you will be bound by such changes. If you do not continue to use the bestdealdenver.com website following a change to our Policy but take no other action with respect to your personal information, our use of that information will remain subject to our Policy as it was in effect prior to the change. You are responsible for regularly reviewing this Policy and any changes there to.`
  const paragraph5 = 'We may offer you the ability to connect with our website, or use our applications, services, and tools using a mobile device, either through a mobile application or via a mobile optimized website. The provisions of this Policy apply to all such mobile access and use of mobile devices. This Policy will be referenced by all such mobile applications or mobile optimized websites.'
  const paragraph6 = 'WHAT KIND OF INFORMATION DOES BDIT COLLECT?'
  const paragraph7 = 'We may collect personal information from you when you save or otherwise provide your personal information to us, such as by interacting with us by phone, e-mail, or through our websites, mobile optimized websites, mobile applications or otherwise or if you complete an entry form to participate in a contest, promotion or survey, whether online or at one of our social media sites. As a result of these actions, you might supply us with personal information, such as your name, e-mail and postal addresses, phone number(s), credit card information, product interest information and financial information and in certain circumstances, your opinions and individual preferences. We may also maintain a record of your product interests and acquire information about you from our present and future affiliates or divisions. When you visit our website, we may also gather certain information automatically and store it in log files.'
  const paragraph8 ='This information may include without limitation browser information, Internet Service Provider (ISP), operating system, Internet Protocol (IP) addresses or other device identifiers, location and date/time stamp. This list is non-exhaustive. BDIT’s website is directed for use by adults. BDIT does not knowingly collect any personal information from children under the age of 13. Those under age 13 should not use BDIT’s website or provide BDIT with any personal information.'
  const paragraph9 = 'FOR WHAT PURPOSE DOES BDIT COLLECT MY INFORMATION?'
  const paragraph10 = 'BDIT may use your personal information to (i) answer questions about the services you’re interested in; (ii) maintain contact with you and provide you with ongoing personalized service; (iii) communicate with you (via e-mail, post or otherwise) and provide you with promotions and additional information regarding our services, surveys, contests, promotions and special offers; (iv) help us learn more about your services preferences and your interest in us; and (v) conduct marketing and performance research, to assist us in measuring our customer service, benchmarking our performance and to help us improve our services and product experiences. As provided below, you may always choose not to receive promotional materials or marketing information.'
  const paragraph11 = 'DOES BDIT SHARE MY INFORMATION WITH THIRD PARTIES?'
  const paragraph12 = 'If you visit the bestdealdenver.com website, participate in a contest, survey, promotion or special offer, we may share your personal information with that BDIT Affiliate, so that it can communicate with you (whether by e-mail, post or otherwise) and provide you with promotional materials and additional information about its products, services, contests, promotions and special offers that may be of interest to you, or collect and use that information subject to and for other purposes contemplated by this Policy.'
  const paragraph13 = 'We do not sell or rent your personal information to non-affiliated third parties except as permitted by law. However, in the event of a sale of all or substantially all of our business or another similar transaction, we may transfer or disclose your personal information to a purchaser or prospective purchaser, who may collect, use and disclose such information for the purposes of evaluating the proposed transaction or operating and managing the affairs of the acquired business, or for other purposes identified in this Policy. We may transfer personal information to non-affiliated third parties for processing pursuant to agreements that prohibit the third parties from using or disclosing the personal information other than for the purpose of processing and which impose security safeguards appropriate to the sensitivity of the information. We may also use third-party advertising agencies to collect data and/or serve ads when you visit our websites.'
  const paragraph14 = 'These agencies may use information (not including your name, address, email address or telephone number) about your visits to this website in order to provide tailored advertisements about goods and services of interest to you. If you would like more information about this practice or opt-out of receiving these ads, visit http://optout.networkadvertising.org/. We reserve the right to disclose your personal information as required by law, in response to legal process and law enforcement requests, and as necessary to protect the property, interests and rights of BDIT and the BDIT Affiliates. BDIT’s website may contain links to websites operated by third parties. These websites may collect your personal information.'
  const paragraph15 = 'This Policy does not apply to the practices of third parties and BDIT does not assume any responsibility for, and by using this website and/or accessing a third party’s website from this website you release BDIT of any responsibility for the actions, practices and omissions of third parties. Please check the privacy policy at each site you visit.'
  const paragraph16 = 'HOW CAN I EXERCISE MY CHOICES ABOUT RECEIVING PROMOTIONS?'
  const paragraph17 = 'We want to communicate with you only if you want to hear from us. If you prefer not to receive promotional information from us or other BDIT Affiliates, or if you do not want us to use your information to enhance your service experience, please let us know by using one of the following methods: (i) email us at best.deal.in.denver@gmail.com. Please be sure to include your full name and the e-mail address you used when you registered with or made a purchase from us. You may also unsubscribe from BDIT Email services by using the unsubscribe link situated at the bottom of any promotional message you receive from BDIT.'
  const paragraph18 = 'WHAT ARE COOKIES AND HOW DOES BDIT USE COOKIES ON ITS SITE?'
  const paragraph19 = 'We may use “cookies” to track your preferences and activities on the bestdealdenver.com website or an BDIT Affiliate’s website. Cookies are small data files transferred to your computer’s hard-drive by a website. They keep a record of your preferences making your subsequent visits to the site more efficient. Cookies may store a variety of information, including, the number of times that you access a site, registration information and the number of times that you view a particular page or other item on the site.'
  const paragraph20 = 'The use of cookies is a common practice adopted by most major sites to better serve their clients. Most browsers are designed to accept cookies, but they can be easily modified to block cookies; see your browser’s help files for details on how to block cookies, how to know when you have received cookies and how to disable cookies completely. You can also opt-out by using the following link: networkadvertising.org/choices/. You should note, however, that without cookies, some of the website’s functions will not be available, and the user will lose some of the benefits of the site.'
  const paragraph21 = 'HOW CAN I ACCESS OR CHANGE MY PERSONAL INFORMATION, WITHDRAW MY CONSENT, OR MAKE INQUIRIES OR COMPLAINTS IN RELATION TO THIS POLICY AND ALDO’S PRIVACY PRACTICES?'
  const paragraph22 = 'BDIT will ensure that the personal information it collects is as accurate, complete, and up-to-date as is necessary for the purposes for which it is to be used. You are entitled to request access to and correction of your personal information collected by us. In order to make such a request, or if you have any questions or to make any complaint in relation to this Policy and BDIT’s privacy practices, please contact our privacy officer by writing to: Privacy Officer Best Deal in Town best.deal.in.denver@gmail.com Austin, TX If you have consented to the collection, use and/or disclosure of personal information as identified herein, please note that you can also withdraw your consent at any time by communicating with our privacy officer as provided above.'
  const paragraph23 = 'HOW LONG IS PERSONAL INFORMATION RETAINED?'
  const paragraph24 = 'We will keep your personal information only as long as is reasonably necessary for the purposes described in this Policy or such longer period as may be required by applicable law.'
  const paragraph25 = 'HOW IS PERSONAL INFORMATION SECURED?'
  const paragraph26 = 'We have adopted appropriate measures to ensure the confidentiality of personal information and to safeguard personal information against loss or theft, as well as unauthorized access, disclosure, copying, use or modification, in light of, among other things, the sensitivity of the information and the purposes for which it is to be used. Furthermore, each and every BDIT employee, mandatory or agent must abide by this Policy.'
  const paragraph27 = 'MOBILE PRIVACY'
  const paragraph28 = 'When you use our mobile optimized website or our mobile application, we may receive information about your location and your mobile device, including a unique identifier for your device. BDIT and our service providers may use and store this information to provide you with location based services, search results, and other personalized content. BDIT will provide notifications only to those customers who accept to receive such notifications. Most mobile devices allow you to control or disable location services in the device’s setting’s menu. If you have questions about how to disable your device’s location services, we recommend you contact your mobile service carrier or the manufacturer of your particular device.'
  const paragraphs = [paragraph1, paragraph2,paragraph3,paragraph4,paragraph5,paragraph6,paragraph7, paragraph8,paragraph9,paragraph10,paragraph11,paragraph12,paragraph13,paragraph14,paragraph15,paragraph16,paragraph17,paragraph18,paragraph19,paragraph20,paragraph21,paragraph22,paragraph23,paragraph24,paragraph25,paragraph26,paragraph27,paragraph28]
  const privacyPolicy = 'Privacy Policy'
  return (
    <>
    <NavbarSolid/>
    <TextSection title={privacyPolicy} paragraphs={paragraphs}/>
    <BannerEmail/>
    <Footer/>
    </>
  );
}

export default PrivacyPolicy;