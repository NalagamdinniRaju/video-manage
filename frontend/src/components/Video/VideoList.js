
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../App.css';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/videos', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setVideos(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError('Failed to load videos');
      toast.error('Failed to load videos');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading videos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="video-list-container">
      <div className="video-list-header">
        <h2>My Videos</h2>
        <Link to="/upload" className="upload-button">
          Upload New Video
        </Link>
      </div>

      {videos.length === 0 ? (
        <div className="no-videos">
          <p>No videos uploaded yet</p>
          <Link to="/upload" className="upload-link">
            Upload your first video
          </Link>
        </div>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <Link 
              to={`/video/${video._id}`} 
              key={video._id} 
              className="video-card"
            >
              <div className="video-thumbnail">
                <video>
                  <source src={`http://localhost:5000${video.url}`} type="video/mp4" />
                </video>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <span className="upload-date">
                  {new Date(video.createdAt).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoList;