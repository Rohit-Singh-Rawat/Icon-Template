# Icon Template

[![npm version](https://badge.fury.io/js/icon-template.svg)](https://badge.fury.io/js/icon-template)

A tool for generating React components from SVG icons with customized classNames.

## Installation

Install `icon-template` using npm:

```bash
npm install icon-template
```
Usage
CLI Usage
You can use icon-template as a CLI tool to generate React component templates from SVG icons.
```bash
npx icon-template ComponentName '<svg ...></svg>'
```
Programmatic Usage
```bash
import { generateComponent } from 'icon-template';

const componentName = 'IconComponent';
const svgContent = '<svg ...></svg>';

generateComponent(componentName, svgContent);

```
Example
```bash
// IconComponent.tsx
import React from 'react';

const IconComponent = ({ className }: { className?: string }) => {
  return (
    <svg
      width='97'
      height='98'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('size-7', className)}
    >
      <path
        d='M54.563 81.333s4.041 0 8.083 8.084c0 0 12.84-20.209 24.25-24.25m-58.604 0h16.167M28.292 44.958h32.333M26.271 14.646c-6.289.19-10.035.889-12.63 3.484-3.553 3.556-3.553 9.275-3.553 20.717v26.295c0 11.447 0 17.165 3.553 20.722 3.549 3.553 9.268 3.553 20.697 3.553h10.105m18.17-74.771c6.29.19 10.04.889 12.631 3.484 3.557 3.556 3.557 9.275 3.557 20.717v16.215'
        stroke='#312A39'
        strokeWidth='8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M26.255 15.656a7.075 7.075 0 0 1 7.073-7.073h22.23a7.073 7.073 0 1 1 0 14.146h-22.23a7.073 7.073 0 0 1-7.073-7.073Z'
        stroke='#312A39'
        strokeWidth='8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconComponent;


```
