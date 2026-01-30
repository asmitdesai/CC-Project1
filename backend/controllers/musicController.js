// Static mood -> music dataset (no external API)
const MOOD_MUSIC = {
  happy: [
    { title: 'Happy', artist: 'Pharrell Williams', genre: 'Pop' },
    { title: 'Can\'t Stop the Feeling!', artist: 'Justin Timberlake', genre: 'Pop' },
    { title: 'Good as Hell', artist: 'Lizzo', genre: 'Pop' },
    { title: 'Walking on Sunshine', artist: 'Katrina and the Waves', genre: 'Pop Rock' },
    { title: 'Uptown Funk', artist: 'Bruno Mars', genre: 'Funk Pop' },
  ],
  sad: [
    { title: 'Someone Like You', artist: 'Adele', genre: 'Pop Ballad' },
    { title: 'Fix You', artist: 'Coldplay', genre: 'Rock' },
    { title: 'The Scientist', artist: 'Coldplay', genre: 'Rock' },
    { title: 'All Too Well', artist: 'Taylor Swift', genre: 'Pop' },
    { title: 'Say Something', artist: 'A Great Big World', genre: 'Pop' },
  ],
  chill: [
    { title: 'Blinding Lights', artist: 'The Weeknd', genre: 'Synth Pop' },
    { title: 'Sunset Lover', artist: 'Petit Biscuit', genre: 'Electronic' },
    { title: 'Holocene', artist: 'Bon Iver', genre: 'Indie Folk' },
    { title: 'Breathe Me', artist: 'Sia', genre: 'Indie Pop' },
    { title: 'Riptide', artist: 'Vance Joy', genre: 'Indie Folk' },
  ],
  energetic: [
    { title: 'Thunder', artist: 'Imagine Dragons', genre: 'Rock' },
    { title: 'Believer', artist: 'Imagine Dragons', genre: 'Rock' },
    { title: 'Stronger', artist: 'Kanye West', genre: 'Hip Hop' },
    { title: 'Eye of the Tiger', artist: 'Survivor', genre: 'Rock' },
    { title: 'Lose Yourself', artist: 'Eminem', genre: 'Hip Hop' },
  ],
  focused: [
    { title: 'Weightless', artist: 'Marconi Union', genre: 'Ambient' },
    { title: 'Deep Focus', artist: 'Brain.fm', genre: 'Ambient' },
    { title: 'Study Music', artist: 'Chillhop', genre: 'Lo-fi' },
    { title: 'Concentration', artist: 'Focus At Will', genre: 'Classical' },
    { title: 'Flow State', artist: 'Liquid Mind', genre: 'New Age' },
  ],
};

const VALID_MOODS = Object.keys(MOOD_MUSIC);

// GET /api/music/:mood (protected)
const getMusicByMood = (req, res) => {
  const mood = (req.params.mood || '').toLowerCase().trim();
  if (!VALID_MOODS.includes(mood)) {
    return res.status(400).json({
      message: 'Invalid mood',
      validMoods: VALID_MOODS,
    });
  }
  res.json({ mood, tracks: MOOD_MUSIC[mood] });
};

module.exports = { getMusicByMood };
