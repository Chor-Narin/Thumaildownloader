import React from 'react';

function Privacy({ isDark }: { isDark: boolean }) {
  return (
    <div className={`container mx-auto px-4 py-12 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Privacy Policy</h1>
        
        <div className="space-y-6">
          <p>
            At YoutubeThumbnailDownloader.com, accessible from https://www.youtubethumbnaildownloader.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by YoutubeThumbnailDownloader.com and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at relnoorain@gmail.com.
          </p>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Log Files</h2>
            <p>
              YoutubeThumbnailDownloader.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this, and it is part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser types, Internet Service Providers (ISPs), date and time stamps, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Cookies and Web Beacons</h2>
            <p>
              Like any other website, YoutubeThumbnailDownloader.com uses 'cookies.' These cookies are used to store information, including visitors' preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize users' experience by customizing our web page content based on visitors' browser types and/or other information.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-500 hover:underline">https://policies.google.com/technologies/ads</a>
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Third-party Privacy Policies</h2>
            <p>
              YoutubeThumbnailDownloader.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p className="mt-4">
              YoutubeThumbnailDownloader.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will do our best efforts to promptly remove such information from our records.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Online Privacy Policy Only</h2>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in YoutubeThumbnailDownloader.com. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>GDPR Compliance</h2>
            <p>
              Please note that if you are a resident of the European Union (EU) or European Economic Area (EEA), our data processing activities are in compliance with the General Data Protection Regulation (GDPR). By using our website and providing your personal information, you consent to the processing of your data as outlined in this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;