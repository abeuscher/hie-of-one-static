---
title: "Developers"
description: "Information for developers interested in contributing to or building upon HIE of One's open-source healthcare projects"
image: "/images/logo.png"
datePublished: "2024-01-01"
layout: "page.njk"
permalink: "/developers/index.html"
nav: "Developers"
tags: ["header"]
---

# Developer Info

## Introduction

HIE of One is an open-source initiative aimed at creating a patient-controlled alternative to standard electronic health records. Our project emphasizes decentralization, sovereignty, and the integration of AI in healthcare data management. We welcome developers who share our vision of empowering patients and Clinicians through technology.

Our ecosystem consists of several key components:

1. Trustee Community: A GNAP Authorization Server
2. NOSH: A GNAP Resource Server and Electronic Health Record system

As a developer, you have the opportunity to contribute to these existing projects or build your own applications using our infrastructure.

## Getting Started

To begin working with HIE of One projects:

1. Choose a project to focus on.
2. Fork the respective repository on GitHub.
3. Set up your local development environment following the README instructions in each repo.
4. Familiarize yourself with the GNAP (Grant Negotiation and Authorization Protocol) as it's central to our architecture.

For those interested in creating their own Trustee Health Authorization Server:

1. Visit the [Trustee Community GitHub repository](https://github.com/HIEofOne/Trustee-Community).
2. Follow the installation instructions provided in the README.
3. Consider the specific healthcare use case you're addressing and how it fits within the HIE of One ecosystem.

## Repos

Here are the main repositories you can contribute to or build upon:

1. [Trustee Community](https://github.com/HIEofOne/Trustee-Community)

   - GNAP Authorization Server
   - Handles authentication and authorization for the HIE of One ecosystem

2. [NOSH](https://github.com/shihjay2/nosh3)

   - GNAP Resource Server and Electronic Health Record system
   - Manages and stores patient health data

3. [MAIA](https://github.com/abeuscher/vue-ai-example)

   - AI-assisted interface for interacting with health data
   - Demonstrates integration of OpenAI with Trustee Community and NOSH

4. [GNAP Client Support](https://github.com/hieofone/vue3-gnap)
   - Provides GNAP client functionality for Vue 3 applications

When working with these repositories, please adhere to the following guidelines:

- Respect patient privacy and data security in all contributions.
- Engage with the community through issues and pull requests.
- Consider the implications of AI in healthcare when developing new features, especially for MAIA.

We encourage you to explore these projects, contribute improvements, or build new applications that leverage our open-source infrastructure. If you have questions or need assistance, please don't hesitate to open an issue in the relevant repository or contact our development team.

## Architecture Diagram

<div id="diagram-container"></div>
