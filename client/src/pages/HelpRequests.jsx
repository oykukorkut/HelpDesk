import React from "react";
import "./HelpDeskList.css";
import "./HelpRequests.css";
import { useNavigate } from "react-router-dom";

const HelpRequests = () => {
  const navigate = useNavigate();
  return (
    <div className="page-bg">
      <div className="white-box help-requests-box">
        <div className="help-requests-header-row">
          <h1 className="center-title">Destek Taleplerim</h1>
          <button className="new-help-btn help-requests-btn" onClick={() => navigate("/new-help-request")}>
            <span className="plus-circle">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="2" />
                <line x1="16" y1="10" x2="16" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="10" y1="16" x2="22" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="new-help-btn-text">Yeni Destek Talebi</span>
          </button>
        </div>
        <div className="welcome-message">
          Hoş geldin 🎉 <b>Fulya</b>. Aşağıda size ait destek taleplerini görüntüleyebilirsiniz.
        </div>
        <h2 className="sub-title">Destek taleplerimin listesi</h2>
        <div className="support-list-container">
          <table className="support-list-table">
            <thead>
              <tr>
                <th>Destek Konusu</th>
                <th>Detay</th>
                <th>Öncelik</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Giriş Sorunu</td>
                <td>Sisteme giriş yapamıyorum.</td>
                <td><span className="priority-badge priority-high">Yüksek</span></td>
                <td>Açık</td>
              </tr>
              <tr>
                <td>Şifre Sıfırlama</td>
                <td>Şifremi unuttum.</td>
                <td><span className="priority-badge priority-medium">Orta</span></td>
                <td>Çözüldü</td>
              </tr>
              <tr>
                <td>Fatura Hatası</td>
                <td>Yanlış fatura kesilmiş.</td>
                <td><span className="priority-badge priority-low">Düşük</span></td>
                <td>Beklemede</td>
              </tr>
              <tr>
                <td>Sunucu Hatası</td>
                <td>Sunucuya erişemiyorum.</td>
                <td><span className="priority-badge priority-high">Yüksek</span></td>
                <td>Açık</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HelpRequests; 