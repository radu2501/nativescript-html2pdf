/*var PdfWriter = com.itextpdf.text.pdf.PdfWriter;
var XMLWorkerHelper = com.itextpdf.tool.xml.XMLWorkerHelper;
var Chunk = com.itextpdf.text.Chunk;*/
var jHtmlConvert = ro.nicoara.radu.html2pdf.HtmlToPdf.html2PdfFile;
var application;

exports.html2PdfFile = function(html, output) {
    application = require('application').android.context;
    jHtmlConvert(html, output);
    /*var javaStr = new java.lang.String(html);

    var doc = new PDFDocument();
    
    var inStr = new java.io.ByteArrayInputStream(javaStr.getBytes());
    var file = new java.io.File(output);

    try {
       file.createNewFile(); 
    } catch(e) { }
    

    var pdf = PdfWriter.getInstance(doc, new java.io.FileOutputStream(file));

    doc.doOpen();
    doc.newPage();
    doc.add(new Chunk(''));
    
    XMLWorkerHelper.getInstance().parseXHtml(pdf, doc, inStr);

    doc.doClose();
    inStr.close();*/
    broadcastFileScan(output);
}

/*var PDFDocument =  com.itextpdf.text.Document.extend({

    getSuper() {
        return this.super;
    },

    doOpen: function() {
        this.super.open = true;
        this.super.close = false;

        var listeners = this.super.listeners;
        for (var i=0; i<listeners.size(); i++) {
            var listener = listeners.get(i);
            listener.setPageSize(this.super.pageSize);
            listener.setMargins(this.super.marginLeft, this.super.marginRight,this.super.marginTop, this.super.marginBottom);
            listener.open();
        }
    },

    doClose: function() {
        
        var listeners = this.super.listeners;
        for (var i=0; i<listeners.size(); i++) {
            var listener = listeners.get(i);
            listener.close();
        }
        this.super.open = false;
        this.super.close = true;
    },

    isOpen: function() {
        return this.super.isOpen();
    }
});*/

function broadcastFileScan(filePath) {
    var scanIntent = new android.content.Intent(android.content.Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
    scanIntent.setData(android.net.Uri.fromFile(new java.io.File(filePath)));
    application.sendBroadcast(scanIntent);
}