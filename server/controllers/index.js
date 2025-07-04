// Ana controller fonksiyonları
const testController = (req, res) => {
  res.json({ message: 'Controller çalışıyor!' });
};

const homeController = (req, res) => {
  res.json({ message: 'Help Desk Backend API' });
};

module.exports = {
  testController,
  homeController
}; 