// HelpDeskList.jsx
import React, { useState } from "react";
import "./HelpDeskList.css";
import addButton from "../assets/images/addButton.svg";
import { useNavigate } from "react-router-dom";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="2" />
    <line x1="13" y1="13" x2="17" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const dummyTickets = [
  {
    konu: "Giriş Sorunu",
    isim: "Ahmet Yılmaz",
    detay: "Sisteme giriş yapamıyorum.",
    mail: "ahmet@mail.com",
    tarih: "2024-06-01",
    oncelik: "Yüksek",
    durum: "Açık",
    kategori: "Teknik",
    birim: "Destek"
  },
  {
    konu: "Şifre Sıfırlama",
    isim: "Ayşe Demir",
    detay: "Şifremi unuttum.",
    mail: "ayse@mail.com",
    tarih: "2024-06-02",
    oncelik: "Orta",
    durum: "Çözüldü",
    kategori: "Hesap",
    birim: "Müşteri Hizmetleri"
  },
  {
    konu: "Fatura Hatası",
    isim: "Mehmet Kaya",
    detay: "Yanlış fatura kesilmiş.",
    mail: "mehmet@mail.com",
    tarih: "2024-06-03",
    oncelik: "Düşük",
    durum: "Beklemede",
    kategori: "Finans",
    birim: "Muhasebe"
  }
];

const PriorityBadge = ({ level }) => {
  let className = "priority-badge ";
  if (level === "Yüksek") className += "priority-high";
  else if (level === "Orta") className += "priority-medium";
  else if (level === "Düşük") className += "priority-low";
  return <span className={className}>{level}</span>;
};

const priorityOptions = ["Tümü", "Yüksek", "Orta", "Düşük"];
const statusOptions = ["Tümü", "Açık", "Çözüldü", "Beklemede"];
const categoryOptions = [
  "Tümü",
  "Donanım", "Yazılım", "Ağ / İnternet", "Erişim / Yetkilendirme", "Hesap / Şifre", "Fatura / Muhasebe", "İnsan Kaynakları", "Satın Alma", "Teknik Destek", "Sistem Arızası", "Güncelleme Talebi", "Envanter Talebi", "Güvenlik", "Eğitim / Destek", "Diğer"
];
const unitOptions = [
  "Tümü",
  "Bilgi Teknolojileri (BT)", "İnsan Kaynakları", "Muhasebe", "Satın Alma", "Pazarlama", "Satış", "Operasyon", "Lojistik", "Hukuk", "Yönetim", "Teknik Servis", "Üretim", "Finans", "İdari İşler", "Müşteri Hizmetleri", "AR-GE", "Çağrı Merkezi", "Diğer"
];
const sortOptions = [
  { value: "date-asc", label: "Tarihe Göre (Artan)" },
  { value: "date-desc", label: "Tarihe Göre (Azalan)" },
  { value: "priority-desc", label: "Öncelik (Yüksekten Düşüğe)" }
];

const TicketModal = ({ ticket, onClose, onSave }) => {
  const [priority, setPriority] = useState(ticket?.oncelik || "");
  const [status, setStatus] = useState(ticket?.durum || "");
  if (!ticket) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Destek Talebi Detayı</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-details">
          <p><b>Konu:</b> {ticket.konu}</p>
          <p><b>Talep Sahibi:</b> {ticket.isim}</p>
          <p><b>Detay:</b> {ticket.detay}</p>
          <p><b>Mail:</b> {ticket.mail}</p>
          <p><b>Tarih:</b> {ticket.tarih}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <b>Öncelik:</b>
            <select value={priority} onChange={e => setPriority(e.target.value)} style={{ fontWeight: 600, borderRadius: 8, padding: '4px 12px', border: '1.5px solid #e0e4ea', color: '#222' }}>
              <option value="Yüksek">Yüksek</option>
              <option value="Orta">Orta</option>
              <option value="Düşük">Düşük</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
            <b>Durum:</b>
            <select value={status} onChange={e => setStatus(e.target.value)} style={{ fontWeight: 600, borderRadius: 8, padding: '4px 12px', border: '1.5px solid #e0e4ea', color: '#222' }}>
              <option value="Açık">Açık</option>
              <option value="Çözüldü">Çözüldü</option>
              <option value="Beklemede">Beklemede</option>
            </select>
          </div>
          <p><b>Kategori:</b> {ticket.kategori}</p>
          <p><b>Birim:</b> {ticket.birim}</p>
        </div>
        <button className="modal-save-btn" onClick={() => onSave(priority, status)} style={{ marginTop: 18, padding: '10px 28px', background: '#0A2FA4', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Kaydet</button>
      </div>
    </div>
  );
};

const HelpDeskList = () => {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const handleSave = (priority, status) => {
    alert(`Yeni Öncelik: ${priority}\nYeni Durum: ${status}`);
    setSelectedTicket(null);
  };
  return (
    <div className="page-bg">
      <div className="white-box">
        <h1 className="center-title">Destek Talep Listesi</h1>
        <div className="search-bar-row">
          <input type="text" className="search-input" placeholder="E-posta ile ara..." />
          <button className="search-btn">
            <SearchIcon />
            <span className="search-btn-text">Arama</span>
          </button>
        </div>

        <div className="filter-section">
          <span className="filter-label">Öncelik</span>
          <span className="filter-label">Durum</span>
          <span className="filter-label">Kategori</span>
          <span className="filter-label">Birim</span>
          <span className="filter-label">Tarih Aralığı</span>
          <span className="filter-label">Sıralama</span>

          <select className="filter-dropdown">
            {priorityOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select className="filter-dropdown">
            {statusOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select className="filter-dropdown">
            {categoryOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select className="filter-dropdown">
            {unitOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <div className="date-range-group">
            <input type="date" className="date-input" />
            <span className="date-range-separator">-</span>
            <input type="date" className="date-input" />
          </div>
          <select className="sort-dropdown">
            {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>

        <div className="support-list-outer-container">
          <div className="table-container">
            <table className="support-table">
              <thead>
                <tr>
                  <th>Destek Konusu</th>
                  <th>Talep Sahibi (Ad Soyad)</th>
                  <th>Detay</th>
                  <th>Mail</th>
                  <th>Tarih</th>
                  <th className="priority-col">Öncelik</th>
                  <th>Durum</th>
                  <th>Kategori</th>
                  <th>Birim</th>
                </tr>
              </thead>
              <tbody>
                {dummyTickets.map((ticket, idx) => (
                  <tr key={idx} onClick={() => setSelectedTicket(ticket)} style={{ cursor: "pointer" }}>
                    <td>{ticket.konu}</td>
                    <td>{ticket.isim}</td>
                    <td>{ticket.detay}</td>
                    <td>{ticket.mail}</td>
                    <td>{ticket.tarih}</td>
                    <td className="priority-col"><PriorityBadge level={ticket.oncelik} /></td>
                    <td>{ticket.durum}</td>
                    <td>{ticket.kategori}</td>
                    <td>{ticket.birim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <TicketModal ticket={selectedTicket} onClose={() => setSelectedTicket(null)} onSave={handleSave} />
      </div>
    </div>
  );
};

export default HelpDeskList;
