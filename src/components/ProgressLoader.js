import { useEffect, useState } from "react";

const ProgressLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images);
    const total = images.length || 1;
    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      const percent = Math.min(Math.round((loaded / total) * 90), 90);
      setProgress(percent);
    };

    images.forEach((img) => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress);
      }
    });

    // Fonts loading
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setProgress(100);
        setTimeout(onComplete, 300);
      });
    } else {
      setProgress(100);
      setTimeout(onComplete, 300);
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", updateProgress);
        img.removeEventListener("error", updateProgress);
      });
    };
  }, [onComplete]);

  return (
    <div className="progress-loader">
      <div className="progress-box">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressLoader;
