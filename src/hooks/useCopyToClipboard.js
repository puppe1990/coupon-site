import { useState } from 'react';

const COPY_FEEDBACK_MS = 2000;

export const useCopyToClipboard = () => {
  const [copiedCode, setCopiedCode] = useState('');

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), COPY_FEEDBACK_MS);
    } catch (error) {
      console.error(`Falha ao copiar o código "${code}":`, error);
    }
  };

  return { copiedCode, copyCode };
};
