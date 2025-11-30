import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '../dist');


function createStaticServer(port) {

    const server = createServer((request, response) => {
        return handler(request, response, {
            public: distPath,
            cleanUrls: true,
            rewrites: [
                {
                    source: '/sommelier-menu/_astro/:path',
                    destination: '/_astro/:path',
                },
            ],
        });
    });

    server.listen(port,);

    return server;
}

async function generatePDF(url, outputPath, title) {
    console.log(`Generating ${title}...`);

    const browser = await chromium.launch();

    try {
        const page = await browser.newPage();

        // Navigate to the URL
        await page.goto(url, {
            waitUntil: 'networkidle'
        });

        // Generate PDF
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                right: '1cm',
                bottom: '1cm',
                left: '1cm'
            }
        });

        console.log(`✓ Generated ${title}`);
    } finally {
        await browser.close();
    }
}

async function main() {
    console.log('Starting PDF generation...\n');

    const port = 8765;
    let server;

    try {
        // Start local server
        console.log(`Starting local server on port ${port}...`);
        server = createStaticServer(port);
        console.log('✓ Server started\n');

        const baseUrl = `http://localhost:${port}`;

        // Generate Menu PDF
        await generatePDF(
            `${baseUrl}/menu/`,
            join(distPath, 'menu.pdf'),
            'Menu PDF'
        );

        // Generate Wines PDF
        await generatePDF(
            `${baseUrl}/wines/`,
            join(distPath, 'wines.pdf'),
            'Carta dei Vini PDF'
        );

        console.log('\n✓ All PDFs generated successfully!');
    } catch (error) {
        console.error('Error generating PDFs:', error);
        process.exit(1);
    } finally {
        if (server) {
            server.close();
        }
    }
}

main();
