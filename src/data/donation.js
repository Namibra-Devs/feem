/**
 * Donation details for FEEM (Female Empowerment Initiative)
 *
 * NOTE: As required, all account numbers and phone numbers are left as clear TODO
 * placeholders for organization administrators to fill in. NO numbers are invented.
 */

export const donationDetails = {
  bank: {
    accountName: "TODO: Female Empowerment Initiative",
    bankName: "TODO: [Bank Name, e.g. GCB Bank / Stanbic Bank / Ecobank]",
    branch: "TODO: [Branch Name, e.g. Cape Coast / Accra Main]",
    accountNumber: "TODO: [Add Official Bank Account Number Here]",
    swiftCode: "TODO: [Add SWIFT / BIC Code For International Wires]",
    currency: "GH₵ / USD",
    instructions: "Please use your full name or donation reference in the transfer remarks."
  },
  mobileMoney: [
    {
      network: "MTN Mobile Money (MoMo)",
      accountName: "TODO: Female Empowerment Initiative",
      merchantIdOrNumber: "TODO: [Add Official MTN MoMo Number or Merchant ID]",
      shortcode: "TODO: [Add Dial Code, e.g. *170# or Merchant Code]",
      instructions: "Send via Mobile Money and quote your name as the reference."
    },
    {
      network: "Telecel Cash",
      accountName: "TODO: Female Empowerment Initiative",
      merchantIdOrNumber: "TODO: [Add Official Telecel Cash Number]",
      shortcode: "TODO: [Add Dial Code, e.g. *110# or Merchant Code]",
      instructions: "Transfer to registered Telecel Cash line with reference."
    }
  ],
  whereYourGiftGoes: [
    {
      title: "Educational Support & Scholarships",
      description: "Investing in women especially in their education, tuition assistance, books, and essential school supplies so girls stay in school and excel academically.",
      metricPlaceholder: "TODO: [e.g. GH₵ 250 supports a girl's learning materials for a term]"
    },
    {
      title: "Pads for Progress (Menstrual Dignity)",
      description: "Supporting dignity and health—one pad at a time, providing sanitary products and menstrual hygiene education to end period poverty in schools.",
      metricPlaceholder: "TODO: [e.g. GH₵ 100 provides sanitary kits and education for 5 girls]"
    },
    {
      title: "Crafting Confidence & Livelihood Skills",
      description: "Empowering girls and women with creative, practical skills in soap and bead making—fostering self-reliance and community micro-enterprise.",
      metricPlaceholder: "TODO: [e.g. GH₵ 500 funds vocational materials for a training cohort]"
    },
    {
      title: "Community Outreach & Safe Spaces",
      description: "Reaching underserved rural communities like Feo in the Bongo District with health education, anti-violence advocacy, and cognitive transformation.",
      metricPlaceholder: "TODO: [e.g. Funds community workshops and mentor travel]"
    }
  ],
  privacyNote: "Privacy Note: FEEM is deeply committed to protecting your privacy. All donor details submitted via the 'I have donated' confirmation form are treated with strict confidentiality, securely routed to our administrative team, and never shared or sold to third parties. We do not collect or store card numbers or banking passwords on this website."
};

export default donationDetails;

