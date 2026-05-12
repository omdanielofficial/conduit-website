const package = require('./package.json');
const os = require('os');

// Helper to safely get package version
const getVersion = (pkgName, fallback = 'Not Found') => {
  try {
    return require(`${pkgName}/package.json`).version;
  } catch(e) {
    return fallback;
  }
};

// Helper to get version from package.json dependencies
const getDepVersion = (depName) => {
  return package.dependencies?.[depName] || package.devDependencies?.[depName] || 'Not Installed';
};

// Sanitize paths to remove usernames
const sanitizePath = (path) => {
  try {
    return path.replace(/C:\\Users\\[^\\]+/, 'C:\\Users\\***')
               .replace(/\/home\/[^\/]+/, '/home/***')
               .replace(/\/Users\/[^\/]+/, '/Users/***');
  } catch(e) {
    return 'Unknown';
  }
};

const nextVersion = getVersion('next', 'ERROR');
const reactVersion = getVersion('react', 'ERROR');

const versionLine = `   Version: ${package.version}`;
const frameworkLine = `   Next.js ${nextVersion} • React ${reactVersion}`;
const versionPadding = ' '.repeat(Math.max(0, 59 - versionLine.length));
const frameworkPadding = ' '.repeat(Math.max(0, 59 - frameworkLine.length));

const asciiArt = `
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ██╗      █████╗ ████████╗ ██████╗██╗  ██╗               ║
║   ██║     ██╔══██╗╚══██╔══╝██╔════╝██║  ██║               ║
║   ██║     ███████║   ██║   ██║     ███████║               ║
║   ██║     ██╔══██║   ██║   ██║     ██╔══██║               ║
║   ███████╗██║  ██║   ██║   ╚██████╗██║  ██║               ║
║   ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝               ║
║                                                           ║
║   Modern Hosting Theme                                    ║
║${versionLine}${versionPadding}║
║${frameworkLine}${frameworkPadding}║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`;

console.log('\x1b[36m%s\x1b[0m', asciiArt);
console.log('\x1b[33m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');

// Track issues
const issues = [];
const warnings = [];

// Application Info
console.log('\x1b[1m\x1b[36m📦 Application Info:\x1b[0m');
console.log(`   Latch Version:     ${package.version || 'Unknown'}`);
console.log(`   Node Environment:  ${process.env.NODE_ENV || 'development'}`);
console.log(`   Timestamp:         ${new Date().toISOString()} (${new Date().toLocaleString()})`);
console.log('');

// Framework Versions
console.log('\x1b[1m\x1b[36m⚙️  Framework Versions:\x1b[0m');
const nextVer = getVersion('next');
const reactVer = getVersion('react');
const reactDomVer = getVersion('react-dom');
const tsVer = getVersion('typescript');
const tailwindVer = getVersion('tailwindcss');

console.log(`   Next.js:           ${nextVer}`);
console.log(`   React:             ${reactVer}`);
console.log(`   React DOM:         ${reactDomVer}`);
console.log(`   TypeScript:        ${tsVer}`);
console.log(`   TailwindCSS:       ${tailwindVer}`);

// Check for missing critical frameworks
if (nextVer === 'Not Found') issues.push('Next.js not found - run npm install');
if (reactVer === 'Not Found') issues.push('React not found - run npm install');
if (tsVer === 'Not Found') warnings.push('TypeScript not found');
console.log('');

// Key Dependencies
console.log('\x1b[1m\x1b[36m📚 Key Dependencies:\x1b[0m');
const lucideVer = getVersion('lucide-react', getDepVersion('lucide-react'));
const radixVer = getDepVersion('@radix-ui/react-slot');
const cobeVer = getVersion('cobe', getDepVersion('cobe'));

console.log(`   Lucide React:      ${lucideVer}`);
console.log(`   Radix UI (Slot):   ${radixVer}`);
console.log(`   Cobe (Globe):      ${cobeVer}`);

if (lucideVer.includes('Not')) warnings.push('Lucide React may not be installed');
console.log('');

// System Info
console.log('\x1b[1m\x1b[36m💻 System Info:\x1b[0m');
const nodeVersion = process.version || 'Unknown';
const nodeMajor = parseInt(nodeVersion.replace('v', '').split('.')[0]);

console.log(`   Node.js:           ${nodeVersion}`);
console.log(`   Platform:          ${os.platform()} ${os.arch()}`);
console.log(`   OS:                ${os.type()} ${os.release()}`);
console.log(`   CPU Cores:         ${os.cpus().length}`);
console.log(`   Total Memory:      ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`   Free Memory:       ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);

// Check Node.js version compatibility
if (nodeMajor < 18) {
  issues.push(`Node.js ${nodeVersion} is too old. Requires Node.js 18+`);
} else if (nodeMajor < 20) {
  warnings.push(`Node.js ${nodeVersion} works but v20+ recommended`);
}

// Check memory
const freeMemGB = os.freemem() / 1024 / 1024 / 1024;
if (freeMemGB < 1) {
  issues.push(`Low memory: ${freeMemGB.toFixed(2)} GB free. May cause build issues`);
} else if (freeMemGB < 2) {
  warnings.push(`Low memory: ${freeMemGB.toFixed(2)} GB free`);
}

console.log('');

// Configuration
console.log('\x1b[1m\x1b[36m🔧 Configuration:\x1b[0m');
console.log(`   Working Directory: ${sanitizePath(process.cwd())}`);
console.log(`   Project Name:      ${package.name || 'Unknown'}`);
console.log('');

console.log('\x1b[33m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m');

// Display Issues
if (issues.length > 0) {
  console.log('\n\x1b[1m\x1b[31m❌ CRITICAL ISSUES FOUND:\x1b[0m');
  issues.forEach(issue => console.log(`   \x1b[31m•\x1b[0m ${issue}`));
  console.log('');
}

// Display Warnings
if (warnings.length > 0) {
  console.log('\n\x1b[1m\x1b[33m⚠️  WARNINGS:\x1b[0m');
  warnings.forEach(warning => console.log(`   \x1b[33m•\x1b[0m ${warning}`));
  console.log('');
}

// Success message
if (issues.length === 0 && warnings.length === 0) {
  console.log('\x1b[32m✓\x1b[0m All systems operational - No issues detected!\n');
} else if (issues.length === 0) {
  console.log('\x1b[32m✓\x1b[0m System operational with minor warnings\n');
} else {
  console.log('\x1b[31m✗\x1b[0m Critical issues detected - please fix before continuing\n');
}

console.log('\x1b[90m💡 Share this output when reporting issues for faster support.\x1b[0m\n');

