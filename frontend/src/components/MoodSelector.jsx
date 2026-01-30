const MOODS = ['happy', 'sad', 'chill', 'energetic', 'focused'];

export default function MoodSelector({ selectedMood, onSelect }) {
  return (
    <div className="mood-selector">
      <h3>How are you feeling?</h3>
      <div className="mood-buttons">
        {MOODS.map((mood) => (
          <button
            key={mood}
            type="button"
            className={`mood-btn ${selectedMood === mood ? 'active' : ''}`}
            onClick={() => onSelect(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
