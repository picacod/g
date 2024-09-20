import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import { Link} from 'react-router-dom';

function Privacy() {

useEffect(()=>{
  window.scrollTo(0, 0);
},[])
  return (
   <>
    <div style={{
      minHeight: '100vh',
      maxWidth: '100%',
      padding: '20px',
      backgroundColor: '#0000',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <div style={{
        width: '100%',
        backgroundColor: 'rgba(55, 55, 55, 0.3)', // Slight transparency for better blur effect
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)', // Blur effect
        WebkitBackdropFilter: 'blur(10px)', // Safari support
        color:'#b78846'
      }}
        className='container fs-5'
      >
        <Link to={'/'}><p>Back</p></Link>
        <h1 style={{ fontSize: '2em', marginBottom: '20px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>Privacy Policy</h1>
        <p style={{ fontSize: '1em', lineHeight: '1.6',  }}>
          Last updated September 09, 2024
        </p>
        <p style={{ fontSize: '1em', lineHeight: '1.6', }}>
          This Privacy Notice for Picacod Consultancy Services Pvt. Ltd (doing business as PCS) ('we',
          'us', or 'our'), describes how and why we might access, collect, store, use, and/or share
          ('process') your personal information when you use our services (Services), including when you

          Visit our website at http://www.ancientsshadows.com, or any website of ours that links to this
          Privacy Notice

          Engage with us in other related ways, including any sales, marketing, or events

          Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights
          and choices. We are responsible for making decisions about how your personal information is
          processed. If you do not agree with our policies and practices. please do not use our Services If
          you still have any questions or concerns, please contact us at
          ancientsshadowsgame@gmail.com
        </p>

        <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>SUMMARY OF KEY POINTS</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
          This summary provides key points from our Privacy Notice, but you can find out more details
          about any of these topics by clicking the link following each key point or by using our table of
          contents below find the section you are looking for.

          What personal information do we process? When you visit, use, or navigate our Services, we
          may process personal information depending on how you interact with us and the Services, the
          choices you make, and the products and features you use Learn more about personal
          information you disclose to us.

          Do we process any sensitive personal information? Some of the information may be considered
          'special or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual
          orientation, and religious beliefs. We do not process sensitive personal information

          Do we collect any information from third parties? We do not collect any information from third
          parties.

          How do we process your information? We process your information to provide, Improve, and
          administer our Services, communicate with you, for security and fraud prevention, and to comply
          with law. We may also process your information for other purposes with your consent. We
          process your information only when we have a valid legal reason to do so. Learn more about
          how we process your information.

          In what situations and with which parties do we share personal information? We may share
          information in specific situations and with specific third parties. Learn more about when and with
          whom we share your personal information

          What are your rights? Depending on where you are located geographically, the applicable
          privacy law may mean you have certain rights regarding your personal Information. Learn more
          about your privacy rights.

          How do you exercise your rights? The easiest way to exercise your rights is by submitting a data
          subject access request, or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.

          Want to learn more about what we do with any information we collect? Review the Privacy
          Notice in full.
        </p>

        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>
            TABLE OF CONTENTS
          </h2>
          <ol style={{ fontSize: '1em', lineHeight: '1.6' }}>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ol>
        </div>


        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
            Personal information you disclose to us
          </p>
          <p>In Short: We collect personal information that you provide to us</p>
          <p>We collect personal information that you voluntarily provide to us when you register on the
            Services, express an interest in obtaining information about us or our products and Services,
            when you participate in activities on the Services, or otherwise, when you contact us</p>
          <p>Personal information Provided by You. The personal information that we collect depends on the
            context of your interactions with us and the Services, the choices you make, and the products
            and features you use. The personal information we collect may include the following</p>
          <p>names</p>
          <p>email addresses</p>
          <p>usernames</p>
          <p>passwords</p>
          <p>billing addresses</p>
          <p>debit/credit card numbers</p>
          <p>Sensitive Information. We do not process sensitive information.</p>
          <p>Social Media Login Data. We may provide you with the option to register with us using your
            existing social media account details, like your Facebook, X, or other social media account. If
            you choose to register in this way, we will collect certain profile Information about you from the
            social media provider, as described in the section called 'HOW DO WE HANDLE YOUR
            SOCIAL LOGINS?" below.</p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you
            must notify us of any changes to such personal information</p>
          <p>Information automatically collected</p>
          <p>In Short: Some information such as your Internet Protocol (IP) address and/or browser and
            device characteristics - is collected automatically when you visit our Services</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This
            information does not reveal your specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address, browser and device
            characteristics, operating system, language preferences. referring URLs, device name, country,
            location, information about how and when you use our Services, and other technical
            information. This information is primarily needed to maintain the security and operation of our
            Services, and for our internal analytics and reporting purposes.</p>
          <p>Like many businesses, we also collect information through cookies and similar technologies</p>
          <p>The information we collect includes:</p>
          <p>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and
            performance information our servers automatically collect when you access or use our Services
            and which we record in log files. Depending on how you interact with us, this log data may
            include your IP address, device information, browser type, and settings and information about
            your activity in the Services (such as the date/time stamps associated with your usage, pages
            and files viewed, searches, and other actions you take such as which features you use), device
            event information (such as system activity, error reports (sometimes called 'crash dumps'), and
            hardware settings).</p>
          <p>Google API</p>
          <p>Our use of information received from Google APIs will adhere to Google API Services User Data
            Policy, including the Limited Use requirements</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p>In Short: We process your information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to comply with law. We may also
            process your information for other purposes with your consent.</p>
          <p>We process your personal information for a variety of reasons, depending on how you interact
            with our Services, including:</p>
          <p>To facilitate account creation and authentication and otherwise manage user accounts. We may
            process your information so you can create and log in to your account, as well as keep your
            account in working order.</p>
          <p>To deliver and facilitate delivery of services to the user. We may process your information to
            provide you with the requested service.</p>
          <p>To respond to user inquiries/offer support to users. We may process your information to respond
            to your inquiries and solve any potential issues you might have with the requested service.</p>
          <p>To send administrative information to you. We may process your information to send you details
            about our products and services, changes to our terms and policies, and other similar
            information.</p>
          <p>To request feedback. We may process your information when necessary to request feedback
            and to contact you about your use of our Services.</p>
          <p>To send you marketing and promotional communications. We may process the personal
            information you send to us for our marketing purposes, if this is in accordance with your
            marketing preferences. You can opt out of our marketing emails at any time. For more
            information, see 'WHAT ARE YOUR PRIVACY RIGHTS?' below.</p>
          <p>To deliver targeted advertising to you. We may process your information to develop and display
            personalised content and advertising tailored to your interests, location, and more.</p>
          <p>To protect our Services. We may process your information as part of our efforts to keep our
            Services safe and secure, including fraud monitoring and prevention.</p>
          <p>To identify usage trends. We may process information about how you use our Services to better
            understand how they are being used so we can improve them.</p>
          <p>To determine the effectiveness of our marketing and promotional campaigns. We may process
            your information to better understand how to provide marketing and promotional campaigns that
            are most relevant to you</p>
          <p>To comply with our legal obligations. We may process your information to comply with our legal
            obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6',  }}>
            In Short: We may share information in specific situations described in this section and/or with
            the following third parties.
          </p>
          <p>Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with
            third-party vendors, service providers, contractors, or agents ('third parties') who perform
            services for us or on our behalf and require access to such information to do that work. We have
            contracts in place with our third parties, which are designed to help safeguard your personal
            information. This means that they cannot do anything with your personal information unless we
            have instructed them to do it. They will also not share your personal information with any
            organisation apart from us. They also commit to protect the data they hold on our behalf and to
            retain it for the period we instruct.</p>
          <p>The third parties we may share personal information with are as follows:</p>
          <p>Advertising, Direct Marketing, and Lead Generation</p>
          <p>Google Adsense</p>
          <p>We also may need to share your personal information in the following situations:</p>
          <p>Business Transfers. We may share or transfer your information in connection with, or during
            negotiations of, any merger, sale of company assets, financing. or acquisition of all or a portion
            of our business to another company.</p>
          <p>Affiliates. We may share your information with our affiliates, in which case we will require those
            affiliates to honour this Privacy Notice. Affiliates include our parent company and any
            subsidiaries, joint venture partners, or other companies that we control or that are under
            common control with us.</p>
          <p>• Business Partners. We may share your information with our business partners to offer you
            certain products, services, or promotions.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
            In Short: We may use cookies and other tracking technologies to collect and store your
            information
          </p>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather
            information when you interact with our Services. Some online tracking technologies help us
            maintain the security of our Services and your account, prevent crashes, fix bugs, save your
            preferences, and assist with basic site functions.</p>
          <p>We also permit third parties and service providers to use online tracking technologies on our
            Services for analytics and advertising, including to help manage and display advertisements, to
            tailor advertisements to your interests, or to send abandoned shopping cart reminders
            (depending on your communication preferences). The third parties and service providers use
            their technology to provide advertising about products and services tailored to your interests
            which may appear either on our Services or on other websites.</p>
          <p>Specific information about how we use such technologies and how you can refuse certain
            cookies is set out in our Cookie Notice.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
            In Short: If you choose to register or log in to our Services using a social media account, we
            may have access to certain information about you.
          </p>
          <p>Our Services offer you the ability to register and log in using your third-party social media
            account details (like your Facebook or X logins). Where you choose to do this, we will receive
            certain profile information about you from your social media provider. The profile information we
            receive may vary depending on the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as other information you choose to
            make public on such a social media platform</p>
          <p>We will use the information we receive only for the purposes that are described in this Privacy
            Notice or that are otherwise made clear to you on the relevant Services. Please note that we do
            not control, and are not responsible for, other uses of your personal information by your
            third-party social media provider. We recommend that you review their privacy notice to
            understand how they collect, use, and share your personal information, and how you can set
            your privacy preferences on their sites and apps.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
            In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this
            Privacy Notice unless otherwise redired by law.
          </p>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set
            out in this Privacy Notice, unless a longer retention period is required or permitted by law (such

            as tax, accounting, or other legal requirements). No purpose in this notice will require us
            keeping your personal information for longer than</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we
            will either delete or anonymise such information, or, if this is not possible (for example, because
            your personal information has been stored in backup archives), then we will securely store your
            personal information and isolate it from any further processing until deletion is possible.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
            In Short: We do not knowingly collect data from or market to children under 18 years of age.
          </p>
          <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor
            do we knowingly sell such personal information. By using the Services, you represent that you
            are at least 18 or that you are the parent or guardian of such a minor and consent to such minor
            dependent's use of the Services. If we learn that personal information from users less than 18
            years of age has been collected, we will deactivate the account and take reasonable measures
            to promptly delete such data from our records. If you become aware of any datawe may have
            collected from children under age 18, please contact us at ancientsshadowsgames@gmail.com.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
            In Short: You may review, change, or terminate your account at any time, depending on your
            country, province, or state of residence.
          </p>
          <p>Withdrawing your consent: If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending on the applicable law, you
            have the right to withdraw your consent at any time. You can withdraw your consent at any time
            by contacting us by using the contact details provided in the section 'HOW CAN YOU
            CONTACT US ABOUT THIS NOTICE?" below.</p>
          <p>However, please note that this will not affect the lawfulness of the processing before its
            withdrawal nor, when applicable law allows, will it affect the processing of your personal
            information conducted in reliance on lawful processing grounds other than consent</p>
          <p>Opting out of marketing and promotional communications: You can unsubscribe from our
            marketing and promotional communications at any time by clicking on the unsubscribe link in
            the emails that we send, or by contacting us using the details provided in the section 'HOW CAN
            YOU CONTACT US ABOUT THIS NOTICE? below. You will then be removed from the
            marketing lists. However, we may still communicate with you for example, to send you
            service-related messages that are necessary for the administration and use of your account, to
            respond to service requests, or for other non-marketing purposes.</p>
          <p>Account Information</p>
          <p>If you would at any time like to review or change the information in your account or terminate
            your account, you can:</p>
          <p>Log in to your account settings and update your user account.</p>
          <p>Upon your request to terminate your account, we will deactivate or delete your account and
            information from our active databases. However, we may retain some information in our files to
            prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms
            and/or comply with applicable legal requirements.</p>
          <p>Cookies and similar technologies: Most Web browsers are set to accept cookies by default if
            you prefer, you can usually choose to set your browser to remove cookies and to reject cookies.
            If you choose to remove cookies or reject cookies, this could affect certain features or services
            of our Services</p>
          <p>If you have questions or comments about your privacy rights, you may email us at
            ancientsshadowsgame@gmail.com</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6',  }}>
            Most web browsers and some mobile operating systems and mobile applications include a
            Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and collected. At this stage, no
            uniform technology standard for recognising and implementing DNT signals has been finalised.
            As such, we do not currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If a standard for online
            tracking is adopted that we must follow in the future, we will inform you about that practice in a
            revised version of this Privacy Notice.
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',}}>10. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#555' }}>
            In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws
          </p>
          <p>We may update this Privacy Notice from time to time. The updated version will be indicated by
            an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this
            Privacy Notice, we may notify you either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this Privacy Notice frequently to
            be informed of how we are protecting your information.</p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.5em', marginTop: '30px', background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p style={{ fontSize: '1em', lineHeight: '1.6',}}>
            If you have questions or comments about this notice, you may email us at
            ancientsshadowsgames@gmail.com or contact us by post at
            Picacod Consultancy Services Pvt. Ltd Heavenly Plaza 11th Floor, Office NO: H11 Ernakulam,
            Kerala 682021
          </p>
          <p>India</p>
        </div>
        <div>
          Based on the applicable laws of your country, you may have the right to request access to the
          personal information we collect from you, details about how we have processed it, correct
          inaccuracies, or delete your personal information. You may also have the right to withdraw your
          consent to our processing of your personal Information. These rights may be limited in some
          circumstances by applicable law. To request to review, update, or delete your personal
          information, please fill out and submit a data subject access request.
        </div>
        <h2 style={{ fontSize: '1.5em', marginTop: '30px',  background: 'linear-gradient(to bottom right, #ffffff 0%, #b78846 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', }}>Contact Us</h2>
        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
          For any questions regarding this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:ancientsshadowsgames@gmail.com" style={{ color: '#007bff' }}>ancientsshadowsgames@gmail.com</a>
        </p>
      </div>
      
    </div>
    <Footer/>
   </>
    
  );
}

export default Privacy;
