---
post_title: '<em>Tags</em> in Word festlegen'
author: Stefan Brechbühl
published: false
layout: basics
tags:
  - Microsoft Word
categories: [ ]
---
Ein Dokument wird mithilfe von Überschriften mit unterschiedlicher Hierarchiestufe gegliedert, siehe dazu [„Strukturieren mithilfe von hierarchischen Überschriften“](https://accessible-pdf.info/de/basics/strukturieren-mithilfe-von-hierarchischen-ueberschriften/). 

Um die *PDF-Tags* bereits in Word festlegen zu können, müssen Absatzformatvorlagen konsequent eingesetzt werden. Der einfachste Weg ist die bereits existierenden Standardformatvorlagen *Überschrift 1*, *Überschrift 2*, etc. zu verwenden und sie je nach Bedürfnisse anzupassen. 

Wer eigene oder zusätzliche Formatvorlagen benötigt, muss dafür sorgen, dass innerhalb der Absatzeinstellungen die korrekte Gliederungsebene eingestellt ist. Diese steuert nämlich die Hierarchiestufe und generiert den vorgesehenen Überschriften-*Tag*. 

[![Das Ändern der Gliederungsebene in den Absatzformateinstellungen von Word.](https://accessible-pdf.info/wp/wp-content/uploads/word-gliederungsebene.gif)](https://accessible-pdf.info/wp/wp-content/uploads/word-gliederungsebene.gif)

Obwohl bis zu neun Ebenen definiert werden können, sollten nur die Ebenen 1–6 genutzt werden. Dies weil in PDF schlicht nicht mehr als sechs Überschriften-*Tags* existieren.

## Listen und Tabellen

Weitere Tags, welche automatisch beim PDF-Export generiert werden, sind Listen. Auch dies ist jedoch abhängig von der korrekten Verwendung der Formatierungswerkzeuge. Das heisst das Aufzählungszeichen und Nummerierungen nicht von Hand, sondern mit den entsprechenden Listenwerkzeuge erstellt werden müssen.

![Listen Werkzeuge in Word.](https://accessible-pdf.info/wp/wp-content/uploads/word-list.png)

Dasselbe gilt für die Tabellen – diese müssen ebenfalls mit den dafür vorgesehenen Werkzeugen erstellt werden. Wenn Tabelleninhalte mithilfe von Leerzeichen oder Tabulatoren visuell dargestellt werden, kann keine barrierefreie PDF-Ausgabe erzeugt werden.

## Exporteinstellung

Damit die gewünschten *Tags* beim PDF-Export erstellt werden, muss folgendes beachtet werden:

### Word für Windows

1. Wähle „Datei“ → „Exportieren“ → „PDF/XPS-Dokument“ erstellen 
2. Klicke auf „Optionen“
3. Aktiviere die Option „Dokumentstrukturtags für Barrierefreiheit“ falls diese nicht bereits aktiviert ist

### Word für Mac

1. Wähle „Ablage“ → „Speichern unter“
2. Wähle im Dropdown „Dateiformat“ die Option „PDF“
3. Aktiviere die Option „Optimal für elektronische Verteilung und Barrierefreiheit“