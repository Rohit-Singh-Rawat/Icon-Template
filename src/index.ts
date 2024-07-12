#! /usr/bin/env node

import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();

program
	.version('1.0.0')
	.argument('<componentName>', 'Name of the React component')
	.argument('<svgContent>', 'Raw SVG content')
	.action((componentName, svgContent) => {
		generateComponent(componentName, svgContent);
	});

function generateComponent(componentName: string, svgContent: string): void {
	const formattedSvgContent = svgContent
		.replace(/<svg/, '<svg className={cn("size-7", className)}')
		.replace(/stroke-width=/g, 'strokeWidth=')
		.replace(/stroke-linecap=/g, 'strokeLinecap=')
		.replace(/stroke-linejoin=/g, 'strokeLinejoin=')
		.replace(/fill=/g, 'fill=');

	const componentTemplate = `
    import { cn } from '@/utils/cn';
    import React from 'react';

    const ${componentName} = ({ className }: { className?: string }) => {
      return (
        ${formattedSvgContent}
      );
    };

    export default ${componentName};
  `;

	const filePath = path.join(process.cwd(), `${componentName}.tsx`);
	fs.writeFile(filePath, componentTemplate.trim(), (err) => {
		if (err) {
			console.error('Error writing file:', err);
			return;
		}
		console.log(`Component ${componentName}.tsx successfully created!`);
	});
}

program.parse(process.argv);
