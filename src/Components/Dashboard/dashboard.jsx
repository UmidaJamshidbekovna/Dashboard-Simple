import { useState } from 'react';
import './Dashboard.css'
import Profile from '../Views/Profile';
import RecentTests from '../Views/RecentTests';
import Results from '../Views/Results';
import Balance from '../Views/Balance';
import Achievements from '../Views/Achievements';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="dashboard bg-white rounded">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 p-3 border-end">
            <ul className="list-unstyled fs-5">
              <li className="menu-item mb-3 p-2 rounded" onClick={() => setActiveTab('profile')}>
                <i className="bi bi-person me-2 fs-4"></i> Профиль
              </li>
              <li className="menu-item mb-3 p-2 rounded" onClick={() => setActiveTab('tests')}>
                <i className="bi bi-clock-history me-2 fs-4"></i> Последние тесты
              </li>
              <li className="menu-item mb-3 p-2 rounded"  onClick={() => setActiveTab('results')}>
                <i className="bi bi-bar-chart me-2 fs-4"></i> Результаты
              </li>
              <li className="menu-item mb-3 p-2 rounded"   onClick={() => setActiveTab('balance')}>
                <i className="bi bi-wallet2 me-2 fs-4"></i> Баланс/Мой тариф
              </li>
              <li className="menu-item mb-3 p-2 rounded" onClick={() => setActiveTab('achievements')}>
                <i className="bi bi-award me-2 fs-4"></i> Достижения
              </li>
            </ul>
          </div>

        
          <div className="col-8 p-3">
            {activeTab === 'profile' && <Profile />}
            {activeTab === 'tests' && <RecentTests />}
            {activeTab === 'results' && <Results />}
            {activeTab === 'balance' && <Balance />}
            {activeTab === 'achievements' && <Achievements />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
