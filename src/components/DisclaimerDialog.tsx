
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

interface DisclaimerDialogProps {
  onAccept: () => void;
}

const DisclaimerDialog: React.FC<DisclaimerDialogProps> = ({ onAccept }) => {
  const [accepted, setAccepted] = React.useState(false);

  const handleSubmit = () => {
    if (!accepted) {
      toast("Please accept the terms to continue");
      return;
    }
    onAccept();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">TuringFin Carbon Cal – Legal Disclaimer</h2>
        <ScrollArea className="h-[60vh] mb-6 pr-4">
          <div className="space-y-6 text-sm text-gray-600">
            <p className="font-medium">Copyright © 2025 TuringFin. All rights reserved.</p>
            <p>
              TuringFin Carbon Cal is a product of TuringFin. Portions of the site's core framework are hosted under 
              https://preview--furry-friends-paradise-shop.lovable.app/. "TuringFin," "TuringFin Carbon Cal," and 
              associated logos are trademarks of TuringFin and may not be reproduced without written permission.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Informational Purpose Only</h3>
              <p>
                TuringFin Carbon Cal is provided solely for general information and illustrative estimation. 
                Nothing on this site constitutes legal, financial, investment, or environmental-compliance advice. 
                Always seek qualified professional guidance before making decisions based on carbon-credit estimates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Limitations & Considerations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Estimates, not certifications: Results generated are indicative only and do not replace professional carbon-credit verification under recognized offset standards.</li>
                <li>Generalized emission factors: Calculations rely on widely published emission factors and may not match conditions in your jurisdiction, industry, or specific project.</li>
                <li>Market volatility: Carbon-credit prices are highly variable; present values can change rapidly and may differ from market reality at the time of transaction.</li>
                <li>Project eligibility: Credit issuance depends on additionality, permanence, leakage, verification protocols, and other criteria set by standard-setting bodies.</li>
                <li>Data accuracy: Outputs are only as reliable as the inputs provided. TuringFin cannot validate user-supplied data.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. No Warranty</h3>
              <p>
                TuringFin Carbon Cal is provided "as is" and "as available." TuringFin makes no representations 
                or warranties—express or implied—about the accuracy, completeness, or suitability of any information, 
                and disclaims all warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, TuringFin, its affiliates, and their directors, officers, 
                employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or 
                punitive damages arising out of or relating to your use of, or inability to use, TuringFin Carbon Cal, 
                even if advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Third-Party Links & Hosting</h3>
              <p>
                The site may contain links to, or be partially hosted on, third-party platforms (including the preview 
                domain above). TuringFin is not responsible for the content, security, or practices of any third-party sites.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Intellectual Property</h3>
              <p>
                All content, code, graphics, and data compilations on this site are the exclusive property of TuringFin 
                unless otherwise noted. Unauthorized use, reproduction, or distribution is strictly prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Updates</h3>
              <p>
                TuringFin reserves the right to amend this disclaimer at any time without notice. Continued use of 
                TuringFin Carbon Cal after changes take effect constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Data Privacy & Information Protection</h3>
              <p className="font-medium mb-2">Anonymous by design: TuringFin Carbon Cal does not request or deliberately collect personal names, e-mail addresses, company identifiers, or any other personally identifiable information (PII).</p>
              
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Minimal data collection:</strong> We log only non-identifiable usage metrics—such as emission inputs, 
                  calculated results, and basic interaction data—to monitor performance, improve accuracy, and enhance user experience.
                </li>
                <li>
                  <strong>Aggregated storage:</strong> All records are retained solely in aggregated, hashed, or otherwise 
                  anonymised form so that individual users cannot be re-identified.
                </li>
                <li>
                  <strong>No commercial sharing:</strong> TuringFin does not sell or rent usage data. Aggregated statistics 
                  may be shared with research partners or regulators, or disclosed only when legally required.
                </li>
                <li>
                  <strong>Retention and deletion:</strong> Raw, non-identifiable logs are either purged or anonymised within a 
                  limited period after collection. Aggregated analytics may be retained for historical benchmarking. Users may 
                  request deletion of any residual raw data linked to their session.
                </li>
                <li>
                  <strong>User diligence:</strong> Please avoid entering PII in any free-text fields. If such information is 
                  provided inadvertently, it may be automatically redacted or removed in line with our data-minimization policy.
                </li>
              </ul>
              
              <p>
                All other sections of the disclaimer remain unchanged. By continuing to use TuringFin Carbon Cal, you acknowledge 
                and agree to this Data Privacy & Information Protection statement along with the broader Legal Disclaimer.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the terms of this agreement
            </label>
          </div>

          <Button 
            onClick={handleSubmit}
            className="w-full"
            size="lg"
          >
            Enter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DisclaimerDialog;

