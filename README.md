# nativescript-html2pdf
Allows easy conversion from HTML to PDF files.

## Installation
```
tns plugin install nativescript-html2pdf
```

## Usage

```
import { html2PdfFile } from 'nativescript-html2pdf';

let myHtml: string = '<p>Hello World</p>';

let pdfPath: string = 'fs.knownFolders.documents().getFile('myPdf.pdf').path;

html2PdfFile(myHtml, pdfPath);

//Your PDF file is now available at the specified path.
```
