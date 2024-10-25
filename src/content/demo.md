---
title: "HIE of One Demo"
description: "Step-by-step guides for patients and healthcare providers to test the HIE of One open-source, patient-controlled EHR system. Experience the integration of AI-assisted health data management in a decentralized framework."
image: "/images/logo.png"
datePublished: "2024-01-01"
layout: "page.njk"
permalink: "/demo/index.html"
nav: "Demo"
---

# Demo

## Patients

Experience how to set up your personal Electronic Health Record (EHR) and explore your health data with AI assistance.

1. Visit <a href="https://trustee.health" target="_blank">trustee.health</a>.

2. Enter your email address and click "New to Trustee".

   ![Step 2: Enter email](/images/screenshot-001.gif)

3. Verify your email address by clicking the "Verify" button in the email you receive.

   ![Step 3: Verify email](/images/screenshot-002.gif)

4. Return to The signup tab.

5. Create a passkey and login:
   **Mac users:** Passkeys are natively supported.
   **Windows users:** You must have Microsoft Hello or some form of biometric login enabled.

   ![Step 5: Create passkey and login](/images/screenshot-003.gif)

6. Enter your basic demographic information.

   ![Step 5: Enter name, DOB, PIN](/images/screenshot-004.gif)

7. Click "Submit", This will trigger the building of your initial blank EHR in NOSH.
   You will also be sent an email with a link to your EHR for easy recovery later.

8. In NOSH, click the Sync button (two circular arrows) and select a Synthetic Mass patient to import.

9. Click the Import Everything button (two up/down arrows) to add the contents to your Timeline.

10. Select "Launch MAIA" from the side menu.

11. Log into Trustee from MAIA.

12. Start asking AI questions about your Patient Timeline!

## Healthcare Providers

Discover how Trustee and NOSH offer an alternative for managing patient EHRs in your practice.

1. Follow steps 1-7 from the Patient Demo to set up a test account.
2. Explore the NOSH interface to familiarize yourself with the provider view of patient records.
3. Select "Launch MAIA" from the side menu to see how AI can assist in analyzing patient data.
4. Log into Trustee from MAIA.
5. Experiment with asking AI questions about the patient Timeline, considering how this could benefit your practice.

After trying the demo, we encourage you to [connect with us](mailto:hieofone.org) to discuss how HIE of One can benefit your practice and patients.

### Troubleshooting

If the MAIA app fails, try deleting these cookies:

- In SessionStorage: the value "gnap"
- In LocalStorage: the value "noshuri"

This should allow the app to relaunch properly from NOSH.
