// ===== ตั้งค่าแอป — แก้ไฟล์นี้ไฟล์เดียว =====
window.APP_CONFIG = {

  // URL ของ Google Apps Script Web App (ต้องลงท้าย /exec) — เว้นว่าง = โหมดทดลอง (เก็บลงเครื่อง)
  SUBMIT_URL: "https://script.google.com/macros/s/AKfycbwIZ2WfJGd8knGDlOt2qTOc9s5Vp2ivRP4uXN-Q0NiikLWBttQEz-F8sSjtfhV-Xenaeg/exec",

  // LIFF ID — ใส่เมื่อทำ LINE Login เสร็จ เพื่อให้ช่างล็อกอินด้วยบัญชี LINE อัตโนมัติ (เว้นว่าง = เลือกชื่อเอง)
  LIFF_ID: "",

  // ===== สีของแอป — เปลี่ยน brand สีเดียว เปลี่ยนทั้งแอป =====
  THEME: {
    brand:   "#F5620F",   // สีหลัก (หัว/ปุ่ม/แท็บ)
    onBrand: "#ffffff"    // สีตัวอักษรบนพื้นสีหลัก

    // ── พรีเซ็ตสำเร็จรูป: ก็อปค่าไปวางแทน brand/onBrand ด้านบน ──
    // แดงโกสิน   →  brand:"#C4271C"
    // น้ำเงินเท่  →  brand:"#1E3A8A"
    // เทาเข้ม-แดง →  brand:"#E0392B"
    // ส้มพลังงาน →  brand:"#F5620F"
  }
};
