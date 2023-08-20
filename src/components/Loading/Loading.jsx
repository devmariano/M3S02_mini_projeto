import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './Loading.css';

function Loading() {
  // adicionado o data-testid="loading-icon somente para o teste jest
  return <AiOutlineLoading3Quarters className="loading" data-testid="loading-icon" />;
}

export default Loading;
