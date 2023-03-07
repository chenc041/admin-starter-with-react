import 'reflect-metadata';
import React from 'react';
import RouterApp from './main';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<RouterApp />);
}
