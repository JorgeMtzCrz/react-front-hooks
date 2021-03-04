import React from 'react'
import NavbarSolid from './NavbarSolid';
import BannerEmail from './BannerEmail';
import Footer from './Footer';
import TextSection from './TextSection';
import {Helmet} from "react-helmet";

function LegalTerms(props) {
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
  const paragraph1 = '1. USE OF THIS WEBSITE'
  const paragraph2 = 'This website is owned by Best Deal in Town Denver (hereinafter “BDIT”), and is operated for your personal non-commercial use and information. Your use of this website is subject to the following terms and all applicable laws. By accessing and browsing this website, you accept, without limitation or qualification, these terms. If you do not agree with any of the terms, please do not use this website. You are responsible to ensure that your access to this website and material available on or through it are legal in each jurisdiction in or through which you access or view the site or such material.'
  const paragraph3 = '2. PRIVACY'
  const paragraph4 = `Our privacy practices are explained in our Privacy Policy, which also governs your visit to this website. Your continued use of this website implies that you acknowledge that you have read our Privacy Policy and agree to be bound by and accept its terms and conditions. You consent to the use of your personal information by BDIT in accordance with the terms of and for the purposes set forth in our Privacy Policy, as same may be amended from time to time.`
  const paragraph5 = '3. OTHER POLICIES AND AGREEMENTS'
  const paragraph6 = 'When you purchase products from BDIT using the bestdealdenver.com website, your purchase is subject to separate Terms and Conditions of Sale applicable to the website. Certain additional terms and conditions may apply to purchases of products and other uses of portions of the bestdealdenver.com website.'
  const paragraph7 = '4. SERVICES INFORMATION'
  const paragraph8 = 'The services available for sale by BDIT are available only in the United States and this website is directed only at customers and prospective customers in those states. BDIT and its affiliates attempt to be as accurate as possible in describing all services available for sale and/or distribution by BDIT. However, BDIT does not warrant that product descriptions or other content of this site are accurate, complete, reliable, current or error-free.'
  const paragraph9 = '5. EXCLUSION OF WARRANTIES'
  const paragraph10 = 'BDIT makes no representation or warranty regarding the functionality, the good working order or condition of this website, its suitability for use, or that its use will be uninterrupted or error-free. BDIT does not represent, warrant or undertake that any errors on or relating to this website will be corrected, or that any server from which the website is operated is or will be free from viruses or other harmful components. All material or information on this website is provided to you “As is”, “With all faults” and without warranties of any kind, whether express or implied.'
  const paragraph11 = 'BDIT and its licensors disclaim all warranties or conditions, written or oral, statutory, express or implied, including without limitation, warranties or conditions of merchantability, quality, durability, suitability or fitness for a particular purpose. These exclusions are in addition to any specific exclusion otherwise provided in these terms and conditions. Because certain federal, state or provincial laws do not permit the exclusion of certain warranties, these exclusions may not apply to you.'
  const paragraph12 = '6. LIMITATION OF LIABILITY'
  const paragraph13 = 'BDIT will not be liable for any damages, either direct or indirect, incidental, special or consequential, for use of or inability to use material, products or services of any kind, delay of or partial delivery, termination of rights or loss of profits, data, business or goodwill, whether on a contractual, tort or extracontractual basis, or to provide indemnification or any other remedy to you or any third party. Your sole and exclusive remedy is to discontinue using and accessing this website. Because certain federal, state or provincial laws do not allow the exclusion or limitation of certain damages, these exclusions may not apply to you.'
  const paragraph14 = 'Material on this website, including but not limited to texts, images, illustrations, software, audio clips and video clips, is owned or otherwise provided by BDIT, and BDIT does not represent or warrant that such material does not infringe the rights of any other person or entity. The material on this website is protected in Canada and in other jurisdictions by the Copyright Act and by virtue of the applicable international treaties. Consequently, the material on this website may not be copied, reproduced, republished, downloaded, posted, transmitted, distributed or modified, in whole or in part in any form whatsoever, including but not limited to text, audio or video, without the prior written consent of BDIT. '
  const paragraph15 = 'Trademarks, logos and service marks (collectively, “Marks”) displayed on this website are registered or unregistered Marks of BDIT or others, are the property of their respective owners, and may not be used without written permission of the owner of such Marks. Nothing in this website is to be interpreted as conferring a right to use the Marks or the material protected by the Copyright Act. Notwithstanding the foregoing, BDIT authorizes you to make one electronic or paper copy of the information posted on any page of this site provided that the copy is used solely for non-commercial, personal purposes and, in each and every case, provided that any such copy remains protected by all copyright, trademarks, service marks and other proprietary notices and legends contained on such website.'
  const paragraph16 = 'This license does not include any resale of this site or its contents; any collection of product listings, descriptions or prices; any other derivative use of this site or its contents; any downloading or copying of information for the benefit of any merchant; or any use of data mining, robots, or similar data gathering and extraction tools. You may not frame or utilize framing techniques to enclose any trademark, logo or other proprietary information (including images, text, page layout, or form) of BDIT and its affiliates without express written consent of BDIT. You may not use any meta tags or any other “hidden text” utilizing BDIT’s name or trademarks without the express written consent of BDIT. Any unauthorized use of this site and/or its contents terminates the permission or license granted by BDIT.'
  const paragraph17 = '8. CONFIDENTIALITY OF THE INFORMATION TRANSMITED'
  const paragraph18 = 'You acknowledge that information or material which you provide electronically through your access to or usage of this website is not confidential or proprietary, except as may be required under applicable law or pursuant to BDIT’s privacy policy, and acknowledge that unprotected e-mail communication over the Internet is subject to possible interception, alteration or loss. You represent and warrant that the information or material which you provide electronically to BDIT by accessing or using this website does not infringe the rights of any other person or entity. You consent to BDIT using that information or material, in whole or in part by any means whatsoever, including reproducing, retransmitting or publishing this information or material or ideas, concepts or other information contained therein for the commercial purposes of BDIT or the disclosure of your identity, in accordance with the BDIT Privacy Policy (see Section 2 above).'
  const paragraph19 = '9. ELECTRONIC COMMUNICATIONS'
  const paragraph20 = 'When you visit this website or send e-mails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on this website. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.'
  const paragraph21 = '10. SMS MOBILE TERMS AND CONDITIONS'
  const paragraph22 = 'When you provide your mobile number to BDIT, you agree to receive up to 4 messages per month from BDIT on your mobile phone. The text messages may include updates, alerts and exclusive offers. You can reply STOP to 22536 to cancel this service or HELP for help. For more information, Contact Customer Service at best.deal.in.denver@gmail.com Standard message and data rates may apply.'
  const paragraph23 = 'Compatible carriers include: AT&T, Sprint, T-Mobile®, Verizon Wireless, Boost, Cricket, MetroPCS, U.S. Cellular, Virgin Mobile, ACS Wireless, Appalachian Wireless, Bluegrass Cellular, Breakaway Wireless, Cabelvision (Optimum Mobile), Carolina West Wireless, Cellcom, Cellular One of East Central Illinois, Centennial Wireless, Chariton Valley Cellular, Chat Mobility (Hawkeye), Cincinnati Bell Wireless, Coral Wireless, Cox Mobility, Cross/ Sprocket, C-Spire Wireless (formerly Cellsouth), CTC Telecom, DTC Wireless (Advantage Cellular), Duet IP (AKA Max/Benton/Albany), Element Mobile, Epic Touch, GCI Communications, Golden State, Illinois Valley Cellular, Immix (Keystone Wireless/ PC Management), Inland Cellular, iWireless, Leaco, Mobi PCS, Mosaic, MTPCS/ Cellular One (Cellone Nation), Nemont, Nex-Tech Wireless, nTelos, NW Missouri Cellular (Hawkeye), Panhandle Telecommunications, Peoples Wireless, Pioneer, Pine Cellular.'
  const paragraph24 = 'Plateau, Revol, Rina - Custer, Rina - All West, Rina - Cambridge Telecom Coop, Rina - Eagle Valley Comm, Rina - Farmers Mutual Telephone Co, Rina - Nucla Nutria Telephone Co, Rina - Silver Star, Rina - Syringa, Rina - UBET, Rina - Manti, Rural Cellular Corporation, SI Wireless, Simmetry, SouthernLINC, SRT, Strata Networks, Thumb Cellular, Union Wireless, United, Viaero Wireless, West Central Wireless. T-Mobile is not liable for delayed or undelivered messages.'
  const paragraph25 = '11. SURVEILLANCE'
  const paragraph26 = 'BDIT may monitor the access to its website and other activities in relation to its website and may intervene in this regard. However, BDIT makes no representation and gives no warranty to that effect. You consent to such surveillance and intervention, if BDIT ever decides to do it.'
  const paragraph27 = '12. LINKS'
  const paragraph28 = 'Links and references to other websites are provided to you as a convenience only. BDIT has not reviewed and does not expressly or implicitly endorse other websites or any information or material, or the accessibility thereof, via such links, and does not assume any responsibility for any such other websites, information or material posted thereon, or products or services offered thereon. You may not create links from other websites to this website, except if expressly permitted by BDIT. To obtain permission, contact our Website administrator at best.deal.in.denver@gmail.com'
  const paragraph29 = '13. VIRUSES, ETC'
  const paragraph30 = 'BDIT does not represent or warrant that the information or material, including the downloadable software, accessed from or through this website will be uninterrupted or free of errors, defects, viruses or other harmful components, or that any such problems which are discovered will be corrected.'
  const paragraph31 = '14. DAMAGES TO OTHERS'
  const paragraph32 = 'You agree not to introduce into or through this website any information or materials which may be harmful to others. Among other things, you agree not to include, knowingly or otherwise, any error or defect in material or information which may, among other things, be a libel, slander, defamation or obscenity, or promote hatred or otherwise give rise to a criminal offense or civil liability on the part of any person or entity.'
  const paragraph33 = '15. RESERVE OF RIGHTS'
  const paragraph34 = 'All rights not expressly granted in these terms are reserved to BDIT. Nothing contained in these terms shall be construed as conferring by implication, estoppel or otherwise any license or right under any copyright, patent, trademark or other intellectual property right of BDIT or any other person or entity.'
  const paragraph35 = '16. GOVERNING LAW'
  const paragraph36 = 'This site is controlled and operated by BDIT and these terms, this website, any use of this website and any transaction conducted on or from it shall be governed by the laws of United States applicable therein without reference to principles of conflict of laws. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.'
  const paragraph37 = '17. DISPUTE RESOLUTION; INJUCTIVE RELIEF'
  const paragraph38 = 'It is important that you read this entire section carefully. This section provides for resolution of disputes through final and binding arbitration before a neutral arbitrator instead of in a court by a judge or jury.'
  const paragraph39 = 'BINDING ARBITRATION'
  const paragraph40 = 'Any dispute, difference, controversy or claim between us or by either of us against the other or the employees, agents, mandataries, officers, directors, successors, assigns or affiliates of the other, arising out of, relating to, or having any connection with, the present terms, this website, any use of this website and any transaction conducted on or from it (whether contractual or extra-contractual, in contract or tort, pursuant to statute or regulation, or otherwise, and whether pre-existing, present or future), including any question regarding negotiation, formation, existence, validity, performance, effects, interpretation, breach, resolution or annulment and further including the applicability or scope of this arbitration clause (including the National Arbitration Forum’s Code of Procedure discussed below)'
  const paragraph41 = '(hereinafter collectively referred to as “Claims” and each, individually, as a “Claim”) shall be referred to and finally resolved by binding arbitration, to the exclusion of courts of law, before or under the rules of the National Arbitration Forum under the Code of Procedure then in effect and any specific procedures for the resolution of small claims and/or consumer disputes then in effect (which you may obtain at www.arbitration-forum.com or by mail at P.O. Box 50191, Minneapolis, MN 55405), which Code of Procedure, as in effect or replaced from time to time, is incorporated into and forms an integral part of these terms. However, before you submit a Claim for arbitration, you must first contact our customer service representatives at best.deal.in.denver@gmail.com, and give us an opportunity to resolve the dispute.'
  const paragraph42 = 'Similarly, before BDIT takes a dispute to arbitration, we must first attempt to resolve it by contacting you. If the dispute cannot be satisfactorily resolved within sixty (60) days from the date you or BDIT is notified by the other of a dispute, then either party may then initiate the arbitration process as provided in the National Arbitration Forum’s Code of Procedure. For greater certainty, no recourse may be made by either party to any court or tribunal, whether federal or provincial, in respect of any matter whatsoever relating to these terms including, without limitation, any Claim, any arbitration initiated to resolve a Claim, and any arbitration award made in relation to a Claim, except as expressly permitted in these terms or by law.'
  const paragraph43 = 'Any award rendered pursuant to the arbitration shall be final and binding on each of the parties and no appeal shall lie from such award. Such award may be rendered enforceable and executory by any court having jurisdiction over the person or the property of the person against whom enforcement of the award is sought. No claim may be joined with another lawsuit, or in an arbitration with a dispute of any other person, or resolved on a class-wide basis.'
  const paragraph44 = 'The parties expressly agree that any claim that is arbitrated pursuant to these terms shall not be consolidated with any other arbitral proceeding for any reason. The arbitrator may not award damages that are barred by these terms and may not award exemplary or punitive damages or attorneys’ fees. You and BDIT both waive any claims for an award of damages that are excluded under these terms.'
  const paragraph45 = 'INJUNCTIVE RELIEF AND PROVISIONAL RELIEF'
  const paragraph46 = 'Notwithstanding the provisions in this Section 17, the National Arbitration Forum’s Code of Procedure or any other provision of these terms, BDIT shall have the right to seek and obtain any injunctive, provisional or interim relief from any court of competent jurisdiction to protect its trade-mark or other intellectual property rights or confidential information or to preserve the status quo pending arbitration.'
  const paragraph47 = '18. CHANGES TO TERMS/SEVERABILITY'
  const paragraph48 = 'BDIT may modify, alter or otherwise update the terms applicable to this website from time to time. We will notify you of any such modifications to this website by posting notice of such changes on this website. Following the posting of such changes, your continued use of this site will constitute your acceptance of these terms and other policies, as modified. You will be bound by such changes. If any one of these conditions shall be deemed invalid, void, or for any reason unenforceable, such condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.'
  const paragraph49 = '19. JURISDICTION'
  const paragraph50 = 'This website is controlled and operated by BDIT and makes no representation that materials on the website are appropriate or available for use in other locations. Those who choose to access this website from other locations do so on their own initiative and are responsible for compliance with local laws, if and to the extent local laws are applicable.'
  const paragraph51 = '20. COOKIES'
  const paragraph52 = 'We may use “cookies” to track your preferences and activities on the BDIT website. Cookies are small data files saved by a website on your web browser. They keep a record of your preferences making your subsequent visits to the site more efficient. Cookies may store a variety of information, including, the number of times that you access a site, your registration information and the number of times that you view a particular page or other item on the site.'
  const paragraph53 = 'The use of cookies is a common practice adopted by most major sites to better serve their clients. Most browsers are designed to accept cookies, but they can be easily modified to block cookies; see your browser’s help files for details on how to block cookies, how to know when you have received cookies and how to disable cookies completely. You should note, however, that without cookies, some of the website’s functions will not be available, and the user will lose some of the benefits of the site. We may share with certain partners information collected from our cookies placed on the BDIT website, such as your browsing activity on our websites and the products you purchase, to allow them to provide more relevant BDIT ads to you and provide us with measurement services, on an aggregated basis, on the efficiency of these ads.'
  const paragraph54 = 'For the same purposes, we may allow the partners to place cookies, web beacons, and other storage technologies on our website and use them to collect information about visitors of our website. You may also opt-out of the collection and use of your information for online behavioral advertising by visiting the following websites: http://www.aboutads.info/choices (United States), https://youradchoices.ca/choices/ (Canada) or http://www.youronlinechoices.eu/ (European Union). To comply with the partner’s Business Tools Terms and the OPC’s position on OBA, BDIT may therefore be required to include more than a link to its Privacy Policy on its website.'
  const paragraph55 = 'Some organizations comply with these requirements by placing a banner on their website to inform users that tracking cookies used for OBA will be placed on their browsers. Other organizations become members of the Digital Advertising Alliance of Canada (“DAAC”), which administers the “Your Ad Choice” program, and place the AdChoice logo on their website as a link to a dedicated page (i.e. outside of the privacy policy) explaining how visitors’ information is collected for ad purposes. Facebook-Related Advertising You may always review and modify your Facebook Ad Preferences to request that Facebook stops serving ads to you based on your web browsing.'
  const paragraph56 = '21. NO WAIVER'
  const paragraph57 = 'The failure of BDIT to enforce any provisions of these terms or to respond to a breach by you or any third party of these terms shall not in any way waive the right of BDIT to subsequently enforce any of the terms and conditions contained herein or to act with respect to similar breaches.'
  const paragraph58 = '22. ENTIRE AGREEMENT'
  const paragraph59 = 'These terms, together with all other agreements, terms or conditions incorporated or referred to herein constitute the entire agreement between you and BDIT with respect to the use of this website and any transaction conducted on or from this website and its contents, and supersede any prior understandings or agreements (whether electronic, oral or written) regarding the subject matter hereof, and may not be amended or modified except in writing, or by BDIT making such amendments or modifications available to it pursuant to the terms here of.'
  const paragraph60 = '23. TERMINATION'
  const paragraph61 = 'BDIT reserves the right, at its sole discretion, to terminate your access to all or any part of this site, with or without notice.'
  const paragraph62 = '24. HEADINGS'
  const paragraph63 = 'The headings used herein are inserted for convenience of reference only and do not affect the construction or interpretation of the terms and conditions herein.'
  const paragraph64 = '25. ENGLISH LANGUAGE'
  const paragraph65 = 'You expressly agree that these terms and all ancillary documents be drafted solely in English.'

  const paragraphs = [paragraph1,paragraph2,paragraph3,paragraph4,paragraph5,paragraph6,paragraph7,paragraph8, paragraph9,paragraph10,paragraph11,paragraph12,paragraph13,paragraph14,paragraph15,paragraph16,paragraph17,paragraph18,paragraph19,paragraph20,paragraph21,paragraph22,paragraph23,paragraph24,paragraph25,paragraph26,paragraph27,paragraph28,paragraph29,paragraph30,paragraph31,paragraph32,paragraph33,paragraph34,paragraph35,paragraph36,paragraph37,paragraph38,paragraph39,paragraph40,paragraph41,paragraph42,paragraph43,paragraph44,paragraph45,paragraph46,paragraph47,paragraph48,paragraph49,paragraph50,paragraph51,paragraph52,paragraph53,paragraph54,paragraph55,paragraph56,paragraph57,paragraph58,paragraph59,paragraph60,paragraph61,paragraph62,paragraph63,paragraph64,paragraph65]
  const legalTerms = 'Legal Terms'
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://bditdenver.com/legal-terms" />
    </Helmet>
    <NavbarSolid/>
    <TextSection title={legalTerms} paragraphs={paragraphs}/>
    <BannerEmail/>
    <Footer/>
    </>
  );
}

export default LegalTerms;