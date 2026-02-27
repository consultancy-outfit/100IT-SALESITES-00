import React from 'react';
import { COMPANY_DETAILS } from '../components/Shared';

const Terms = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-12">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the provision of IT services by <strong>{COMPANY_DETAILS.name}</strong> ("the Company", "we", "us") to the client ("the Client", "you"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Information</h2>
            <p>
              {COMPANY_DETAILS.name} is a company registered in England and Wales.<br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}<br />
              <strong>Company Registration Number:</strong> {COMPANY_DETAILS.crn}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Services</h2>
            <p>
              The specific services to be provided will be outlined in a separate Statement of Work (SOW) or Service Level Agreement (SLA). We will perform the services with reasonable skill and care in accordance with industry standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (GBP) and are exclusive of VAT unless otherwise stated. Payment is due within 14 days of the invoice date. Late payments may incur interest at the rate of 8% above the Bank of England base rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company. The Client is granted a non-exclusive license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as such.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Limitation of Liability</h2>
            <p>
              The Company's total liability for any claim arising under these terms shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
