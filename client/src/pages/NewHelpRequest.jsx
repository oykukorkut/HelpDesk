import React, { useState } from "react";
import "./NewHelpRequest.css";

const today = new Date().toISOString().split("T")[0];

const priorityOptions = ["Yüksek", "Orta", "Düşük"];
const unitOptions = [
  "Bilgi Teknolojileri (BT)", "İnsan Kaynakları", "Muhasebe", "Satın Alma", "Pazarlama", "Satış", "Operasyon", "Lojistik", "Hukuk", "Yönetim", "Teknik Servis", "Üretim", "Finans", "İdari İşler", "Müşteri Hizmetleri", "AR-GE", "Çağrı Merkezi", "Diğer"
];
const categoryOptions = [
  "Donanım", "Yazılım", "Ağ / İnternet", "Erişim / Yetkilendirme", "Hesap / Şifre", "Fatura / Muhasebe", "İnsan Kaynakları", "Satın Alma", "Teknik Destek", "Sistem Arızası", "Güncelleme Talebi", "Envanter Talebi", "Güvenlik", "Eğitim / Destek", "Diğer"
];

const NewHelpRequest = () => {
  const [form, setForm] = useState({
    konu: "",
    isim: "",
    detay: "",
    mail: "",
    tarih: today,
    oncelik: "",
    birim: "",
    kategori: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.konu.trim()) newErrors.konu = "Destek konusu zorunlu";
    if (!form.isim.trim()) newErrors.isim = "Destek ismi zorunlu";
    if (!form.detay.trim()) newErrors.detay = "Detay zorunlu";
    if (!/^([a-zA-Z0-9._%+-]+)@tachmax\.com\.tr$/.test(form.mail)) newErrors.mail = "Sadece @tachmax.com.tr mail adresi kabul edilir";
    if (!form.tarih || form.tarih < today) newErrors.tarih = "Bugün veya sonrası bir tarih seçin";
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Destek talebiniz kaydedildi!");
    }
  };

  return (
    <div className="page-bg">
      <div className="white-box">
        <h1 className="center-title">Destek Talebi Oluştur</h1>
        <div className="form-wrapper">
          <form className="help-form left-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Destek Konusu</label>
              <input type="text" name="konu" value={form.konu} onChange={handleChange} className={`input-box${errors.konu ? " input-error" : ""}`} />
              {errors.konu && <span className="error-text">{errors.konu}</span>}
            </div>
            <div className="form-row">
              <label> Talep Sahibi (Ad Soyad)</label>
              <input type="text" name="isim" value={form.isim} onChange={handleChange} className={`input-box${errors.isim ? " input-error" : ""}`} />
              {errors.isim && <span className="error-text">{errors.isim}</span>}
            </div>
            <div className="form-row">
              <label>Detay</label>
              <textarea name="detay" value={form.detay} onChange={handleChange} rows={4} className={`input-box${errors.detay ? " input-error" : ""}`} />
              {errors.detay && <span className="error-text">{errors.detay}</span>}
            </div>
            <div className="form-row">
              <label>Mail</label>
              <input type="email" name="mail" value={form.mail} onChange={handleChange} className={`input-box${errors.mail ? " input-error" : ""}`} />
              {errors.mail && <span className="error-text">{errors.mail}</span>}
            </div>
          </form>
          <div className="right-date-container">
            <div className="form-row">
              <label>Tarih</label>
              <input type="date" name="tarih" value={form.tarih} onChange={handleChange} min={today} className={`input-box${errors.tarih ? " input-error" : ""}`} />
              {errors.tarih && <span className="error-text">{errors.tarih}</span>}
            </div>
            <div className="form-row">
              <label>Öncelik</label>
              <select name="oncelik" value={form.oncelik} onChange={handleChange} className="input-box">
                <option value="">Seçiniz</option>
                <option value="Yüksek">Yüksek</option>
                <option value="Orta">Orta</option>
                <option value="Düşük">Düşük</option>
              </select>
            </div>
            <div className="form-row">
              <label>Birim</label>
              <select name="birim" value={form.birim} onChange={handleChange} className="input-box">
                <option value="">Seçiniz</option>
                <option>Bilgi Teknolojileri (BT)</option>
                <option>İnsan Kaynakları</option>
                <option>Muhasebe</option>
                <option>Satın Alma</option>
                <option>Pazarlama</option>
                <option>Satış</option>
                <option>Operasyon</option>
                <option>Lojistik</option>
                <option>Hukuk</option>
                <option>Yönetim</option>
                <option>Teknik Servis</option>
                <option>Üretim</option>
                <option>Finans</option>
                <option>İdari İşler</option>
                <option>Müşteri Hizmetleri</option>
                <option>AR-GE</option>
                <option>Çağrı Merkezi</option>
                <option>Diğer</option>
              </select>
            </div>
            <div className="form-row">
              <label>Kategori</label>
              <select name="kategori" value={form.kategori || ""} onChange={handleChange} className="input-box">
                <option value="">Seçiniz</option>
                <option>Donanım</option>
                <option>Yazılım</option>
                <option>Ağ / İnternet</option>
                <option>Erişim / Yetkilendirme</option>
                <option>Hesap / Şifre</option>
                <option>Fatura / Muhasebe</option>
                <option>İnsan Kaynakları</option>
                <option>Satın Alma</option>
                <option>Teknik Destek</option>
                <option>Sistem Arızası</option>
                <option>Güncelleme Talebi</option>
                <option>Envanter Talebi</option>
                <option>Güvenlik</option>
                <option>Eğitim / Destek</option>
                <option>Diğer</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">Kaydet</button>
              <button type="button" className="cancel-btn" onClick={() => window.history.back()}>İptal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHelpRequest; 