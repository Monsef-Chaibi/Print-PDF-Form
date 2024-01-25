document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 20; i++) {
        document.getElementById('in' + i).addEventListener('input', function() {
            document.getElementById('out' + i).textContent = this.value;
        });
    }
});
function printDiv() {
    var divContents = document.getElementById("print").innerHTML;
    var printWindow = window.open('', '', 'height=600, width=1000');

    // Include Tailwind CSS or other required styles
    printWindow.document.write(`
        <html>
            <head>
                <title>Print</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body dir="rtl">
                ${divContents}
            </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(function () {
        printWindow.print();
    }, 250); // Added delay to ensure styles are loaded
}
function generatePDF() {
    const formElement = document.getElementById('print');

    // Check if the form element exists
    if (formElement) {
        html2pdf(formElement, {
            margin: 5,
            filename: 'generated.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });
    } else {
        console.error('Form element not found.');
    }
}