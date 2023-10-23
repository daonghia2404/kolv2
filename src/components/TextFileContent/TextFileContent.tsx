import React, { useState, useEffect } from 'react';

import { TTextFileContentProps } from './TextFileContent.types';

const TextFileContent: React.FC<TTextFileContentProps> = ({ filename }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/static/text/${filename}`);
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [filename]);

  return (
    <div>
      <pre>{content}</pre>
    </div>
  );
};

export default TextFileContent;
