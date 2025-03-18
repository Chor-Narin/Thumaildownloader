import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Download, Youtube, ImageDown, Sun, Moon } from 'lucide-react';
import Privacy from './pages/Privacy';

function AdUnit({ className }: { className?: string }) {
  return (
    <div className={`${className || ''} overflow-hidden`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="YOUR-CLIENT-ID"
        data-ad-slot="YOUR-AD-SLOT"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

type ThumbnailType = {
  quality: string;
  url: string;
  dimensions: string;
  resolution: string;
};

function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`mt-16 py-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                YouTube Thumbnail Downloader is a free tool that helps you download high-quality thumbnails from any YouTube video.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm space-y-2`}>
                <li>
                  <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm space-y-2`}>
                <li>
                  <a href="mailto:support@example.com" className="hover:underline">support@example.com</a>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">Contact Form</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <p>© {new Date().getFullYear()} YouTube Thumbnail Downloader. All rights reserved.</p>
            <p className="mt-2">
              This service is not affiliated with YouTube or Google Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home({ isDark }: { isDark: boolean }) {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnails, setThumbnails] = useState<ThumbnailType[] | null>(null);
  const [error, setError] = useState('');

  const extractVideoId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  const getThumbnails = () => {
    setError('');
    const videoId = extractVideoId(videoUrl);
    
    if (!videoId) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    const thumbnailsList: ThumbnailType[] = [
      {
        quality: 'HD Quality',
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        dimensions: '1280x720',
        resolution: 'HD'
      },
      {
        quality: 'SD Quality',
        url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        dimensions: '640x480',
        resolution: 'SD'
      },
      {
        quality: 'Normal Quality',
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        dimensions: '480x360',
        resolution: 'HQ'
      },
      {
        quality: 'Medium Quality',
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        dimensions: '320x180',
        resolution: 'MQ'
      },
      {
        quality: 'Low Quality',
        url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        dimensions: '120x90',
        resolution: 'LQ'
      }
    ];

    setThumbnails(thumbnailsList);
  };

  const downloadImage = async (thumbnail: ThumbnailType) => {
    try {
      const response = await fetch(thumbnail.url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `youtube-thumbnail-${thumbnail.resolution}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      setError('Failed to download image');
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Youtube className="w-12 h-12 text-red-500" />
              <h1 className="text-4xl font-bold">YouTube Thumbnail Downloader</h1>
            </div>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Download high-quality thumbnails from any YouTube video</p>
          </div>

          {/* Top Ad */}
          <AdUnit className={`mb-8 min-h-[90px] rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} />

          {/* Input Section */}
          <div className={`rounded-lg p-6 mb-8 shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex gap-4">
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste YouTube video URL here..."
                className={`flex-1 px-4 py-3 rounded-lg ${isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                onClick={getThumbnails}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                <ImageDown className="w-5 h-5" />
                Get Thumbnails
              </button>
            </div>
            {error && (
              <p className="mt-3 text-red-400">{error}</p>
            )}
          </div>

          {/* Sidebar Ad */}
          <div className="lg:flex gap-8">
            <div className="flex-1">
              {/* Thumbnails Grid */}
              {thumbnails && (
                <div className="grid grid-cols-1 gap-6">
                  {thumbnails.map((thumbnail) => (
                    <div key={thumbnail.quality} className={`rounded-lg overflow-hidden shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/3">
                          <img
                            src={thumbnail.url}
                            alt={`${thumbnail.quality} thumbnail`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.parentElement?.parentElement?.parentElement?.classList.add('hidden');
                            }}
                          />
                        </div>
                        <div className="md:w-1/3 p-6 flex flex-col justify-center">
                          <h3 className="text-xl font-semibold mb-2">{thumbnail.quality}</h3>
                          <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Resolution: {thumbnail.dimensions}</p>
                          <button
                            onClick={() => downloadImage(thumbnail)}
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                          >
                            <Download className="w-5 h-5" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:w-[300px] mt-8 lg:mt-0">
              <AdUnit className={`sticky top-4 min-h-[600px] rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} />
            </div>
          </div>

          {/* Bottom Ad */}
          <AdUnit className={`my-8 min-h-[90px] rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} />

          {/* Marketing Section */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Tool?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold mb-2">Multiple Qualities</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Download thumbnails in various resolutions</p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold mb-2">Fast & Free</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>No registration required, instant downloads</p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Simple interface, just paste and download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-blue-50 to-white text-gray-900'}`}>
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/privacy" element={<Privacy isDark={isDark} />} />
        </Routes>

        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;