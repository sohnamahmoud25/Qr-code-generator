document.getElementById('generateBtn').addEventListener('click', function() {
    const qrText = document.getElementById('qrText').value;
    if (qrText.trim() === "") {
        alert("Please enter some text or URL to generate QR code.");
        return;
    }

    // Clear the previous QR code
    document.getElementById('qrcode').innerHTML = "";

    // Generate the new QR code
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: qrText,
        width: 128,
        height: 128,
    });
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const qrCodeCanvas = document.querySelector('#qrcode canvas');
    if (qrCodeCanvas) {
        const img = qrCodeCanvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = img;
        link.download = 'qrcode_by_Sohan.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Please generate a QR code first.");
    }
});
