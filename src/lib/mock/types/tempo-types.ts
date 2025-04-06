// types/index.ts
import React, { ReactElement } from 'react';

export interface Section {
  title: string;
  icon: ReactElement;
  content: Question[] | string[] | Keywords[] | RecruiterInfo[];
}

export interface Question {
  q: string;
  a: string;
}

export interface Keywords {
  keyword: string[];
}

export interface RecruiterInfo {
  name: string;
  role: string;
  company: string;
}

export interface QuickActionItem {
  icon: typeof React.Component;
  label: string;
  action?: string;
  count?: number;
}
