'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, QrCode as QrCodeIcon, CheckCircle } from 'lucide-react';
import {QRCodeCanvas} from 'qrcode.react'; // Import qrcode.react
import jsPDF from 'jspdf'; // Import jsPDF
import html2canvas from 'html2canvas'; // Import html2canvas

function QRCodeGeneratorPage() {
    const router = useRouter();
    const [qrValue, setQrValue] = useState('https://govibe.com/menu'); // Default QR code value
    const [input, setInput] = useState(''); // State for the input field
    const [showSuccess, setShowSuccess] = useState(false); // State for success message
    const qrCodeRef = useRef<HTMLDivElement>(null); // Ref to the QR code container

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => setShowSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);

    const handleGenerateQR = () => {
        if (input.trim()) {
            setQrValue(input.trim());
        } else {
            setQrValue('https://govibe.com/menu'); // Fallback to default if input is empty
        }
    };

    const handleDownloadPDF = async () => {
        if (qrCodeRef.current) {
            setShowSuccess(false); // Hide previous success message
            const canvas = await html2canvas(qrCodeRef.current, { scale: 2 }); // Scale for better resolution
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' for portrait, 'mm' for units, 'a4' for size

            const imgWidth = 100; // QR code image width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

            const x = (pdf.internal.pageSize.getWidth() - imgWidth) / 2; // Center horizontally
            const y = 50; // Y position for the QR code

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);

            // Add text below the QR code
            pdf.setFontSize(12);
            pdf.text('Scan this QR code to view our menu!', pdf.internal.pageSize.getWidth() / 2, y + imgHeight + 20, { align: 'center' });
            pdf.text(`(Content: ${qrValue})`, pdf.internal.pageSize.getWidth() / 2, y + imgHeight + 28, { align: 'center' });


            pdf.save('menu_qrcode.pdf');
            setShowSuccess(true); // Show success message
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <div className='mx-auto w-[90%] max-w-2xl py-8'>
                <div className="flex items-center mb-8">
                    <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                        <ArrowLeft size={24} className="text-gray-700" />
                    </button>
                    <h1 className='flex-grow text-center text-2xl text-gray-800 font-semibold'>
                        Generate QR Code
                    </h1>
                    <div className="w-8"></div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                    <div>
                        <label htmlFor="qrInput" className="block text-sm font-medium text-gray-700 mb-2">
                            Enter URL or Text for QR Code
                        </label>
                        <input
                            id="qrInput"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="e.g., https://yourrestaurant.com/menu"
                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45]"
                        />
                    </div>

                    <button
                        onClick={handleGenerateQR}
                        className="w-full bg-[#3B0A45] text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all cursor-pointer"
                    >
                        <QrCodeIcon size={20} />
                        Generate QR Code
                    </button>

                    <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg border border-gray-200 min-h-[250px]">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your QR Code</h3>
                        <div ref={qrCodeRef} className="p-4 bg-white rounded-lg shadow-inner">
                            <QRCodeCanvas
                                value={qrValue}
                                size={200}
                                level="H" // High error correction level
                                fgColor="#000000"
                                bgColor="#ffffff"
                                imageSettings={{
                                    src: '', // Optional: Add a logo here if desired
                                    x: undefined,
                                    y: undefined,
                                    height: 0,
                                    width: 0,
                                    excavate: true,
                                }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-4 break-all text-center max-w-[200px]">
                            {qrValue}
                        </p>
                    </div>

                    <button
                        onClick={handleDownloadPDF}
                        className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-3 hover:bg-green-700 transition-all cursor-pointer"
                    >
                        <Download size={20} />
                        Download as PDF
                    </button>

                    {showSuccess && (
                        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center justify-center gap-2">
                            <CheckCircle size={20} />
                            <span>PDF downloaded successfully!</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QRCodeGeneratorPage;