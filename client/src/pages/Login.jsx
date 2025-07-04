import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('musteri');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Backend API'ye login isteği gönder
    console.log('Login attempt:', { ...formData, role });
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      setIsLoading(false);
      // TODO: Başarılı login sonrası yönlendirme
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Help Desk</h1>
          <p>Hesabınıza giriş yapın</p>
        </div>
        <div className="login-role-row">
          <span className="login-role-label">Giriş yap:</span>
          <div className="role-buttons small">
            <button
              type="button"
              className={role === 'musteri' ? 'role-btn selected small' : 'role-btn small'}
              onClick={() => setRole('musteri')}
            >
              Müşteri
            </button>
            <button
              type="button"
              className={role === 'destek' ? 'role-btn selected small' : 'role-btn small'}
              onClick={() => setRole('destek')}
            >
              Destek Personeli
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ornek@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 