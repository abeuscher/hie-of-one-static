---
title: "HIE of One Demo"
description: "Step-by-step guides for patients and Clinicians  to test the HIE of One open-source, patient-controlled EHR system. Experience the integration of AI-assisted health data management in a decentralized framework."
image: "/images/logo.png"
datePublished: "2024-01-01"
layout: "page.njk"
permalink: "/demo/index.html"
nav: "Try It Now"
tags: ["header"]
---

<div class="demo-content">

# Demo

1. Visit <a href="https://trustee.health" target="_blank">trustee.health</a>.

2. Enter your email address and click "New to Trustee".

   ![Step 2: Enter email](/images/screenshot-001.gif)

3. Verify your email address by clicking the "Verify" button in the email you receive. Return to The signup tab when you are done.

   ![Step 3: Verify email](/images/screenshot-002.gif)

4. Create a passkey and login:

   - **Mac users:** Passkeys are natively supported.
   - **Windows users:** You must have Microsoft Hello or some form of biometric login enabled.

   ![Step 4: Create Passkey](/images/screenshot-003.gif)

5. Enter your basic demographic information.

   ![Step 5: Enter name, DOB, PIN](/images/screenshot-006.gif)

6. Click "Submit", This will trigger the building of your initial blank EHR in NOSH.
   You will also be sent an email with a link to your EHR for easy recovery later.

   ![Step 6: Submit info to NOSH](/images/screenshot-007.gif)

7. In NOSH, click the Sync button (two circular arrows) and select a Synthetic Mass patient to import. Click the Import Everything button to add the contents to your Timeline.

   ![Step 7: Import synthetic records](/images/screenshot-008.gif)

8. Select "Launch MAIA" from the side menu.

   ![Step 8: Launch MAIA](/images/screenshot-009.gif)

9. Log into Trustee from MAIA. This will download your patient timeline from NOSH into the chat. You can now ask the AI questions about the patient timeline.

   ![Step 9: Interact with MAIA](/images/screenshot-010.gif)

10. When you are done, you can save your results locally or back into your EHR from NOSH. In NOSH, this encounter shows up as a timeline event like any other interaction.

    ![Step 10: Save back to timeline](/images/screenshot-011.gif)

### Troubleshooting

If the MAIA app fails, try deleting these cookies:

- In SessionStorage: the value "gnap"
- In LocalStorage: the value "noshuri"

This should allow the app to relaunch properly from NOSH.

</div>
