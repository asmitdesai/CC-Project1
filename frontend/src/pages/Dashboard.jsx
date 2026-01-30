import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import MoodSelector from '../components/MoodSelector';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (!selectedMood) {
      setTracks([]);
      setError('');
      return;
    }
    setLoading(true);
    setError('');
    api
      .get(`/music/${selectedMood}`)
      .then(({ data }) => setTracks(data.tracks || []))
      .catch((err) => setError(err.response?.data?.message || 'Failed to load music'))
      .finally(() => setLoading(false));
  }, [selectedMood]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>MoodTunes</h1>
        <div className="user-row">
          {user && <span className="user-name">Hi, {user.name}</span>}
          <button type="button" className="logout-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />

        {error && <p className="error">{error}</p>}
        {loading && <p className="loading">Loading tracks...</p>}

        {!loading && selectedMood && tracks.length > 0 && (
          <section className="tracks-section">
            <h2>Recommended for {selectedMood}</h2>
            <ul className="tracks-list">
              {tracks.map((track, i) => (
                <li key={i} className="track-item">
                  <span className="track-title">{track.title}</span>
                  <span className="track-artist">{track.artist}</span>
                  <span className="track-genre">{track.genre}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {!loading && selectedMood && tracks.length === 0 && !error && (
          <p className="no-tracks">No tracks found for this mood.</p>
        )}
      </main>
    </div>
  );
}
