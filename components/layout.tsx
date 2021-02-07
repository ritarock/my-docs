import Footer from './footer';
import Header from './header';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Layout({ children }): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
