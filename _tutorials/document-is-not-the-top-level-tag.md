---
ID: 390
post_title: '<code>Document</code> isn’t the top-level tag'
author: Stefan Brechbühl
post_excerpt: 'A PDF converted from Word contains the &lt;Part&gt; element as its top container. However, the semantically more suitable &lt;Document&gt; tag should be used as root element.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/document-is-not-the-top-level-tag/
published: true
post_date: 2018-04-20 04:57:44
tags:
  - manual testing
  - Microsoft Word
categories:
  - 01. Real content tagged
---
## Issue

A PDF converted from Word contains the `<Part>` element as its top container. However, the semantically more suitable `<Document>` tag should be used as root element.

Issue detected in exported PDFs from:

*   Microsoft Word 2013 for Windows

### PAC 2 warning

> Part structure element used as root element

### Failure Conditions of the Matterhorn Protocol

> **01-006** The structure type and attributes of a structure element are not semantically appropriate for the structure element. All of the existing structure types must be taken into account. (→ [manual testing][1])

## Manual approach in Acrobat

The topmost `<Part>` tag must be changed into the `<Document>` tag, see [“Change PDF tags in Acrobat”][2].

 [1]: https://accessible-pdf.info/en/glossary/#manual-testing
 [2]: https://accessible-pdf.info/en/basics/change-pdf-tags-in-acrobat/