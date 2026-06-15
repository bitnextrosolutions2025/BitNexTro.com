import React from 'react'
import { Shield, Clock, CreditCard, AlertCircle, FileText, Mail } from 'lucide-react'

export default function Refund() {
  const policies = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Service Commitment",
      content: "Bitnextro Solutions Pvt Ltd believes in providing high-quality IT services and customer satisfaction. Payments made for services such as IT support, AMC, networking, CCTV, biometric solutions, or consultancy are generally non-refundable once the service has been initiated or delivered."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Cancellation Terms",
      content: "In case of service cancellation before the start of work, a refund may be considered after deducting applicable administrative and processing charges. No refunds will be provided for partially completed services, already delivered work, or services delayed due to client-side dependencies."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Hardware & Software",
      content: "Payments made for hardware, software licenses, subscriptions, or third-party products are non-refundable, as these are governed by the respective vendor's refund policies."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Processing Timeline",
      content: "If a refund is approved, it will be processed using the original mode of payment within 7–10 working days from the date of approval."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Request Submission",
      content: "Refund requests must be submitted in writing via email with valid payment and service details. Bitnextro Solutions Pvt Ltd reserves the right to accept or reject refund requests based on the nature of the service and terms agreed."
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-linear-to-r from-white via-slate-700 to-blue-900 text-slate-900 py-20 px-6 mt-3">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <Shield className="w-12 h-12 text-blue-200" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Refund Policy
          </h1>
          <p className="text-lg text-blue-100 text-center max-w-2xl mx-auto">
            Transparent guidelines for refunds at Bitnextro Solutions Pvt Ltd
          </p>
          <div className="mt-8 text-center">
            <span className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm">
              Last Updated: January 2025
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Commitment to You</h2>
          <p className="text-slate-600 leading-relaxed">
            At Bitnextro Solutions Pvt Ltd, we are dedicated to delivering exceptional IT services 
            and ensuring complete customer satisfaction. This policy outlines our refund guidelines 
            to maintain transparency and trust in our business relationships.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6 mb-12">
          {policies.map((policy, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 bg-linear-to-br from-blue-500 to-blue-100 text-slate-900 p-3 rounded-lg">
                  {policy.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {policy.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {policy.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-linear-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Notice</h3>
              <p className="text-amber-800 leading-relaxed">
                This Refund Policy may be updated from time to time without prior notice. 
                We recommend reviewing this page periodically to stay informed about our current policies.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-linear-to-br from-white to-blue-900 text-slate-900 rounded-2xl shadow-xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-4">
              <Mail className="w-10 h-10 text-blue-200 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Need Help with a Refund?</h2>
            <p className="text-blue-100 text-lg">
              Our support team is here to assist you with any refund-related queries
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-blue-200 text-sm mb-2">Email Address</p>
                <a 
                  href="mailto:support@bitnextro.com" 
                  className="text-xl font-semibold hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  support@bitnextro.com
                </a>
              </div>
              <div>
                <p className="text-blue-200 text-sm mb-2">Response Time</p>
                <p className="text-xl font-semibold">Within 24-48 hours</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-blue-100 text-sm">
                Please include your payment details, service information, and reason for refund 
                in your email for faster processing.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm">
            © 2025 Bitnextro Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  )
}
