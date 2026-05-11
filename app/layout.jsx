import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Operadores e Inversionistas | Organización de Eventos y Logística Institucional',
  description: 'Convierta su evento en una experiencia exitosa. Servicios hoteleros, catering, y logística para ferias y congresos con respaldo RNT.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="text-slate-800 font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}