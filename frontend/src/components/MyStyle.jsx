import decoImage from '../assets/deco-dots.svg?raw';

const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(decoImage)}`;

export default function MyStyle({ children })
{
    return (
        <div style={{
            color: 'red',
            fontSize: '20px',
            border: '3px solid #940606',
            padding: '20px',
            margin: '10px',
            boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.5)',
            backgroundImage: `url(${svgDataUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            {children}
        </div>
    );
}